/* Newspaper Class */

export default class NewspaperBox extends Phaser.GameObjects.Sprite {
    
    scene;
    state;
    actions;
    cost;
    accepted_payment;
    product;

    constructor(scene, _x, _y, cost, accepted_payment, product, color) {
        super(scene, _x, _y);
        this.scene = scene;
        this.actions = [];
        this.cost = cost;
        this.accepted_payment = accepted_payment;
        this.product = product;
        
        this.state = 'COIN_LOCKED';
        this.color = color;
        this.object_string = 'NEWSPAPER';

        this.obj_sprite = this.placeObject(_x, _y);
    }

    placeObject (_x, _y) {
        let x_pixels = _x*16;
        let y_pixels = _y*16;
        let obj_sprite = this.scene.physics.add.sprite(x_pixels, y_pixels, this.object_string+"_"+this.color, 0).setImmovable(true);
        obj_sprite.setOrigin(0,1).setSize(18, 20).setOffset(0, 14);
        obj_sprite.setDepth(y_pixels);

        let obj_shadow = this.scene.add.graphics();

        obj_shadow.fillStyle(0x000000, .25);

        //  32px radius on the corners
        obj_shadow.fillRoundedRect(x_pixels, y_pixels - 28,18,32,4);

        //let obj_shadow = this.scene.add.ellipse(x_pixels + 8,y_pixels, 16, 8, 0x000000);
        //obj_shadow.setAlpha(.25);
        obj_sprite.setDepth(y_pixels);

        
        this.scene.physics.add.collider(this.scene.player.sprite, obj_sprite);

        this.scene.mapper.groundLayer.setTileLocationCallback(_x, _y, 1, 1, this.objectActions, this);

        //this.scene.add.rectangle(x_pixels, y_pixels, 16, 16, 0xefc53f).setOrigin(0).setDepth(y_pixels);
    
        return obj_sprite;
    }

    ctrlObject () {
        return (this.scene.ctrl.focusState == 'PLAYER');
    }

    doAction (action) {
        if (action == 'INSERT COIN ['+this.cost+'¢]') {
            this.openObject();
        }
    }

    objectActions () {
        if (this.ctrlObject()) {
            let action = '';
            if (this.state == 'COIN_LOCKED') {
                action = {action: 'INSERT COIN ['+this.cost+'¢]', object: this};
            }
            if (action != '') {
                this.scene.player.action.addAction(action);
            }
        }
    }

    openObject () {
        this.scene.player.action.clearActions();
   
        if (this.state == 'COIN_LOCKED') {
            if (this.scene.player.coinpurse.insertCoins([this.cost])) {
                this.setState('COIN_DISPENSING');
                this.obj_sprite.anims.play(this.object_string+"_"+this.color+"_"+this.state);
                this.obj_sprite.once('animationcomplete', () => {
                    this.closeObject();
                    this.scene.player.pockets.setPocket(1, 'HOLDS', this.product);
                });
            }
            else {
                this.setState('COIN_JIGGLE');
                this.obj_sprite.anims.play(this.object_string+"_"+this.color+"_"+this.state);
                this.obj_sprite.once('animationcomplete', () => {
                    this.setState('COIN_LOCKED');
                });
            }
            
        }
    }

    closeObject () {
        this.setState('COIN_RETRACTING');
        this.obj_sprite.anims.play(this.object_string+"_"+this.color+"_"+this.state);
        this.obj_sprite.once('animationcomplete', () => {
            this.setState('COIN_LOCKED');
        })
    }

    setState (state) {
      this.state = state;
    }

}