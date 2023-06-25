import app_menus from "./config/menus.js";
import app_ui from "./config/ui.js";
/**
 * Main Menu
 */
export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("Main Menu");
    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.selected = 0;
        this.ui = app_ui;
        this.menu = app_menus.MAIN;
    }

    preload() {
        this.cameras.main.setBackgroundColor('#333333')
        this.cameras.main.fadeIn(500, 0, 0, 0)
    }

    create() {
        this.drawMenu();
    }

    drawMenu() {
        var self = this;
        this.menu.forEach(function (menu, index) {
            self.add
                .text(self.ui.MARGIN.LEFT, (index * self.ui.FONT.MENU.LINE_HEIGHT) + self.ui.MARGIN.TOP, `${menu.label}`, {
                    font: `${self.ui.FONT.MENU.FONT_SIZE}` + "px monospace",
                    fill: "#000000",
                    padding: { x: self.ui.PADDING.LEFT, y: self.ui.PADDING.TOP },
                    backgroundColor: (self.selected == index ? "yellow" : "#ffffff"),
                })
                .setScrollFactor(0);
        });
    }

    selectNextButton(change) {
        var menu_items = this.menu.length;
        this.selected = parseInt(this.selected + change);
        if (this.selected >= menu_items) {
            this.selected = 0;
        }
        if (this.selected < 0) {
            this.selected = menu_items - 1;
        }
        this.drawMenu();
    }

    confirmSelection() {
        // TODO
        this.cameras.main.fadeOut(500, 0, 0, 0)
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            // Go to the main menu
            this.scene.start(this.menu[this.selected].scene)
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
    }
}