/* Tree Class */

export default class Tree extends Phaser.GameObjects.Sprite {
    constructor(scene, _x, _y) {
        super(scene, _x, _y);
/*
        let sprite = scene.physics.add.staticSprite(x, y, 'TREE', 'tree'+variety).setImmovable(true);
        sprite.setSize(16,16).setOffset(24, sprite.height - 16);
        sprite.setDepth(y + (sprite.height/2) - 16);
*/
        this.scene = scene;
        this.string = 'TREE';
        this.variety = Phaser.Math.Between(1,4);
        this.scene.textures.get(this.string);
        
        this.placeObject(_x,_y);
    }

    placeObject (_x, _y) {
        let x_pixels = (_x+1)*16;
        let y_pixels = (_y+1)*16;
        let obj_sprite = this.scene.physics.add.staticSprite(x_pixels, y_pixels, this.string, this.string+"_"+this.variety, 0).setOrigin(.5,1).setSize(16, 12).setOffset(24,48).setDepth(y_pixels).setImmovable(true);
        this.scene.physics.add.collider(this.scene.player.sprite, obj_sprite);
    }
}