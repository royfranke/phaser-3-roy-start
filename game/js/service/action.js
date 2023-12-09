import PLAYER_STATES from "../config/player-states.js";
/**
 *	Updates available actions
 */
 export default class ActionService {
    
    allowed;
    showActive;
    showMenu;
    
    selected;
    committed;

    actionTile;
    actionTileLast;
    actionTileFresh;
    actionTileLookUp;

    actionMarker;

    // Set in clearActions
    actionsMap;
    availableActions;
    menu;

    constructor(scene) {
        this.scene = scene;
        this.actionTile = {x: 0, y: 0};
        this.actionTileLast = {x: 0, y: 0};
        this.actionTileFresh = true;
        this.actionTileLookUp = PLAYER_STATES.DIR_TILE;

        this.clearActions();

        this.actionMarker = this.createMarker();
        //this.debugActionTile = this.scene.add.rectangle(0, 0, 16, 16, 0x6666ff).setOrigin(0);
    }

    clearActions() {
        this.availableActions = [];
        this.actionsMap = new Map;
        this.menu = {x: 0, y: 0};
    }

    createMarker () {
        const marker = this.scene.add.sprite(0,0, "action-marker", 0).setOrigin(0);
        marker.anims.play("action-marker", false);
        marker.setVisible(false);
        return marker;
    }

    showMarker (showing) {
        this.actionMarker.setVisible(showing);
    }

    showActions (showing) {
        this.showMenu = showing;
    }

    updateMarker() {
        this.snappedWorldPoint = this.scene.mapper.groundLayer.tileToWorldXY(this.actionTile.x, this.actionTile.y);

        this.actionMarker.setPosition(this.snappedWorldPoint.x - 8, this.snappedWorldPoint.y - 8);

        
        if (this.actionTileLast.x != this.actionTile.x || this.actionTileLast.y != this.actionTile.y) {
            //this.debugActionTile.setPosition(this.snappedWorldPoint.x, this.snappedWorldPoint.y);
            this.actionTileFresh = true;
            this.clearActions();
            this.actionTileLast = this.actionTile;

            this.addItemActions();
            
        }
        else {
            this.actionTileFresh = false;
        }
    }

    updateActionAvailability() {
        if (this.scene.player.state == 'IDLE' && this.scene.ctrl.focusState == 'PLAYER') {
            this.showMarker(true);
            this.showActions(true);
        }
        else {
            this.showMarker(false);
            this.showActions(false);
        }
    }

    addItemActions () {
        var item = this.scene.itemRegistry.getItem(this.actionTile.x,this.actionTile.y);
        if (item != null) {
            item.addActions(this);
        }
    }

/// Fired from player.js if facing changes or at speed
    updateActionTile(facing) {
        var mods = this.actionTileLookUp[facing];
        this.actionTile = {
            x: parseInt(this.scene.player.standingTile.x + mods['x']),
            y: parseInt(this.scene.player.standingTile.y + mods['y'])
        };
        this.menu = {
            x: parseInt(this.actionTile.x + mods['mx'])*16,
            y: parseInt(this.actionTile.y + mods['my'])*16
        };
        if (this.scene.player.underAction.CANDIG) {
            this.addAction({action: 'DIG', object: ''});
        }

        this.updateMarker();
    }



    addAction(newAction) {
        //action, object
        const map = this.actionsMap;
        if(!map.has(newAction.action)){
            map.set(newAction.action, true);    // set any value to Map
            this.availableActions.push({
                action: newAction.action,
                object: newAction.object
            });
        }
        this.actionsMap = map;
    }




    
}