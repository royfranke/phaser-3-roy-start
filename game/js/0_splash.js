/**
 * Splash Scene
 */
export default class SplashScene extends Phaser.Scene {
    constructor() {
        super("Splash");
    }

    preload() {
        this.load.image("splash", "../assets/images/splash.png");
    }

    create() {
        // Fade In
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        // Draw splash logo in center of screen
        this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "splash");
        // Wait 3 seconds
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                // Fade out
                this.cameras.main.fadeOut(1000, 0, 0, 0)
            }
        })
        // After Fade Out completes...
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            // Go to the main menu
            this.scene.start('Main Menu')
        })
    }
}
