import POCKET_CONFIG from "../config/pocket-states.js";
/**
 * 	Manage inventory UI
 *	
 */
 export default class PocketService {
    constructor(scene) {
        this.scene = scene;
        this.pockets = POCKET_CONFIG.POCKETS;
        this.states = POCKET_CONFIG.STATES;
        this.types = POCKET_CONFIG.TYPES;
        this.allowed = POCKET_CONFIG.ALLOWED;
        //this.pocketMap = this.initializePocketMap();
        this.selected = 0;
    }

    setPocket (pocketIndex, state, value=null) {
        if (this.getPocketAllowed(pocketIndex, state)) {
            if (state == 'EMPTY') {
                this.pockets[pocketIndex].WEARS = null;
                this.pockets[pocketIndex].EQUIPT = null;
                this.pockets[pocketIndex].HOLDS = null;
            }
            else {
                this.pockets[pocketIndex][state] = value;
            }
            this.pockets[pocketIndex].STATE = state;
        }
        else {

        }
        console.log(this.pockets);
        this.scene.ui.drawPockets();
    }

    availablePocket (state, value) {
        var result = false;
        for (var i=0;i<3;i++) {
            if (this.getPocketState(i) == 'EMPTY') {
                if (this.getPocketAllowed(i, state)) {
                    this.setPocket(i, state, value);
                    i = 4;
                    result = true;
                }
            }
        }
        return result;
    }
    

    getPocket (pocketIndex) {
        return this.pockets[pocketIndex];
    }

    getPocketType (pocketIndex) {
        return this.pockets[pocketIndex].TYPE;
    }

    getPocketState (pocketIndex) {
        return this.pockets[pocketIndex].STATE;
    }

    getPocketAllows (pocketIndex) {
        let pocketType =  this.getPocketType(pocketIndex);
        return this.allowed[pocketType];
    }
    

    getPocketAllowed (pocketIndex, state) {
        const pocketAllowed = this.getPocketAllows(pocketIndex);
        for (var i=0;i<pocketAllowed.length;i++) {  
            if (pocketAllowed[i] == state) { return true;}
        }
        return false;
    }

    initializePocketMap () {
        var pocketMap = [];
        for (let pocket in this.pockets) {
            pocketMap.push(pocket);
        }
        
        for (var i=0;i<pocketMap.length;i++) {
            let pocket = this.pockets[(pocketMap[i])];
            pocketMap[i] = pocket;
        }

        return pocketMap;
    }

    update() {
        if (this.scene.ctrl.focusState == 'POCKETS') {
            const ctrl = this.scene.ctrl.CTL;
            if (ctrl.RIGHT.TAP) {
                this.selected--;
            }
            else if (ctrl.LEFT.TAP) {
                this.selected++;
            }
            if (this.selected < 0) {
                this.selected = 2;
            }
            else if (this.selected > 2) {
                this.selected = 0;
            }

        }
    }
    
}