import PLAYER_STATES from "./config/player-states.js";
import HelperUtilities from "./helper/utilities.js";
import HelperGround from "./helper/ground.js";
import FXService from "./service/fx.js";

export default class Npc {
  

  constructor(scene, x, y) {
    this.scene = scene;
    this.utility = new HelperUtilities();
    this.ground = this.scene.player.ground;
    this.destinations = [];
    
    this.facing = 's';
    this.top = false;
    this.right = false;
    this.left = false;
    this.down = false;
    this.state = 'IDLE';

    this.sprite = this.scene.physics.add.sprite(x, y, "player-IDLE", 0).setSize(16, 12).setOffset(8, 16);

    this.standingTile = {
      x: Math.floor(x/16),
      y: Math.floor(y/16)
    };

    this.scene.physics.add.collider(this.sprite, this.scene.mapper.groundLayer);
    this.scene.physics.add.collider(this.sprite, this.scene.player.sprite);
    this.sprite.setCollideWorldBounds(true);
    //this.scene.mapper.map.setCollisionBetween(544, 595);

    this.footShadow = this.scene.add.ellipse(0,0, 12, 6, 0x000000);
    this.footShadow.setAlpha(.25);
    this.footMask = this.scene.add.circle(0,0, 16, 0x6666ff);
    this.footMask.setVisible(false);
    this.sprite.setMask(new Phaser.Display.Masks.BitmapMask(this.scene, this.footMask));
    
    //this.debugUnderfootTile = this.scene.add.rectangle(0, 0, 16, 16, 0xefc53f).setOrigin(0);
    this.underfoot = null;

    this.hoptimer = 0;
  }

  freeze() {
    this.sprite.anims.stop();
    //this.footMask.anims.stop();
  }

  update() {
    this.last_state = this.state;
    this.updateSprite();
  }

  updateActions () {
      let action = {action: 'SAY HELLO', object: this};
      this.scene.player.action.addAction(action);
  }

  updateSprite () {
    const dir_faces = PLAYER_STATES.DIR_FACES;
    const sprite = this.sprite;

    //sprite.body.setVelocity(0);
    sprite.setDepth(sprite.y + 8);

    if (this.scene.ctrl.focusState == 'PLAYER') {
      this.checkItinerary();
      const speed = this.updateSpeed();
      

      var flip = (this.facing == 'nw' || this.facing == 'w' || this.facing == 'sw') ? true : false;
      sprite.setFlipX(flip); 
      
      if (this.state == 'WALK' || this.state == 'IDLE') {
        sprite.body.setVelocity(0);
      }

      if (this.state == 'WALK' || this.state == 'RUN') {
        // Horizontal movement
        if (this.facing == 'w' || this.facing == 'nw' || this.facing == 'sw') {
          sprite.body.setVelocityX(-speed);
        } else if (this.facing == 'e' || this.facing == 'ne' || this.facing == 'se') {
          sprite.body.setVelocityX(speed);
        }
      
        // Vertical movement
        if (this.facing == 'n' || this.facing == 'nw' || this.facing == 'ne') {
          sprite.body.setVelocityY(-speed);
        } else if (this.facing == 's' || this.facing == 'sw' || this.facing == 'se') {
          sprite.body.setVelocityY(speed);
        }

        // Normalize and scale the velocity so that sprite can't move faster along a diagonal
        sprite.body.velocity.normalize().scale(speed);
      }
    }

    if (this.scene.ctrl.focusState != 'PAUSE') {
      sprite.anims.play("player-"+this.state+"-"+dir_faces[this.facing], true);
    }
    else {
      sprite.body.setVelocity(0);
      sprite.anims.stop();
    }
    this.updateActiveTile();
  }

  goTo (_x,_y) {
    if (this.destinations.length == 0) {
      this.destinations.push({x: _x, y: _y});
    }
    else {
      var last_spot = this.destinations[(this.destinations.length - 1)];
      if (last_spot.x != _x && last_spot.y != _y) {
        this.destinations.push({x: _x, y: _y});
        console.log(this.destinations);
      }
    }

  }

  clearDestinations () {
    this.destinations = [];
    this.setState('IDLE');
  }

  follow (object) { /// Could be player, NPC, or other moving target, must having facing and standingTile.x standingTile.y properties
    if (this.standingTile.x != object.standingTile.x && this.standingTile.y != object.standingTile.y) {
      this.goTo(object.standingTile.x,object.standingTile.y);
    }
    else {
      this.setState('IDLE');
    }
  }

  moveToward (_x,_y) {
    this.setState('WALK');
    var x_distance = this.standingTile.x - _x;
    var y_distance = this.standingTile.y - _y;
    var up = false;
    var right = false;
    var down = false;
    var left = false;

    if (x_distance > 0) {
      left = true;
    }
    else if (x_distance < 0) {
      right = true;
    }
    if (y_distance > 0) {
      up = true;
    }
    else if (y_distance < 0) {
      down = true;
    }
    this.facing = this.utility.getFacing(this.facing,up,right,down,left);
  }

  checkItinerary () {
    if (this.destinations.length > 0) {
      /// Move toward the next location
      if (this.standingTile.x == this.destinations[0].x && this.standingTile.y == this.destinations[0].y) { // Arrived at the destination TILE!
        this.destinations.shift();
        this.setState('IDLE');
      }
      else {
        this.moveToward(this.destinations[0].x,this.destinations[0].y);
      }
    }
    else { /// No locations queued.
      this.setState('IDLE');
    }
  }

  updateActiveTile() {
    
    this.standingTile = this.scene.mapper.groundLayer.worldToTileXY(this.sprite.x, this.sprite.y+8); 
    this.snappedStanding = this.scene.mapper.groundLayer.tileToWorldXY(this.standingTile.x, this.standingTile.y);

    if (this.scene.player.standingTile.x == this.standingTile.x && this.scene.player.standingTile.y == this.standingTile.y) {
      this.updateActions();
    }
    
    //this.debugUnderfootTile.setPosition(this.snappedStanding.x, this.snappedStanding.y);
    this.underfootLast = this.underfoot;
    this.underfoot = this.ground.getGround(this.standingTile.x, this.standingTile.y, this.scene.mapper.groundLayer);

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

  setState (state) {
    this.state = state;
  }

  destroy() {
    this.sprite.destroy();
  }
}
