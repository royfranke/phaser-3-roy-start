/* Building Class */

export default class Building {

    /*
const dungeon = new Dungeon({
  width: 100,
  height: 30,
  doorPadding: 1, // Experimental, minimum number of tiles between a door and a room corner (>= 1)
  randomSeed: "hello", // Leave undefined if you don't want to control the seed
  rooms: {
    width: {
      min: 5,
      max: 15,
      onlyOdd: true // or onlyEven: true
    },
    height: {
      min: 5,
      max: 15,
      onlyOdd: true // or onlyEven: true
    },
    maxArea: 150,
    maxRooms: 50
  }
});
    */

    constructor(scene, property) {
        this.scene = scene;
        this.prop = property;
    }

    
}