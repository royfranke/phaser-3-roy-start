import KeyHint from "../helper/key-hint.js";
/**
 * A small helper class for utilities
 */
export default class HelperUI {
    constructor(scene) {
        this.scene = scene;
        this.scene.textures.get('BLOCK');
        this.scene.textures.get('EMPTY');
        this.scene.textures.get('EQUIPT');
        this.scene.textures.get('WEARS');
        this.scene.textures.get('HOLDS');
        this.coinPurse = {
            block: null,
            icon: null,
            display: null
        }

        this.mapBox = {
            box: null,
            flag: null
        }
        
        this.displayPos = {
            top: this.scene.cameras.main.displayHeight/2,
            right: this.scene.cameras.main.displayWidth*1.5,
            bottom: this.scene.cameras.main.displayHeight*1.5,
            left: this.scene.cameras.main.displayWidth/2,
        }

        this.margin = {
            top: 16,
            right: 8,
            bottom: 8,
            left: 8,
        }

        this.slipStyle = {
                'background-color': '#ccc890',
                'border': '1px solid',
                'color': '#465e62',
                'padding': '2px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
        };

        this.keyTipStyle = {
            'default': {
                'background-color': '#ccc890',
                'border': '1px solid',
                'color': '#465e62',
                'padding': '0px 4px',
                'border-radius': '24px',
                font: '12px defaultFont',
            },
            'active': {
                'background-color': '#465e62',
                'border': '1px solid',
                'color': '#ccc890',
                'padding': '0px 4px',
                'border-radius': '24px',
                font: '12px defaultFont',
            }
        };

        this.thoughtStyle = {
            'default': {
                'background-color': '#d4dee6',
                'border': '1px dotted',
                'color': '#465e62',
                'padding': '0px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            },
            'missing': {
                'background-color': '#d8dde1',
                'border': '1px solid #acafbf',
                'color': '#465e62',
                'padding': '0px 4px',
                'border-radius': '4px',
                'box-shadow': '2px -1px 0 #968bab',
                font: '12px defaultFont',
            },
            'positive': {
                'background-color': '#d8ffb7',
                'border': '1px dotted',
                'color': '#465e62',
                'padding': '0px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            }
        };

        this.mapHintStyle = {
            'background-color': '#ccc890',
            'border': '1px solid',
            'color': '#465e62',
            'padding': '2px 4px',
            'border-radius': '4px',
            font: '12px defaultFont',
        };

        this.dialogStyle = {
            'color': '#465e62',
            'padding':'16px',
            'width':'320px',
            'height':'64px',
            font: '14px defaultFont',
        };

        this.makePockets();
        this.currentDialog = false;
        this.addMapBox();
        this.addCoinPurse();
        

        this.displayActions = null;

        this.actionsGroup = this.scene.add.group();
/*
        this.actionStyle = {
            font: "12px defaultFont",
            fill: "#212121",
            backgroundColor: "#FFFFFF",
            padding: { x: 16, y: 16 },
          }; */
        this.actionStyle = {
            'background-color': '#ccc890',
            'border': '1px solid',
            'color': '#465e62',
            'padding': '2px 4px',
            'border-radius': '4px',
            font: '12px defaultFont',
        };

        
        this.coinpurseStyle = {
            default: {
                'background-color': '#ccc890',
                'border': '1px solid',
                'color': '#465e62',
                'padding': '2px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            },
            positive: {
                'background-color': '#d8ffb7',
                'border': '1px solid #74b453',
                'color': '#465e62',
                'padding': '2px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            },
            negative: {
                'background-color': '#f8c7cf',
                'border': '1px solid #fc5c46',
                'color': '#465e62',
                'padding': '2px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            },
            missing: {
                'background-color': '#c4d7e3',
                'border': '1px solid #465e62',
                'color': '#465e62',
                'padding': '2px 4px',
                'border-radius': '4px',
                font: '12px defaultFont',
            }
        };
        this.keyHint = new KeyHint(this.scene);
    }


    update () {
        if (this.scene.ctrl.focusState != this.scene.ctrl.lastFocusState) {
            this.keyHint.changeFocus(this.scene.ctrl.lastFocusState, this.scene.ctrl.focusState);
        }
        if (this.scene.ctrl.focusState == 'POCKETS') {
            this.openPocket();
        }
        else if (this.scene.ctrl.lastFocusState == 'POCKETS') {
            this.closePocket();
        }
        this.actionMenu();
        this.coinpurseMenu();
        
    }

    makePocketKeyTip (active=false) {
        let tip = 'I';
        let _x = (this.displayPos.right - (4*38));
        let _y = this.displayPos.top + 24;
        let style = active ? '-active' : '';
        let keyTip =  this.scene.add.dom(_x,_y, 'div',null, tip).setClassName('key-tip'+style).setOrigin(0).setScrollFactor(0);
        return keyTip;
    }

    makePockets () {
        this.pockets = [];
        this.pocketIcons = [];
        this.pocketSlips = [];
        const pocketConfig = this.scene.player.pockets.pockets;
        //this.pocketKeyTip = this.makePocketKeyTip();
        for (var i=0;i<3;i++) {
            let state = pocketConfig[i].STATE;
            let color = pocketConfig[i].COLOR[state];
            let slot = this.addSlot(i,0,color);
            let slip = this.addSlip(i,0);
            this.pocketSlips.push(slip);
            this.pockets.push(slot);

            var pocket = pocketConfig[i][state];
            var icon = this.addIcon(i,0, state, pocket.ICON );
            this.pocketSlips[i].setText(pocket.NAME);
            this.pocketIcons.push(icon);
        }
    }

    drawPockets () {
        var pocketConfig = this.scene.player.pockets.pockets;

        for (var i=0;i<3;i++) {
            let state = pocketConfig[i].STATE;
            let color = pocketConfig[i].COLOR[state];
            this.pockets[i].setFrame('BLOCK_'+color);
            var pocket = pocketConfig[i][state];
            var icon = this.addIcon(i,0, state, pocket.ICON );

            this.pocketSlips[i].setText(pocket.NAME);
            this.pocketIcons[i].destroy();
            this.pocketIcons[i] = icon;
        }
        
    }

    coinpurseMenu () {
        if (this.scene.ctrl.focusState != 'POCKETS' && this.scene.ctrl.lastFocusState == 'POCKETS') {
            this.closeCoinpurse();
        }
        if (this.scene.ctrl.focusState == 'POCKETS' && this.scene.ctrl.lastFocusState != 'POCKETS') {
            this.openCoinpurse();
        }
    }

    formatMoney (amount) {
        return amount < 100 ? amount+'¢' : '$'+(amount/100).toFixed(2);
    }

    closeCoinpurse () {
        this.coinPurse.icon.setFrame('COINPURSE_closed');
        this.coinpurseUIAmount.destroy();
    }

    openCoinpurse () {
        this.scene.player.coinpurse.updateTotal();
        this.coinPurse.icon.setFrame('COINPURSE_open');
        let coinTotal = this.formatMoney(this.scene.player.coinpurse.total);
        this.coinpurseUIAmount = this.tellCoinpurse(coinTotal);
    }

    tellBrain (content,timing=0,status='default') {
        var _x = this.scene.player.snappedStanding.x
        var _y = this.scene.player.snappedStanding.y - 32;
        var thought = this.scene.add.dom(_x,_y, 'div',this.thoughtStyle[status], content).setOrigin(0);
        if (timing > 0) {
            if (status != 'default') {
                let tween_to_y = status == 'positive' ? _y - this.margin.top : _y - this.margin.top/2;
                let tween_to_x = status == 'missing' ? _x + this.margin.left : _x - this.margin.left/2;
                this.scene.tweens.add({
                    targets: [ thought ],
                    y: tween_to_y,
                    x: tween_to_x,
                    duration: timing,
                    ease: 'Sine.easeInOut',
                    loop: -1,
                    yoyo: true
                });
            }
            setTimeout(() => {
                thought.destroy();
            }, timing);
        }
        else {
            return thought;
        }
    }

    tellCoinpurse (content,timing=0,status='default') {
        let _x = this.displayPos.left + (this.margin.left*4);
        let _y = this.displayPos.top + (this.margin.top*2.5);
        
        let flag = this.scene.add.dom(_x,_y, 'div',this.coinpurseStyle[status], content).setOrigin(0).setScrollFactor(0);
        if (timing > 0) {
            if (status != 'default') {
                let tween_to_y = status == 'positive' ? _y - this.margin.top : _y + this.margin.top;
                let tween_to_x = status == 'missing' ? _x - this.margin.left : _x;
                let tween_loop = status == 'missing' ? 2 : -1;
                this.scene.tweens.add({
                    targets: [ flag ],
                    y: tween_to_y,
                    x: tween_to_x,
                    duration: timing*.75,
                    ease: 'Sine.easeInOut',
                    loop: tween_loop,
                    yoyo: true
                });
            }
            setTimeout(() => {
                flag.destroy();
            }, timing);
        }
        else {
            return flag;
        }
    }

    actionMenu () {
        if (!this.scene.player.action.showMenu) {
            this.actionsGroup.clear(false, true);
            this.displayActions = null;
        }
        else {
            const availableActions = this.scene.player.action.availableActions;
       
                
                var displayActions = [];

                availableActions.forEach(function (action, index) {
                    displayActions.push({
                        action: action.action,
                        object: action.object
                    });
                });

                this.displayActions = displayActions;
                this.drawActions();
            
        }
    }
    

    drawActions () {

        this.actionsGroup.clear(false, true);

        const style = this.actionStyle;

        var x = this.scene.player.action.menu.x;
        var y = this.scene.player.action.menu.y;

        const actionsGroup = this.actionsGroup;

        const scene = this.scene;
        this.displayActions.forEach(function (action, index) {
            const newAction = scene.add.dom(x, y + (index * 24), 'div', style, action.action).setOrigin(0);
            //const newAction = scene.add.text(x, y + (index * 24), action.action, style).setDepth(101100);
            actionsGroup.add(newAction);
        });
        this.actionsGroup = actionsGroup;
    }

    tellDialogBox (content) {
        if (!this.currentDialog) {
            let box = this.addDialogBox();
            box.setText(content);
            this.currentDialog = true;
        }
        else {

        }
    }

    addDialogBox () {
        let _x = this.displayPos.left + 112;
        let _y = this.displayPos.bottom - (96 + this.margin.bottom);

        let dialogBox = this.scene.add.image(_x,_y, 'dialogBox').setOrigin(0).setScrollFactor(0).setDepth(100100);

        let dialogContent = this.scene.add.dom(_x,_y, 'div',this.dialogStyle, 'Dialog').setOrigin(0).setScrollFactor(0);

        
/*
        let dialogContent = this.scene.add.text(_x,_y, '', {
            font: "16px defaultFont",
            fill: "#3a3a50",
            padding: { x: 16, y: 16 },
          })
          .setScrollFactor(0)
          .setWordWrapWidth(320)
          .setMaxLines(3).setDepth(101100);
          */
          
          this.scene.time.addEvent({
            delay: 3000,
            callback: ()=>{
                dialogBox.destroy();
                dialogContent.destroy();
                this.currentDialog = false;
            }
        });
        return dialogContent;
    }

    addCoinPurse () {
        let _x = this.displayPos.left + this.margin.left;
        let _y = this.displayPos.top + this.margin.top;
        let color = 'gold';
        this.coinPurse.block = this.scene.add.image(_x,_y, 'BLOCK', 'BLOCK_'+color).setOrigin(0).setScrollFactor(0).setDepth(100000);
        this.coinPurse.icon = this.scene.add.image(_x + 8,_y + 8, 'COINPURSE', 'COINPURSE_closed').setOrigin(0).setScrollFactor(0).setDepth(100001);
    }
 
    addMapBox () {
        let _x = this.displayPos.left + this.margin.left;
        let _y = this.displayPos.bottom - (96 + this.margin.bottom)
        this.mapBox.box = this.scene.add.image(_x,_y, 'mapBox').setOrigin(0).setScrollFactor(0).setDepth(100100);
        this.mapBox.flag = this.scene.add.dom(_x,_y + 80, 'div',this.mapHintStyle, 'Mini Map').setOrigin(0).setScrollFactor(0);
    }

    tellMapBoxFlag (content) {
        this.mapBox.flag.setText(content);
    }

    addIcon (slot_x, slot_y, textureName, frameName) {
        let icon = this.scene.add.image(0,0, textureName,frameName).setOrigin(0);
        icon.setScrollFactor(0);
        icon.setDepth(100100);
        var iconMargin = {
            x: 24 + (slot_x*40),
            y: 24 + (slot_y*40),
        };
        icon.setPosition(this.displayPos.right - (icon.displayWidth) - (iconMargin.x), this.displayPos.top + (iconMargin.y));
        return icon;
    }

    addSlot (slot_x, slot_y, color) {
        let slot = this.scene.add.image(0,0, 'BLOCK', 'BLOCK_'+color).setOrigin(0);
        slot.setScrollFactor(0);
        slot.setDepth(100000);
        const slotMargin = {
            x: 16 + (slot_x*40),
            y: 16 + (slot_y*40),
        };
        slot.setPosition(this.displayPos.right - (slot.displayWidth) - (slotMargin.x), this.displayPos.top + (slotMargin.y));
        return slot;
    }

    addSlip (slot_x, slot_y) {
        let _x = this.displayPos.right - (28 + (slot_x*39));
        let _y = this.displayPos.top + (slot_y*40);
        let slip =  this.scene.add.dom(_x,_y, 'div', this.slipStyle, '-').setOrigin(.5,0).setScrollFactor(0).setVisible(false);
        return slip;
    }

    openPocket () {
        //this.pocketKeyTip.destroy();
        //this.pocketKeyTip = this.makePocketKeyTip(true);
        var pocketConfig = this.scene.player.pockets.pockets;
        for (var i=0;i<3;i++) {
            if (this.scene.player.pockets.selected == i) {
                var color = pocketConfig[i].COLOR.SELECTED;
                if (pocketConfig[i].STATE == 'WEARS') {
                    
                }
                this.pocketSlips[i].setVisible(true);
            }
            else {
                var color = pocketConfig[i].COLOR.EMPTY;
                this.pocketSlips[i].setVisible(false);
            }
            this.pockets[i].setFrame('BLOCK_'+color);
        }
    }

    closePocket () {
        var pocketConfig = this.scene.player.pockets.pockets;
        //this.pocketKeyTip.destroy();
        //this.pocketKeyTip = this.makePocketKeyTip();
        for (var i=0;i<3;i++) {
            var color = pocketConfig[i].COLOR.EMPTY;
            this.pockets[i].setFrame('BLOCK_'+color);
            this.pocketSlips[i].setVisible(false);
        }
    }
    

}