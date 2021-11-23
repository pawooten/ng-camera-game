// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appVersion: require('../../package.json').version,
  appTitle: 'Camera Color Match - Dev',
  appAuthor: require('../../package.json').author.name,
  production: false,
  /* Specifies the base href of the app to initialize the Angular router */
  appBaseHref: '',
  /* facingMode of the HTML camera: user | environment*/
  defaultFacingMode: 'user',
  /* Default number of pics per round the player is assigned */
  defaultPicsPerRound: 8,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
