/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tileset, Michele "Buch" Bucelli (tileset artist) & Abram Connelly (tileset sponsor):
 *     https://opengameart.org/content/top-down-dungeon-tileset
 *  - Character, Michele "Buch" Bucelli:
 *      https://opengameart.org/content/a-platformer-in-the-forest
 */
import SplashScene from "./0_splash.js";
import MainMenuScene from "./1_main-menu.js";
import SystemSettingsScene from "./2_settings.js";
import NewGameScene from "./3_new-game.js";
import LoadGameScene from "./4_load-game.js";
import DungeonScene from "./dungeon-scene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#3a3a50",
  parent: "game-container",
  pixelArt: true,
  scene: [SplashScene, MainMenuScene, NewGameScene, LoadGameScene, SystemSettingsScene, DungeonScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
