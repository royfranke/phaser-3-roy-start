/* Mailbox Class */

export default class Mailbox extends Phaser.GameObjects.Sprite {
    
    scene;
    state;
    actions;

    constructor(scene, _x, _y) {
        super(scene, _x, _y);
        this.scene = scene;
        this.actions = [];
        
        this.state = 'CLOSED';
        this.object_string = 'MAILBOX_1';

        this.obj_sprite = this.placeObject(_x, _y);
    }

    placeObject (_x, _y) {
        let x_pixels = _x*16;
        let y_pixels = _y*16;
        let obj_sprite = this.scene.physics.add.sprite(x_pixels, y_pixels, this.object_string, 0).setImmovable(true);
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
        if (action == 'OPEN') {
            this.openObject();
        }
        else if (action == 'CLOSE') {
            this.closeObject();
        }
    }

    objectActions () {
        if (this.ctrlObject()) {
            let action = '';
            if (this.state == 'CLOSED') {
                action = {action: 'OPEN', object: this};
            }
            if (this.state == 'OPEN') {
                action = {action: 'CLOSE', object: this};
            }
            if (action != '') {
                this.scene.player.action.addAction(action);
            }
        }
    }

    openObject () {
        this.scene.player.action.clearActions();
        if (this.state == 'CLOSED') {
                this.setState('OPENING');
                this.obj_sprite.anims.play(this.object_string+"_"+this.state);
                this.obj_sprite.once('animationcomplete', () => {
                    this.setState('OPEN');
                    //this.scene.player.pockets.setPocket(1, 'HOLDS', this.product);
                });
        }
    }

    closeObject () {
        this.scene.player.action.clearActions();
        if (this.state == 'OPEN') {
                this.setState('CLOSING');
                this.obj_sprite.anims.play(this.object_string+"_"+this.state);
                this.obj_sprite.once('animationcomplete', () => {
                    this.setState('CLOSED');
                    //this.scene.player.pockets.setPocket(1, 'HOLDS', this.product);
                });
        }
    }

    setState (state) {
      this.state = state;
    }

}