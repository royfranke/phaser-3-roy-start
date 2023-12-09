/**
 * A small helper class that can take control of our shadow tilemap layer. It keeps track of which
 * room is currently active.
 */
export default class HelperTile {
    constructor() {
        this.bitmap = [1, 2, 4, 8, 0, 16, 32, 64, 128];
        this.mapping = [0,0,1,1,0,0,1,1,2,2,3,4,2,2,3,4,5,5,6,6,5,5,7,7,8,8,9,10,8,8,11,12,0,0,1,1,0,0,1,1,2,2,3,4,2,2,3,4,5,5,6,6,5,5,7,7,8,8,9,10,8,8,11,12,13,13,14,14,13,13,14,14,15,15,16,17,15,15,16,17,18,18,19,19,18,18,20,20,21,21,22,23,21,21,24,25,13,13,14,14,13,13,14,14,26,26,27,28,26,26,27,28,18,18,19,19,18,18,20,20,29,29,30,31,29,29,32,33,0,0,1,1,0,0,1,1,2,2,3,4,2,2,3,4,5,5,6,6,5,5,7,7,8,8,9,10,8,8,11,12,0,0,1,1,0,0,1,1,2,2,3,4,2,2,3,4,5,5,6,6,5,5,7,7,8,8,9,10,8,8,11,12,13,13,14,14,13,13,14,14,15,15,16,17,15,15,16,17,34,34,35,35,34,34,36,36,37,37,38,39,37,37,40,41,13,13,14,14,13,13,14,14,26,26,27,28,26,26,27,28,34,34,35,35,34,34,36,36,42,42,43,44,42,42,45,46];
    }

    initializeTiles (groundArray, groundLayer) {
        this.groundArray = groundArray;
        this.groundLayer = groundLayer;
        for (var r = 0; r < this.groundArray.length; r++) {
            for (var c = -1; c <= this.groundArray[0].length; c++) {
                this.changeGround(c, r);
            }
        }
        console.log("Tiles initialized.");
    }

    initializeDig (digArray, digLayer) {
        this.digArray = digArray;
        this.digLayer = digLayer;
        for (var r = 0; r < this.digArray.length; r++) {
            for (var c = -1; c <= this.digArray[0].length; c++) {
                this.changeDig(c, r);
            }
        }
        console.log("Dig tiles initialized.");
    }

    getGroundTileType(_x,_y) {
        return this.groundArray[_y][_x];
    }

    getDigTileType(_x,_y) {
        return this.digArray[_y][_x];
    }

    changeTile(_x, _y, new_type) {
        if (this.inBounds(_x, _y)) {
            var old_type = this.getGroundTileType(_x,_y);
            if (old_type != new_type) {
                this.groundArray[_y][_x] = new_type;
                this.changeGround(_x, _y);
            }
        }
        return this.groundLayer;
    }

    inBounds(_x, _y) {
        return (_x >= 0 && _x < this.groundArray[0].length && _y >= 0 && _y < this.groundArray.length);
    }

    calculateTileIndex(_x, _y,layer) {
        if (this.inBounds(_x, _y)) {
            var tile_type = layer[_y][_x]
            var position = 0;
            var place = 0;
            for (var r = -1; r <= 1; r++) {
                for (var c = -1; c <= 1; c++) {
                    if (this.inBounds(parseInt(_x + c), parseInt(_y + r))) {
                        if (layer[parseInt(_y + r)][parseInt(_x + c)] == tile_type) {
                            position = parseInt(position + this.bitmap[place]);
                        }
                    }
                    place++;
                }
            }
            if (tile_type != 0) {
                position = this.mapping[position] + ((tile_type - 1) * 48); 
            } 
            return position;
        }
    }

    changeGround(_x, _y) {
        for (var r = -1; r <= 1; r++) {
            for (var c = -1; c <= 1; c++) {
                var p_x = parseInt(_x + c);
                var p_y = parseInt(_y + r);
                if (this.inBounds(p_x, p_y)) {

                    var tile_index = this.calculateTileIndex(p_x, p_y, this.groundArray);

                    if (this.groundArray[p_y][p_x] > 0) {
                        this.groundLayer.putTileAt(tile_index, p_x, p_y);
                    }
                    else {
                        this.groundLayer.removeTileAt(p_x, p_y, true);
                    }
                }
            }
        }
        return;
    }

    changeDigTile(_x, _y, new_type) {
        if (this.inBounds(_x, _y)) {
            var old_type = this.digArray[_y][_x];
            if (old_type != new_type) {
                if (this.groundArray[_y][_x] == 2) { /// IMPORTANT FOR NESTING
                    this.digArray[_y][_x] = new_type;
                    this.changeDig(_x, _y);
                }
            }
        }
        return this.digLayer;
    }

    changeDig(_x, _y) {
        for (var r = -1; r <= 1; r++) {
            for (var c = -1; c <= 1; c++) {
                var p_x = parseInt(_x + c);
                var p_y = parseInt(_y + r);
                if (this.inBounds(p_x, p_y)) {
                    var tile_index = this.calculateTileIndex(p_x, p_y,this.digArray);
                    if (this.digArray[p_y][p_x] > 0) {
                        this.digLayer.putTileAt(tile_index, p_x, p_y);
                    }
                    else {
                        this.digLayer.removeTileAt(p_x, p_y, true);
                    }
                }
            }
        }
        return;
    }
    
    saveGroundData(filename) {
        let array = this.groundArray;
        let csvContent = "";
      
        // Iterate over each row of the array
        for (let i = 0; i < array.length; i++) {
          const row = array[i];
          let csvRow = "";
      
          // Iterate over each element in the row
          for (let j = 0; j < row.length; j++) {
            const cell = row[j];
      
            // Enclose the cell value in double quotes and escape any existing double quotes
            const cellValue = `${String(cell).replace(/"/g, '""')}`;
      
            // Append the cell value to the current CSV row
            csvRow += cellValue;
      
            // Add a comma separator unless it's the last element in the row
            if (j < row.length - 1) {
              csvRow += ",";
            }
          }
      
          // Append the CSV row to the overall CSV content
          csvContent += csvRow;
      
          // Add a newline character unless it's the last row
          if (i < array.length - 1) {
            csvContent += "\n";
          }
        }
      
        // Create a Blob object with the CSV content
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      
        // Create a temporary anchor element to initiate the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
      
        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
}
