export const environment = {
  appVersion: require('../../package.json').version,
  appTitle: 'Camera Color Match - Dev',
  production: true,
  /* Specifies the base href of the app to initialize the Angular router */
  appBaseHref: 'ng-camera-game-dist',
  /* facingMode of the HTML camera: user | environment*/
  defaultFacingMode: 'environment',
  /* Default number of pics per round the player is assigned */
  defaultPicsPerRound: 6,
};
