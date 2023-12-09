import HelperTile from "./../helper/tile.js";
/**
 * 	Manage Overworld
 *	
 */
 export default class OverworldService {

    constructor(scene) {
        this.scene = scene;
        this.map_width = 40;
        this.map_height = 30;
        const tileSize = 16;
        this.map = this.scene.make.tilemap({ tileWidth: tileSize, tileHeight: tileSize, width: this.map_width, height: this.map_height });
        this.groundArray = new Array(this.map_height).fill(0).map(() => new Array(this.map_width).fill(0));
        this.digArray = new Array(this.map_height).fill(0).map(() => new Array(this.map_width).fill(0));
        this.helperTile = new HelperTile();
    }

    createMap () {
        const soiltileset = this.map.addTilesetImage('soiltiles');
        const tileset = this.map.addTilesetImage('tiles');
        
        this.soilLayer = this.map.createBlankLayer('Soil Layer', soiltileset, 0, 0, this.map_width, this.map_height);
        
        for (var r = 0; r <= this.map_height; r++) {
            for (var c = 0; c <= this.map_width; c++) {
              var tile_index = Phaser.Math.Between(0, 8);
              this.soilLayer.putTileAt(tile_index, c, r);
            }
          }
  
          this.groundLayer = this.map.createBlankLayer('Ground Layer', tileset, 0, 0, this.map_width, this.map_height);
          this.digLayer    = this.map.createBlankLayer('Dig Layer', tileset, 0, 0, this.map_width, this.map_height);
  
          //this.digLayer.setCollisionByExclusion([-1, 6, 7, 8, 26]);
          //this.scene.physics.add.collider(this.scene.player.sprite, this.digLayer);
          

          this.helperTile.initializeTiles(this.groundArray,this.groundLayer);
          this.helperTile.initializeDig(this.digArray,this.digLayer);
          
    }

    update () {
        //this.activeTile = this.groundLayer.worldToTileXY(this.scene.player.sprite.x, this.scene.player.sprite.y + 16);
        
        //this.snappedWorldPoint = this.groundLayer.tileToWorldXY(this.activeTile.x, this.activeTile.y);

    }

    digHole (_x,_y) {
        var ground_type = this.helperTile.getGroundTileType(_x, _y);
        var dig_type = this.helperTile.getDigTileType(_x, _y);

        switch (ground_type) {
          case 0:
            this.groundLayer = this.helperTile.changeTile(_x, _y, 1)
          break;
          case 1:
            this.groundLayer = this.helperTile.changeTile(_x, _y, 2)
          break;
          case 2:
            switch (dig_type) {
              case 0:
                this.digLayer = this.helperTile.changeDigTile(_x, _y, 3)
              break;
              case 3:
                this.digLayer = this.helperTile.changeDigTile(_x, _y, 4)
              break;
              case 4:
              break;
            }
          break;
        }
    }

    fillHole (_x,_y) {
        this.digLayer = this.helperTile.changeDigTile(_x, _y, 0)
        this.groundLayer = this.helperTile.changeTile(_x, _y, 0)
    }
}