import COOK from "../config/ground/tile-recipes.js";
import MAP_CONFIG from "../config/map.js";
import Tree from "../class/tree.js";
import Pole from "../class/pole.js";
import Picket from "../class/picket.js";
import Sign from "../class/sign.js";
import Mailbox from "../class/mailbox.js";
import NewspaperBox from "../class/newspaper.js";
/**
 * 	Manage Map Decor
 *	
 */
 export default class DecorService {

    constructor(scene) {
        this.scene = scene;

        this.overMap = MAP_CONFIG;
        
        const overMap = this.overMap;

        var self = this;
        overMap.blocks.forEach(function (block, index) {
      
            var Left = parseInt((block.x * overMap.blockWidth) + block.offset.w);
            var Top = parseInt((block.y * overMap.blockHeight) + block.offset.n);
            
            var Width = overMap.blockWidth - block.offset.e - block.offset.w;
            var Height = overMap.blockHeight - block.offset.n - block.offset.s;
            let sign = new Sign(self.scene, 12, 12, 'This is a sign.');
            let mailbox = new Mailbox(self.scene, 20, 20, 'This is a mailbox.');
            
            if (block.offset.n > 0) {
                
                var recipe_name = 'SIDEWALK_EW_S_TREES';
                var recipe = COOK[recipe_name];

                var recipe_x = Left+1;
                let newspaper1 = new NewspaperBox(self.scene, recipe_x+5, Top+2, 10, ['COIN.DIME'], {NAME: 'Skeletown Tribune', ICON: 'broadsheet'},'YELLOW');
                let newspaper2 = new NewspaperBox(self.scene, recipe_x+7, Top+2, 25, ['COIN.QUARTER'], {NAME: 'Bone Times', ICON: 'newspaper'},'BLUE');
                for (var i=0;i<Width; i++) {
                    if (recipe.WIDTH <= Width - i) {
                        let tree = new Tree(self.scene, recipe_x+3, Top+1);

                        if (i % 2 != 0) { // Even
                            let pole = new Pole(self.scene, recipe_x+1, Top+1);
                        }
                        
                        self.cookRecipe(recipe_x, Top+1, recipe);
                        i = i + recipe.WIDTH;
                        recipe_x = recipe_x + recipe.WIDTH;
                    }
                }
                
            }
            if (block.offset.s > 0) {
                var recipe_name = 'SIDEWALK_EW_N_TREES';
                var recipe = COOK[recipe_name];

                var recipe_x = Left+1;
                for (var i=0;i<Width; i++) {
                    if (recipe.WIDTH <= Width - i) {
                        var recipe_y = parseInt(Top+Height)-recipe.HEIGHT;
                        let tree = new Tree(self.scene, recipe_x+3, recipe_y+2);

                        if (i % 2 == 0) { // Even
                            let pole = new Pole(self.scene, recipe_x+7, recipe_y+2);
                        }
                        
                        self.cookRecipe(recipe_x, recipe_y, recipe);
                        i = i + recipe.WIDTH;
                        recipe_x = recipe_x + recipe.WIDTH;
                    }
                }
            }
        });

    }

    create () {

    }

    update () {
    }

    xyToBlock (_x,_y) {
        return [
            Math.floor(_x/this.overMap.blockWidth),
            Math.floor(_y/this.overMap.blockHeight)
            ];
    }

    cookRecipe(_x, _y, recipe) {
        if (recipe == undefined) {
            return;
        }
        var width = recipe.WIDTH;
        var height = recipe.HEIGHT;
        var tile = recipe.TILES;
        var recipe_index = 0;
        for (var h=0;h<height;h++) {
            for (var w=0;w<width;w++) {
                this.scene.mapper.groundLayer.weightedRandomize(tile[recipe_index],parseInt( _x + w),parseInt(_y + h), 1, 1);
                recipe_index++;
            }
        }
    }

    

}