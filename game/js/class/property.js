import Picket from "../class/picket.js";
import TILES from "../config/ground/tile-weights.js";
/* Property Class */

export default class Property {

/*
lines: {
    x: {{ prop.x }},
    y: {{ prop.y }},
    width: {{ prop.width }},
    height: {{ prop.height }}
},
block: {
    x: {{ prop.blockX }},
    y: {{ prop.blockY }}
},
address: {
    name: "{{ prop.name }}",
    facing: "{{ prop.facing }}",
    number: "{{ prop.addressNumber }}",
    street: "{{ prop.addressStreet }}",
}
*/
    constructor(block, prop) {
        this.block = block;
        this.scene = block.scene;
        this.prop = prop;
    }

    buildIt () {
        const top = this.prop.lines.top;
        const left = this.prop.lines.left;
        const bottom = this.prop.lines.bottom;
        const right = this.prop.lines.right;
        const width = this.prop.lines.width;
        const height = this.prop.lines.height;
        const facing = this.prop.address.facing;
        const scene = this.scene;

        //check for "detached" tag-- make perimeter of space around building if found

        console.log('Building...');
        console.log(this.prop.address.number+' '+this.prop.address.street);

        let yard = 4;
/*
        for (let i=1; i<width/2 - 2; i++) {
            //new Picket(scene, left + i, (top + height) - yard, 'H_1_');
            new Picket(scene, left + i, bottom, 'H_1_');
        }
        new Picket(scene, left + Math.floor(width/2) - 1, bottom, 'GATE_L_');
        new Picket(scene, left + Math.floor(width/2), bottom, 'GATE_R_');
        for (let i=Math.floor(width/2) + 1; i<width - 1; i++) {
            //new Picket(scene, left + i, (top + height) - yard, 'H_1_');
            new Picket(scene, left + i, bottom, 'H_2_');
        }
        

        for (let i=1; i<yard; i++) {
            new Picket(scene, left, ((top + height) - yard) + i, 'LEFT_');
            new Picket(scene, right - 1, ((top + height) - yard) + i, 'RIGHT_');
        }

        new Picket(scene, left, ((top + height) - yard), 'UPPER_LEFT_');
        new Picket(scene, right - 1, ((top + height) - yard), 'UPPER_RIGHT_');
        new Picket(scene, left, bottom, 'LOWER_LEFT_');
        new Picket(scene, right - 1, bottom, 'LOWER_RIGHT_');
*/
        this.block.groundLayer.weightedRandomize(TILES.FOUNDATION.BITMAP_, left+1, top + 1, width - 2, height - (yard + 1));
        this.block.groundLayer.weightedRandomize(TILES.GARDEN.BITMAP_, left+1, top + height - (yard + 1), width - 2,  yard);

        this.block.groundLayer.weightedRandomize(TILES.CEMENT.FILL_, left+Math.floor(width/2), top + height - (yard + 1), 1,  yard + 1);
        
    }

    
}