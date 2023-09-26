// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: 'https://api.shinycolors.moe/',
  cloudFlareUrl: 'https://cf-static.shinycolors.moe/',
  supportSkillBound: {
    "S_SSR": [60, 65, 70, 75, 80],
    "S_SR": [50, 55, 60, 65, 70],
    "S_R": [40, 45, 50, 55, 60],
    "S_N": [5, 10],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
