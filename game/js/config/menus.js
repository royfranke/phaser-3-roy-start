const app_menus = {
  MAIN: [
    { LABEL: 'Load Test', LOADER: 'Test Scene' },
    { LABEL: 'Load Game', LOADER: 'Load Game' },
    { LABEL: 'New Game', LOADER: 'New Game' },
    { LABEL: 'Settings', LOADER: 'System Settings' },
  ],
  PAUSE: [
    { LABEL: 'Save', LOADER: 'saveGame' },
    { LABEL: 'Exit', LOADER: 'exitGame' },
    { LABEL: 'Quit', LOADER: 'quitGame' },
  ],
  SETTINGS: [
    { LABEL: 'Back to Menu', LOADER: 'Main Menu' },
    { LABEL: 'Controls', LOADER: 'settingControls' },
    { LABEL: 'Graphics', LOADER: 'settingGraphics' },
    { LABEL: 'Volume', LOADER: 'settingVolume' },
    { LABEL: 'Options', LOADER: 'settingOptions' }
  ]
};

export default app_menus;
