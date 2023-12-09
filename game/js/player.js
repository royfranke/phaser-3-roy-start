import PLAYER_STATES from "./config/player-states.js";
import HelperUtilities from "./helper/utilities.js";
import HelperGround from "./helper/ground.js";
import PocketService from "./service/pocket.js";
import QuestService from "./service/quest.js";
import Item from "./class/item.js";
import Bag from "./class/bag.js";
import CoinpurseService from "./service/coinpurse.js";
import ActionService from "./service/action.js";
import FXService from "./service/fx.js";

export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.utility = new HelperUtilities();
    this.ground = new HelperGround(this.scene);
    this.pockets = new PocketService(this.scene);
    this.quests = new QuestService(this.scene);
    
    this.fx = new FXService(this.scene);
    this.coinpurse = new CoinpurseService(this.scene);
    this.action = new ActionService(this.scene);
    
    this.facing = 's';
    
    //this.quests.getCurrentQuest();

    this.sprite = this.scene.physics.add.sprite(x, y, "player-IDLE", 0).setSize(16, 12).setOffset(8, 16);

    this.scene.physics.add.collider(this.sprite, this.scene.mapper.groundLayer);
    //this.scene.mapper.map.setCollisionBetween(544, 595);

    this.footShadow = this.scene.add.ellipse(0,0, 12, 6, 0x000000);
    this.footShadow.setAlpha(.25);
    this.footMask = this.scene.add.circle(0,0, 16, 0x6666ff);
    this.footMask.setVisible(false);
    this.sprite.setMask(new Phaser.Display.Masks.BitmapMask(this.scene, this.footMask));
    
    //this.debugUnderfootTile = this.scene.add.rectangle(0, 0, 16, 16, 0xefc53f).setOrigin(0);
    this.underfoot = null;
    this.updateActiveTile();
    //this.bag = new Bag();
  }

  freeze() {
    this.sprite.anims.stop();
    //this.footMask.anims.stop();
  }

  update() {
    this.last_state = this.state;
    this.pockets.update();
    this.updateSprite();
    this.action.updateActionAvailability();
  }


  updateSprite () {
    const dir_faces = PLAYER_STATES.DIR_FACES;
    const sprite = this.sprite;

    //sprite.body.setVelocity(0);
    sprite.setDepth(sprite.y + 8);

    if (this.scene.ctrl.focusState == 'PLAYER') {
      this.state = this.updateState(this.state);
      const ctrl = this.scene.ctrl.CTL;
      const speed = this.updateSpeed();
      this.facing = this.utility.getFacing(this.facing,ctrl.UP.HOLD, ctrl.RIGHT.HOLD, ctrl.DOWN.HOLD, ctrl.LEFT.HOLD);

      if (this.facing != this.last_facing || speed != 0) {
        this.action.updateActionTile(this.facing);
      }
      
      if (this.state == 'WALK') {
        sprite.body.setVelocity(0);
      }
      // Horizontal movement
      if (ctrl.LEFT.HOLD) {
        sprite.body.setVelocityX(-speed);
      } else if (ctrl.RIGHT.HOLD) {
        sprite.body.setVelocityX(speed);
      }
      var flip = (this.facing == 'nw' || this.facing == 'w' || this.facing == 'sw') ? true : false;
      sprite.setFlipX(flip); 
      // Vertical movement
      if (ctrl.UP.HOLD) {
        sprite.body.setVelocityY(-speed);
      } else if (ctrl.DOWN.HOLD) {
        sprite.body.setVelocityY(speed);
      }

      // Normalize and scale the velocity so that sprite can't move faster along a diagonal
      sprite.body.velocity.normalize().scale(speed);
    }

    if (this.scene.ctrl.focusState != 'PAUSE') {
      if (this.scene.ctrl.focusState == 'POCKETS') {
        this.state = 'IDLE';
        sprite.body.setVelocity(0);
      }
      sprite.anims.play("player-"+this.state+"-"+dir_faces[this.facing], true);
    }
    else {
      sprite.body.setVelocity(0);
      sprite.anims.stop();
      this.action.showMenu = false;
    }
    this.updateActiveTile();
  }

  updateActiveTile() {
    
    this.standingTile = this.scene.mapper.groundLayer.worldToTileXY(this.sprite.x, this.sprite.y+8); 
    this.snappedStanding = this.scene.mapper.groundLayer.tileToWorldXY(this.standingTile.x, this.standingTile.y);
    
    //this.debugUnderfootTile.setPosition(this.snappedStanding.x, this.snappedStanding.y);
    this.underfootLast = this.underfoot;
    this.underfoot = this.ground.getGround(this.standingTile.x, this.standingTile.y, this.scene.mapper.groundLayer);
    this.underAction = this.ground.getGround(this.action.actionTile.x, this.action.actionTile.y, this.scene.mapper.groundLayer);


    if (this.underfoot.TYPE == 'LEAVES') {
      this.footMask.setPosition(this.sprite.x, this.sprite.y - 7);
      //this.footShadow.setVisible(false);
      this.footShadow.setVisible(true);
      this.footShadow.setScale(1.25);
      this.footShadow.setPosition(this.sprite.x, this.sprite.y + 8);
    }
    else if (this.underfoot.TYPE == 'MULCH') {
      this.footMask.setPosition(this.sprite.x, this.sprite.y - 6);
      this.footShadow.setVisible(true);
      this.footShadow.setScale(1.25);
      this.footShadow.setPosition(this.sprite.x, this.sprite.y + 9);
    }
    else if (this.underfoot.TYPE == 'GRASS') {
      this.footMask.setPosition(this.sprite.x, this.sprite.y - 6);
      this.footShadow.setVisible(true);
      this.footShadow.setScale(1);
      this.footShadow.setPosition(this.sprite.x, this.sprite.y + 9);
    }
    else {
      this.footMask.setPosition(this.sprite.x, this.sprite.y);
      this.footShadow.setVisible(true);
      this.footShadow.setScale(1);
      this.footShadow.setPosition(this.sprite.x, this.sprite.y+10);
    }
    this.footShadow.setDepth(this.sprite.depth - 1);
    this.footMask.setDepth(this.sprite.depth + 1);

  }

  interpretSpeed(speed) {
    var interpretted = 0;
    switch(speed) {
      case 'BASE_SPEED':
        if (this.state == 'RUN') {
          interpretted = 180;
        }
        if (this.state == 'WALK') {
          interpretted = 72;
        }
      break;
      case 'CRISP':
        if (this.state == 'RUN') {
          interpretted = 195;
        }
        if (this.state == 'WALK') {
          interpretted = 85;
        }
      break;
      case 'QUICKENED':
        if (this.state == 'RUN') {
          interpretted = 210;
        }
        if (this.state == 'WALK') {
          interpretted = 100;
        }
      break;
      case 'SLOWED':
        if (this.state == 'RUN') {
          interpretted = 120;
        }
        if (this.state == 'WALK') {
          interpretted = 60;
        }
      break;
      case 'SLOG':
        if (this.state == 'RUN') {
          interpretted = 80;
        }
        if (this.state == 'WALK') {
          interpretted = 45;
        }
      break;
      case 'MOLASSES':
        if (this.state == 'RUN') {
          interpretted = 80;
        }
        if (this.state == 'WALK') {
          interpretted = 30;
        }
      break;
    }
    return interpretted;
  }

  updateSpeed() {
    
    if (this.state == 'IDLE') {
      return 0;
    }
    if (this.state == 'DIG') {
      return 0;
    }
    if (this.state == 'PUSH') {
      return 20;
    }
    if (this.state == 'PULL') {
      return -20;
    }
    if (this.state == 'HOP') {
      return 60;
    }
    if (this.underfoot.TYPE == 'CURB' && this.state != 'HOP') {
      this.state = 'HOP';
      this.sprite.anims.currentAnim.getFrameByProgress(1);
      return 80; 
    }
    return this.interpretSpeed(this.underfoot.SPEED);
  }

  updateState(state) {
    const ctrl = this.scene.ctrl.CTL;
    if (state == 'DIG' && this.sprite.anims.currentFrame.index < 10) {
      return 'DIG';
    }
    if (state == 'HOP' && this.sprite.anims.currentFrame.index < 5) {
      return 'HOP'; 
    }

    if (state == 'PULL' && this.sprite.anims.currentFrame.index < 7) {
      return state; 
    }

    if (ctrl.HOP.TAP && (state != 'HOP') ) {
      let box = this.scene.ui.tellDialogBox('I am hopping.');
      const test_items = ['letter','apple','apple_trash','banana','banana_trash'];
      var test_var = Phaser.Math.RND.between(0, (test_items.length - 1));
      //var test_item = new Item(this.scene,test_items[test_var]);
      var test_item = new Bag(this.scene,'test');
      this.scene.itemRegistry.placeItem(test_item, this.action.actionTile.x, this.action.actionTile.y);
      this.sprite.anims.currentAnim.getFrameByProgress(0);
      return 'HOP'; 
    }

    
    if (ctrl.SELECT.TAP && this.action.availableActions.length > 0 ) {
      let obj = this.action.availableActions[0].object;
      if (obj != '') {
        obj.doAction(this.action.availableActions[0].action);
        return 'PULL';
      }
      else {
        this.doAction(this.action.availableActions[0]);
        this.sprite.anims.currentAnim.getFrameByProgress(0);
        return this.action.availableActions[0].action;
      }
    }

      if (ctrl.UP.HOLD || ctrl.RIGHT.HOLD || ctrl.DOWN.HOLD || ctrl.LEFT.HOLD ) {
        if (ctrl.RUN.HOLD) {
          return 'RUN';
        }
        else {
          return 'WALK';
        }
      }
      else {
        return 'IDLE';
      }
    
    return state;
  }

  setState (state) {
    this.state = state;
  }

  doAction (action) {
    if (action.action == 'DIG') {
        this.setState('DIG');
        this.scene.time.addEvent({
          delay: 500,
          callback: ()=>{
             this.fx.dustUp(this.snappedStanding.x, this.snappedStanding.y);
             this.digUp(this.snappedStanding.x, this.snappedStanding.y);
             if (this.underAction.TYPE == 'LEAVES') {
              this.ground.placeTileType(this.action.actionTile.x, this.action.actionTile.y,  this.scene.mapper.groundLayer, 'MULCH', true);
             }
             else if (this.underAction.TYPE == 'MULCH') {
              this.ground.placeTileType(this.action.actionTile.x, this.action.actionTile.y,  this.scene.mapper.groundLayer, 'DIRT', true);
             }
             else {
              this.ground.placeTileType(this.action.actionTile.x, this.action.actionTile.y,  this.scene.mapper.groundLayer, 'GARDEN', true);
             }
             
                    },
          loop: false
        })
        
    }
  }

  digUp(_x,_y) {
    /// Get odds on this tile from somewhere
    const yielded = [1,1,1,1,5,5,10,10,25,25];
    var empties = Phaser.Math.RND.between(4, 20);
    
    for (var i=0;i<empties;i++) {
      yielded.push(0)
    }
    
    Phaser.Utils.Array.Shuffle(yielded);
    if (yielded[0] > 0) {
      this.coinpurse.addCoin(yielded[0]);
      this.fx.coinUp(_x,_y,yielded[0],'');
    }
  }


  destroy() {
    this.sprite.destroy();
  }
}
