/* Sign Class */

export default class Sign extends Phaser.GameObjects.Sprite {
    
    scene;
    content;

    constructor(scene, _x, _y, content) {
        super(scene, _x, _y);
        this.scene = scene;
        this.content = content;
        this.scene.textures.get('SIGN');
        let x = (_x + 1)*16;
        let y = (_y - 1)*16;
        //let variety = Phaser.Math.Between(1,4);
        let sprite = this.scene.physics.add.staticSprite(x, y, 'SIGN', 'TEST').setImmovable(true);
        sprite.setSize(16,16).setOffset(24, sprite.height - 16);
        sprite.setDepth(y + (sprite.height/2) - 16);
        this.scene.physics.add.collider(this.scene.player.sprite, sprite);
        this.scene.mapper.groundLayer.setTileLocationCallback(_x, _y, 2, 2, this.readSign, this);
    }
    

    readSign () {
      this.scene.ui.tellDialogBox(this.content);
    }

    setSign (content) {
      this.content = content;
    }
}