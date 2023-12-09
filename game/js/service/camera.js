/**
 * 	Makes effects happen
 *	
 */
 export default class CameraService {
    constructor(camera,scene) {
        this.camera = camera;
        this.scene = scene;
        
    }

    preloadCamera () {
        this.camera.setBackgroundColor('#7758ab')
		this.camera.setZoom(2);
    }

    createCamera () {
        this.camera.setBounds(0, 0, this.scene.mapper.map.widthInPixels, this.scene.mapper.map.heightInPixels);
        this.camera.startFollow(this.scene.player.sprite,true, 1, 1, -32, -32);
        this.camera.setDeadzone(96,16);
        this.camera.fadeIn(500, 0, 0, 0);
    }

    
}