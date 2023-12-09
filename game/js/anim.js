
import PLAYER_STATES from "./config/player-states.js";
import MONEY from "./reference/money.js";

export default class Anim {
  constructor(scene) {

    this.scene = scene;

    const anims = this.scene.anims;

    const states = PLAYER_STATES.STATES;
    const faces = PLAYER_STATES.FACES;
    
    states.forEach(function (state, index) {
      faces.forEach(function (face, index) {
        anims.create({
          key: "player-"+state+"-"+face,
          frames: anims.generateFrameNumbers("player-"+state, 
           { start: PLAYER_STATES[state].ANIM[face].START, end: PLAYER_STATES[state].ANIM[face].END }
          ),
          frameRate: 8,
          repeat: -1,
        });
      });
    });

    const moneyAnims = MONEY.ANIM;
    const coins = MONEY.COINS;

    coins.forEach(function (coin, index) {
      anims.create({
        key: "COIN-"+coin,
        frames: anims.generateFrameNumbers("coins", 
          { start: moneyAnims[coin].START, end: moneyAnims[coin].END }
        ),
        frameRate: 8,
        repeat: -1,
      });
      anims.create({
        key: "COIN-"+coin+"-HEADS",
        frames: anims.generateFrameNumbers("coins", 
          { start: moneyAnims[coin].HEADS.START, end: moneyAnims[coin].HEADS.END }
        ),
        frameRate: 8,
        repeat: -1,
      });
      anims.create({
        key: "COIN-"+coin+"-TAILS",
        frames: anims.generateFrameNumbers("coins", 
          { start: moneyAnims[coin].TAILS.START, end: moneyAnims[coin].TAILS.END }
        ),
        frameRate: 8,
        repeat: -1,
      });
    });
    this.scene.anims.create({
      key: "dust_cloud",
      frames: this.scene.anims.generateFrameNumbers("dust", 
       { start: 0, end: 4 }
      ),
      frameRate: 8,
      repeat: 0,
    });
    this.scene.anims.create({
      key: "action-marker",
      frames: this.scene.anims.generateFrameNumbers("action-marker", 
       { start: 0, end: 3}
      ),
      frameRate: 8,
      repeat: -1,
    });
    

    anims.create({
      key: "MAILBOX_1_OPENING",
      frames: anims.generateFrameNumbers("MAILBOX_1", 
       { start: 0, end: 4 }
      ),
      frameRate: 8,
      repeat: 0,
    });

    anims.create({
      key: "MAILBOX_1_CLOSING",
      frames: anims.generateFrameNumbers("MAILBOX_1", 
       { start: 4, end: 0 }
      ),
      frameRate: 8,
      repeat: 0,
    });

    let NEWSPAPER_COLOR = ['BLUE','YELLOW'];

    NEWSPAPER_COLOR.forEach(function (COLOR, index) {
      anims.create({
        key: "NEWSPAPER_"+COLOR+"_COIN_JIGGLE",
        frames: anims.generateFrameNumbers("NEWSPAPER_"+COLOR, 
         { start: 0, end: 1 }
        ),
        frameRate: 8,
        repeat: 2,
      });
  
      anims.create({
        key: "NEWSPAPER_"+COLOR+"_COIN_DISPENSING",
        frames: anims.generateFrameNumbers("NEWSPAPER_"+COLOR, 
         { start: 0, end: 5 }
        ),
        frameRate: 8,
        repeat: 0,
      });
  
      anims.create({
        key: "NEWSPAPER_"+COLOR+"_COIN_RETRACTING",
        frames: anims.generateFrameNumbers("NEWSPAPER_"+COLOR, 
         { start: 6, end: 1 }
        ),
        frameRate: 8,
        repeat: 0,
      });
    });


    this.scene.anims.create({
      key: "commercial_fridge-closed",
      frames: this.scene.anims.generateFrameNumbers("commercial_fridge", 
       { start: 0, end: 1 }
      ),
      frameRate: 8,
      repeat: 0,
    });
    this.scene.anims.create({
      key: "commercial_fridge-opening",
      frames: this.scene.anims.generateFrameNumbers("commercial_fridge", 
       { start: 0, end: 8 }
      ),
      frameRate: 8,
      repeat: 0,
    });

  }


}
