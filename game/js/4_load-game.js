/**
 * Load Game
 */
export default class LoadGameScene extends Phaser.Scene {
    constructor() {
        super("Load Game");
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