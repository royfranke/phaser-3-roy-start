import app_menus from "./config/menus.js";
/**
 * Tile Test
 */
export default class TileTestScene extends Phaser.Scene {
    constructor() {
        super("Tile Test");
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