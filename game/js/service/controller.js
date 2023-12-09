export default class ControllerService {

  constructor(scene) {
    this.scene = scene;
    this.focusState = 'PLAYER';
    this.lastFocusState = 'PLAYER';
    const { KeyCodes } = Phaser.Input.Keyboard; 
    this.KEYS = this.scene.input.keyboard.addKeys({
        INVENTORY:   KeyCodes.I,
        BACK:   KeyCodes.Z,
        SELECT: KeyCodes.X,
        MORE:   KeyCodes.C,
        ACTION: KeyCodes.C,
        RUN:    KeyCodes.SHIFT,
        HOP:    KeyCodes.V,
        PAUSE:  KeyCodes.SPACE,
        UP:     KeyCodes.UP,
        RIGHT:  KeyCodes.RIGHT,
        LEFT:   KeyCodes.LEFT,
        DOWN:   KeyCodes.DOWN,
    });
    this.CTL = {};
    for (const [key, value] of Object.entries(this.KEYS)) {
        this.CTL[key] = {TAP: false, HOLD: false};
    }
  } 

  update() {
    for (const [key, value] of Object.entries(this.KEYS)) {
        this.CTL[key].TAP = Phaser.Input.Keyboard.JustDown(value);
        this.CTL[key].HOLD = value.isDown;
    }
    this.updateFocus();
  }

  updateFocus() {
    this.lastFocusState = this.focusState;
    switch (this.focusState) {
        case 'PLAYER':
            if (this.CTL.INVENTORY.TAP) {
                this.focusState = 'POCKETS';
            }
            if (this.CTL.PAUSE.TAP) {
                this.focusState = 'PAUSE';
            } 
        break;
        case 'POCKETS':
            if (this.CTL.INVENTORY.TAP) {
                this.focusState = 'PLAYER';
            } 
            if (this.CTL.PAUSE.TAP) {
                this.focusState = 'PAUSE';
            } 
        break;
        case 'PAUSE':
            if (this.CTL.PAUSE.TAP) {
                this.focusState = 'PLAYER';
            } 
        break;
    }
  }


}
