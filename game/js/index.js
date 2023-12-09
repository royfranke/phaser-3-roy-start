import SplashScene from "./0_splash.js";
import MainMenuScene from "./1_main-menu.js";
import SystemSettingsScene from "./2_settings.js";
import NewGameScene from "./3_new-game.js";
import LoadGameScene from "./4_load-game.js";
import TutorialScene from "./5_tutorial.js";
import TestScene from "./6_test.js";


const config = {
  type: Phaser.WEBGL,
  width: 960,
  height: 540,
  backgroundColor: "#3a3a50",
  parent: "game-container",
  pixelArt: true,
  scene: [
    SplashScene,
    MainMenuScene,
    SystemSettingsScene,
    NewGameScene,
    LoadGameScene,
    TutorialScene,
    TestScene
  ],
  physics: {
    default: "arcade",
    arcade: {
      //debug: true,
      gravity: { y: 0 },
    },
  },
  dom: {
    createContainer: true
  },
};

const game = new Phaser.Game(config);
