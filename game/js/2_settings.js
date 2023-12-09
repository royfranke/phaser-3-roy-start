import HelperHUD from "./helper/hud.js";
/**
 * Main Menu
 */
export default class SystemSettingsScene extends Phaser.Scene {
    constructor() {
        super("System Settings");
    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.selected = 0;
        this.last_selected = 0;
    }

    preload() {
        this.cameras.main.setBackgroundColor('#465e62')
        this.cameras.main.fadeIn(500, 0, 0, 0)
        this.hud = new HelperHUD(this);
    }

    create() {
        this.hud.drawMenu('SETTINGS',this.selected);
    }

    selectNextButton(change) {
        var menu_items = this.hud.menu_list.length;
        this.selected = parseInt(this.selected + change);
        if (this.selected >= menu_items) {
            this.selected = 0;
        }
        if (this.selected < 0) {
            this.selected = menu_items - 1;
        }
    }

    confirmSelection() {
        this.cameras.main.fadeOut(500, 0, 0, 0)
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            if (this.hud.load_selection != null) {
                this.scene.start(this.hud.load_selection)
                this.hud.destroyMenu();
            }
        })
    }

    update() {
        const upJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.up)
        const downJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.down)
        const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)

        if (upJustPressed) {
            this.selectNextButton(-1)
        }
        else if (downJustPressed) {
            this.selectNextButton(1)
        }
        else if (spaceJustPressed) {
            this.confirmSelection()
        }
        this.hud.updateMenu('SETTINGS',this.selected, this.last_selected);
        this.last_selected = this.selected;
    }
}