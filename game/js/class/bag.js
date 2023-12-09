/* Bag Class */

export default class Bag {

    NAME;
    ICON;
    SLOTS;
    ITEMS;

    constructor(scene, slug) {
        this.scene = scene;
        this.registered = false;
        this.tile_x = 0;
        this.tile_y = 0;
        this.sprite = null;
        
        this.NAME = 'paper bag';
        this.ICON = 'LUNCH_BAG_CLEAN';
        this.SLOTS = 3;
        this.ITEMS = [];
        this.actions = [{action: 'WEAR', object: this}, {action: 'OPEN', object: this}];
    }

    isFull () {
        return this.ITEMS.length >= this.SLOTS;
    }

    isEmpty () {
        return this.ITEMS.length == 0;
    }

    addItem (item) {
        if (!this.isFull) {
            this.ITEMS.push(item);
            return true;
        }
        else {
            // UI Message for bag is full
            console.log("Bag.addItem: no more room in bag.");
            return false;
        }
    }

    placeItem (_x,_y, place=0) {
        if (this.ITEMS.length >= place + 1) {
            var item = this.ITEMS.splice(place,1);
            /// Create sprite and add to group in scene? Create a world/item-registry.js that logs the world coordinates of items?
            /// What about placing items indoors?
            /// Check for valid place to set object

        }
        else {
            console.warn("Bag.placeItem: this bag does not contain an item at the requested position ("+place+")");
            return false;
        }
    }

    discardItem (place=0) {
        if (this.ITEMS.length >= place + 1) {
            this.ITEMS.splice(place,1);
        }
        else {
            console.warn("Bag.discardItem: this bag does not contain an item at the requested position ("+place+")");
        }
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
        if (action == 'WEAR') {
            var valid = this.scene.player.pockets.availablePocket('WEARS', this);
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

        this.sprite = this.scene.physics.add.staticSprite(x_pixels, y_pixels, 'WEARS', this.ICON, 0).setOrigin(0,0).setDepth(y_pixels);

        this.sprite_shadow = this.scene.add.ellipse(x_pixels, y_pixels + 9, 12, 6, 0x000000).setOrigin(0,0);
        this.sprite_shadow.setAlpha(.25);
    }

    destroy () {

    }
    
}