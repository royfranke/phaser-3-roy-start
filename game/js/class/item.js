/* Item Class */

export default class Item extends Phaser.GameObjects.Sprite {
    constructor(scene, slug) {
        super(scene, slug);
        this.scene = scene;
        this.registered = false;
        this.tile_x = 0;
        this.tile_y = 0;
        this.sprite = null;
        
        this.NAME = 'apple';
        
        this.ICON = slug;
        this.actions = [{action: 'PICK UP', object: this}];

    }

    addActions (actionService) {
        this.actions.forEach(function(action){
            actionService.addAction(action);
        });
        
    }

    setRegistration (registered,coord=null) {
        this.registered = registered;
        if (registered && coord != null) {
            this.setTileLocation(coord.x, coord.y);
        }
        else if (this.sprite != null) {
            console.log('Destroy!' );
            // Destroy world sprite
            this.sprite.destroy();
            this.sprite = null;
            this.sprite_shadow.destroy();
            this.sprite_shadow = null;
            //this.scene.player.action.clearActions();
        }
    }

    doAction (action) {
        if (action == 'PICK UP') {
            var valid = this.scene.player.pockets.availablePocket('HOLDS', this);
            if (valid) {
                this.scene.itemRegistry.removeItem(this.tile_x, this.tile_y);
            }
            else {
                this.scene.ui.tellBrain('My hands are too full for this '+this.NAME,2000,'missing');
            }
            
        }
    }

    setTileLocation (_x,_y) {
        this.tile_x = _x;
        this.tile_y = _y;

        var x_pixels = _x * 16;
        var y_pixels = _y * 16;

        this.sprite = this.scene.physics.add.staticSprite(x_pixels, y_pixels, 'HOLDS', this.ICON, 0).setOrigin(0,0).setDepth(y_pixels);

        this.sprite_shadow = this.scene.add.ellipse(x_pixels, y_pixels + 9, 12, 6, 0x000000).setOrigin(0,0);
        this.sprite_shadow.setAlpha(.25);
    }

    destroy () {

    }
    
}