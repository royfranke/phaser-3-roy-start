import Preloader from "./preloader.js";
import Anim from "./anim.js";
import ItemRegistryService from "./service/item-registry.js";
import FXService from "./service/fx.js";
import ControllerService from "./service/controller.js";
import CameraService from "./service/camera.js";
import DecorService from "./service/decor.js";
import CityPlannerService from "./service/cityplanner.js";
import HelperUI from "./helper/ui.js";
import HelperData from "./helper/data.js";
import Player from "./player.js";
import Npc from "./npc.js";



/**
 * Test Scene
 */
 export default class TestScene extends Phaser.Scene {
    constructor() {
        super("Test Scene");
    }

    init() {
        this.ctrl = new ControllerService(this);
        
      }

    preload() {
        this.preloader = new Preloader(this);
        this.helperData = new HelperData();
        
        this.camera = new CameraService(this.cameras.main,this);
        this.camera.preloadCamera();
        
/*
        this.helperData.loadCSV('../assets/data/data-test.csv')
        .then(dataArray => {
          // Use the loaded dataArray as needed
          console.log(dataArray);
          console.log("Found something to load...");
          this.groundArray = dataArray;
         
        })
        .catch(error => {
          console.error(error);
          console.log("Found nothing to load...");
          this.groundArray = new Array(this.map_height).fill(0).map(() => new Array(this.map_width).fill(0));
        }); */

    }

    create() {
        //this.mapper. createMap();
        this.mapper = new CityPlannerService(this);
        this.animLoader = new Anim(this);
        this.fx = new FXService(this);

        var x = (40 * 3)*16;
        var y = (30 * 3)*16;
        this.itemRegistry = new ItemRegistryService(this);
        this.player = new Player(this, x, y);
        this.npc = new Npc(this, x+64, y);
        this.npc_cousin = new Npc(this, x+120, y);
        this.decor = new DecorService(this);
        this.mapper.buildCity();
        
        this.player.ground.initializeTiles(this.mapper.groundLayer);
        
        this.camera.createCamera();
        this.ui = new HelperUI(this);

        this.test = true;
      }

    update(time, delta) {
        this.ctrl.update();
        this.player.update();
        this.npc.update();
        this.npc_cousin.update();
        this.mapper.update();
        this.ui.update();
        if (this.test) {
          this.npc.goTo(14, 27);
          this.test = false;
          
        }
        else {
          if (this.npc.destinations.length == 0) {
            //this.npc.follow(this.player);
            this.npc_cousin.follow(this.npc);
          }
        }
      }

}