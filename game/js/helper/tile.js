/**
 * A small helper class that can take control of our shadow tilemap layer. It keeps track of which
 * room is currently active.
 */
export default class HelperTile {
    constructor(groundArray, groundLayer) {
        this.groundArray = this.groundArray;
        this.groundLayer = this.groundLayer;
        this.bitmap = [1, 2, 4, 8, 0, 16, 32, 64, 128];
    }

    changeTile(_x, _y, new_type) {
        if (this.inBounds(_x, _y)) {
            var old_type = this.groundArray[_y][_x];
            if (old_type != new_type) {
                this.groundArray[_y][_x] = new_type;
                this.changeGround(_x, _y);
            }
        }
    }

    inBounds(_x, _y) {
        return (_x >= 0 && _x < this.groundArray[0].length && _y >= 0 && _y < this.groundArray.length);
    }

    calculateTileIndex(_x, _y) {
        if (this.inBounds(_x, _y)) {
            var tile_type = this.groundArray[_y][_x]
            var position = 0;
            var place = 0;
            for (r = -1; r <= 1; r++) {
                for (c = -1; c <= 1; c++) {
                    if (this.groundArray[parseInt(_y + r)][parseInt(_x + c)] == tile_type) {
                        position = parseInt(position + this.bitmap[place]);
                    }
                }
            }
            return position;
        }
    }

    changeGround(_x, _y) {
        for (r = -1; r <= 1; r++) {
            for (c = -1; c <= 1; c++) {
                var p_x = parseInt(_x) + parseInt(c);
                var p_y = parseInt(_y) + parseInt(r);
                var tile_index = this.calculateTileIndex(p_x, p_y);
                if (this.groundArray[p_y][p_x] > 0) {
                    this.groundLayer.putTileAt(tile_index, p_x, p_y);
                }
                else {
                    this.groundLayer.removeTileAt(p_x, p_y, true);
                }
            }
        }
        return;
    }
}
