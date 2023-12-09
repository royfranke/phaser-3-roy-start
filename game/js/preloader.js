import PLAYER_STATES from "./config/player-states.js";

export default class Preloader{
  constructor(scene) {
    this.scene = scene;
    this.scene.load.image('ground', '../assets/tilesets/atlas-test.png');

    this.preloadStateSprites();
    this.preloadInventorySprites();
    
    this.scene.load.image('soiltiles', '../assets/tilesets/soil-test.png');
    
    this.scene.load.image('tiles', '../assets/tilesets/soil-test-2.png');
    this.scene.load.image('dialogBox', "../assets/spritesheets/dialog-box.png");
    this.scene.load.image('mapBox', "../assets/spritesheets/map-box.png");
   
    this.scene.load.atlas('BLOCK', '../assets/spritesheets/a_BLOCK.png', '../assets/atlas/BLOCK.json');
    this.scene.load.atlas('EQUIPT', '../assets/spritesheets/a_TOOL.png', '../assets/atlas/TOOL.json');
    this.scene.load.atlas('WEARS', '../assets/spritesheets/a_BAG.png', '../assets/atlas/BAG.json');
    this.scene.load.atlas('HOLDS', '../assets/spritesheets/a_ITEM.png', '../assets/atlas/ITEM.json');
    this.scene.load.atlas('EMPTY', '../assets/spritesheets/a_EMPTY.png', '../assets/atlas/EMPTY.json');
    this.scene.load.atlas('TREE', '../assets/spritesheets/a_TREE.png', '../assets/atlas/TREE.json');
    this.scene.load.atlas('POLE', '../assets/spritesheets/a_POLE.png', '../assets/atlas/POLE.json');
    this.scene.load.atlas('PICKET', '../assets/spritesheets/a_PICKET.png', '../assets/atlas/PICKET.json');
    this.scene.load.atlas('SIGN', '../assets/spritesheets/a_SIGN.png', '../assets/atlas/SIGN.json');
    this.scene.load.atlas('COINPURSE', '../assets/spritesheets/a_COINPURSE.png', '../assets/atlas/COINPURSE.json');

    this.scene.load.spritesheet(
      "dust",
      "../assets/spritesheets/dust_1-sheet.png",
      {
        frameWidth: 32,
        frameHeight: 12
      }
    );

    this.scene.load.spritesheet(
      "MAILBOX_1",
      "../assets/spritesheets/MAILBOX_1.png",
      {
        frameWidth: 13,
        frameHeight: 29
      }
    );

    this.scene.load.spritesheet(
      "POSTBOX_FRONT",
      "../assets/spritesheets/POSTBOX_FRONT.png",
      {
        frameWidth: 21,
        frameHeight: 31
      }
    );

    this.scene.load.spritesheet(
      "POSTBOX_SIDE",
      "../assets/spritesheets/POSTBOX_SIDE.png",
      {
        frameWidth: 22,
        frameHeight: 34
      }
    );

    this.scene.load.spritesheet(
      "NEWSPAPER_BLUE",
      "../assets/spritesheets/NEWSPAPER_BLUE.png",
      {
        frameWidth: 18,
        frameHeight: 33
      }
    );

    this.scene.load.spritesheet(
      "NEWSPAPER_YELLOW",
      "../assets/spritesheets/NEWSPAPER_YELLOW.png",
      {
        frameWidth: 18,
        frameHeight: 32
      }
    );

    this.scene.load.spritesheet(
      "commercial_fridge",
      "../assets/spritesheets/commercial-fridge-sheet.png",
      {
        frameWidth: 22,
        frameHeight: 36
      }
    );
    this.scene.load.spritesheet(
      "coin",
      "../assets/spritesheets/COINS-sheet.png",
      {
        frameWidth: 16,
        frameHeight: 16
      }
    );

    this.scene.load.spritesheet(
      "action-marker",
      "../assets/spritesheets/action-marker.png",
      {
        frameWidth: 32,
        frameHeight: 32
      }
    );

  }

  preloadStateSprites () {
    const loading = this.scene.load;
    const states = PLAYER_STATES.STATES;
    states.forEach(function (state, index) {
      loading.spritesheet(
        "player-"+state,
        "../assets/spritesheets/skele_"+state+"-sheet.png",
        {
          frameWidth: 32,
          frameHeight: 32
        }
      );
    });
  }

  preloadInventorySprites () {
    const loading = this.scene.load;
    loading.spritesheet(
      "coins",
      "../assets/spritesheets/COINS-sheet.png",
      {
        frameWidth: 16,
        frameHeight: 16
      }
    );
  }

}
