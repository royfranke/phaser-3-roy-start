/**
 * A UI component class for mapping control keys to UI key hints
 */
export default class KeyHint {
    constructor(scene) {
        this.scene = scene;

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

        this.focusHints = [
            {
                char: 'I',
                focus: 'POCKETS',
                x: (this.displayPos.right - (4*38)),
                y: this.displayPos.top + 24
            },
        ];

        this.makeFocusHints();
    }

    setKeyTip (tip, active=false) {
        if (tip != null) {
            let style = active ? '-active' : '';
            tip.setClassName('key-tip'+style);
        }
    }

    makeFocusHints () {
        this.hints = {PLAYER: null, POCKETS: null, PAUSE: null};
        for (var i=0; i<this.focusHints.length;i++) {
            var hint = this.makeFocusToggleHint(this.focusHints[i]);
            this.hints[this.focusHints[i].focus] = hint;
        }
        console.log(this.hints);
    }

    changeFocus (from, to) {
        this.setKeyTip(this.hints[from], false);
        this.setKeyTip(this.hints[to], true);
    }

    /*
    *   key - focusState, part of screen (mapped to key name maybe?)
    types of keytips -- focus toggle (I, N), preceding an action menu item (X)
    */
    makeFocusToggleHint (hint) {
        if (hint != null) {
        const keyTip =  this.scene.add.dom(hint.x,hint.y, 'div', '', hint.char).setClassName('key-tip').setOrigin(0).setScrollFactor(0);
        return keyTip;
        }
        else {
            return null;
        }
    }
}