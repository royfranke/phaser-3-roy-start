/* Test Object Class */

export default class TestObject extends Phaser.GameObjects.Sprite {
    
    scene;
    content;
    state;
    actions;

    constructor(scene, _x, _y, content) {
        super(scene, _x, _y);
        this.scene = scene;
        this.content = content;
        this.actions = [];
        
        this.state = 'CLOSED';
        //let variety = Phaser.Math.Between(1,4);
        //let sprite = this.scene.physics.add.staticSprite(x, y, 'SIGN', 'TEST').setImmovable(true);
        //sprite.setSize(16,16).setOffset(24, sprite.height - 16);

        this.obj_sprite = this.placeObject(_x, _y);
    }

    placeObject (_x, _y) {
        let x_pixels = _x*16;
        let y_pixels = _y*16;
        let obj_sprite = this.scene.physics.add.sprite(x_pixels, y_pixels, "commercial_fridge", 0).setImmovable(true);
        obj_sprite.setOrigin(0,1).setSize(22, 24).setOffset(0, 12);
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
        if (action == 'OPEN' || action == 'CLOSE') {
            this.openObject();
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
            this.obj_sprite.anims.play("commercial_fridge-opening");
            this.obj_sprite.once('animationcomplete', () => {
                /// Change state to open.
                this.setState('OPEN');
                this.setSign(this.state);
            })
        }
        if (this.state == 'OPEN') {
            this.setState('CLOSING');
            this.obj_sprite.anims.playReverse("commercial_fridge-opening");
            this.obj_sprite.once('animationcomplete', () => {
                /// Change state to open.
                this.setState('CLOSED');
                this.setSign(this.state);
            })
        }
    }

    setState (state) {
      this.state = state;
    }

    setSign (content) {
      this.content = content;
      this.scene.ui.tellDialogBox(this.state);
    }

    
}