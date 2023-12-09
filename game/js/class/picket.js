import STATIC from "../config/static-bodies.js";
/* Picket Class */

export default class Picket extends Phaser.GameObjects.Sprite {
    scene;
    _x;
    _y;
    variety;
    string;

    constructor(scene, _x, _y, variety='H_1_') {
        super(scene, _x, _y);
        this.scene = scene;
        this.string = 'PICKET';
        this.variety = variety;
        this.scene.textures.get(this.string);
        

        
        this.placeObject(_x,_y);
    }

    placeObject (_x, _y) {
        let x_pixels = _x*16;
        let y_pixels = _y*16;
        let obj = STATIC[this.string+"_"+this.variety];
        let obj_sprite = this.scene.physics.add.staticSprite(x_pixels, y_pixels, this.string, this.string+"_"+this.variety, 0).setOrigin(0,1).setSize(obj.size.x, obj.size.y).setOffset(obj.offset.x, obj.offset.y).setDepth(y_pixels).setImmovable(true);
        this.scene.physics.add.collider(this.scene.player.sprite, obj_sprite);
    }
}