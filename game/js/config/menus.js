const app_menus = {
  MAIN: [
    { label: 'Load Dungeon', scene: 'Dungeon' },
    { label: 'Load Game', scene: 'Load Game' },
    { label: 'New Game', scene: 'New Game' },
    { label: 'Settings', scene: 'System Settings' },
  ],
  PAUSE: [
    { label: 'Save', function: 'saveGame' },
    { label: 'Exit', function: 'exitGame' },
    { label: 'Quit', function: 'quitGame' },
  ],
  SETTINGS: [
    { label: 'Back to Menu', function: 'toMainMenu' },
  ]
};

export default app_menus;
