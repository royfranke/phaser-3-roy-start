/**
 * Tutorial
 */
export default class TutorialScene extends Phaser.Scene {
    constructor() {
        super("Tutorial");
    }

    init() {

    }

    preload() {
        this.cameras.main.setBackgroundColor('#7758ab')
        this.cameras.main.fadeIn(500, 0, 0, 0)
    }

    create() {

    }

    update() {

    }
}