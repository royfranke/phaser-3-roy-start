/* Pole Class */

export default class Pole extends Phaser.GameObjects.Sprite {
    constructor(scene, _x, _y) {
        super(scene, _x, _y);
        this.scene = scene;
        this.object_string = 'POLE';
        this.scene.textures.get('POLE');
        
        this.variety = Phaser.Math.Between(1,20);
        this.placeObject(_x,_y);
    }

    placeObject (_x, _y) {
        let x_pixels = _x*16;
        let y_pixels = (_y + 1)*16;
        let obj_sprite = this.scene.physics.add.staticSprite(x_pixels, y_pixels, this.object_string, this.object_string+"_"+this.variety, 0).setImmovable(true);
        obj_sprite.setOrigin(0,1).setSize(8, 8).setOffset(12, 40);
        obj_sprite.setDepth(y_pixels);
        this.scene.physics.add.collider(this.scene.player.sprite, obj_sprite);
    }
}