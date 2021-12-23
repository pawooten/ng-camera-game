export const environment = {
  appVersion: require('../../package.json').version,
  appTitle: 'Camera Color Match',
  appAuthor: require('../../package.json').author.name,
  production: true,
  /* Enables diagnostic browser console logging, regardless of production state. Logging is enabled automatically when !production */
  enableConsoleLogging: true,
  /* Specifies the base href of the app to initialize the Angular router */
  appBaseHref: 'ng-camera-game-dist/',
  /* facingMode of the HTML camera: user | environment*/
  defaultFacingMode: 'environment',

  NotificationDurationConfig: {
    /* Default display duration for notifications in milliseconds */
    Default: 1000,
    /* Minimum notification duration the player may specify */
    Min: 400,
    /* Maximum notification duration the player may specify */
    Max: 2000  },
  PicsPerRoundConfig: {
    /* Default number of pics per round the player is assigned */
    Default: 6,
    /* Minimum number of pics per round the player may specify */
    Min: 1,
    /* Maximum number of pics per round the player may specify */
    Max: 16
  }
};
