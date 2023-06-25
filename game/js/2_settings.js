import app_menus from "./config/menus.js";
import app_ui from "./config/ui.js";
/**
 * System Settings
 */
export default class SystemSettingsScene extends Phaser.Scene {
    constructor() {
        super("System Settings");
    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys()
        this.selected = 0;
        this.setting = app_ui;
        this.menu = app_menus.SETTINGS;
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
                .text(self.setting.MARGIN.LEFT, (index * self.setting.FONT.MENU.LINE_HEIGHT) + self.setting.MARGIN.TOP, `${menu.label}`, {
                    font: `${self.setting.FONT.MENU.FONT_SIZE}` + "px monospace",
                    fill: "#000000",
                    padding: { x: self.setting.PADDING.LEFT, y: self.setting.PADDING.TOP },
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

    menuFunction(menu_function) {
        switch (menu_function) {
            case 'toMainMenu':
                this.cameras.main.fadeOut(500, 0, 0, 0)
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('Main Menu')
                })
                break;
        }
    }

    confirmSelection() {
        this.menuFunction(this.menu[this.selected].function);

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