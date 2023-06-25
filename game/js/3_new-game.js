import app_menus from "./config/menus.js";
/**
 * New Game
 */
export default class NewGameScene extends Phaser.Scene {
    constructor() {
        super("New Game");
    }

    init() {

    }

    preload() {
        this.cameras.main.setBackgroundColor('#cccccc')
        this.cameras.main.fadeIn(500, 0, 0, 0)
    }

    create() {

    }

    update() {

    }
}