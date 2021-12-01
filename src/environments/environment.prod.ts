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
  /* Default number of pics per round the player is assigned */
  defaultPicsPerRound: 6,
    /* Default display duration for notifications in milliseconds */
    defaultNotificationDuration: 1000,
};
