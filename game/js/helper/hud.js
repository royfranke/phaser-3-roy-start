import app_ui from "../config/ui.js";
import app_menus from "../config/menus.js";
/**
 * A small helper class that lays out menus
 */
 export default class HelperHUD {
    constructor(scene) {
        this.scene = scene;

        this.ui = app_ui;
        this.menu_list = null;
        this.load_selection = null;
        this.menu_config = app_menus;
        this.margin = {
            left: this.ui.MARGIN.LEFT,
            right: this.ui.MARGIN.RIGHT,
            top: this.ui.MARGIN.TOP,
            bottom: this.ui.MARGIN.BOTTOM,
            width: parseInt(this.ui.MARGIN.LEFT + this.ui.MARGIN.RIGHT),
            height: parseInt(this.ui.MARGIN.TOP + this.ui.MARGIN.BOTTOM)
        };
        this.style_active = {
            'color': '#ffe57b',
            width: 'auto',
            'padding': '2px 8px',
            'text-shadow': '2px 2px #b29638',
            font: this.ui.FONT.MENU.FONT_SIZE+'px menuFontItalic',
        };

        this.style_inactive = {
            'color': '#95e3e3',
            width: 'auto',
            'padding': '2px 4px',
            'text-shadow': '2px 2px #2d4275',
            font: this.ui.FONT.MENU.FONT_SIZE+'px menuFont',
        };
    }

    drawTest (content,_x,_y) {
        const style = {
            'background-color': '#f0efde',
            width: 'auto',
            'padding': '4px 8px',
            font: '16px defaultFont',
        };
        const element = this.scene.add.dom(_x,_y, 'div', style, content).setOrigin(0);

        this.scene.time.addEvent({
            delay: 3000,
            callback: ()=>{
               element.destroy();
            }
        });
    }

    drawMenu(menu_name, selected) {
        if (this.menu_list != null) {
            this.menu_list.forEach(function (menu_item, index) {
                menu_item.destroy();
            });
        }
        this.menu = this.menu_config[menu_name];

        let menu_list = [];
        const self = this;
        this.menu.forEach(function (menu_item, index) { // "this" must be refered to locally ("self") within a forEach loop
            let element = self.scene.add.dom(self.ui.MARGIN.LEFT,
                (index * self.ui.FONT.MENU.LINE_HEIGHT) + self.ui.MARGIN.TOP, 'div', (selected == index ? self.style_active : self.style_inactive ), `${menu_item.LABEL}`).setOrigin(0,0);
            menu_list.push(element);
            
            if (selected == index) {
                self.load_selection = menu_item.LOADER;
            }
        });

        this.menu_list = menu_list;
    }

    updateMenu(menu_name,selected,last_selected) {
        if (selected != last_selected) {
            this.drawMenu(menu_name,selected);
        }
    }

    destroyMenu() {
        if (this.menu_list != null) {
            this.menu_list.forEach(function (menu_item, index) {
                menu_item.destroy();
            });
        }
    }
    
}