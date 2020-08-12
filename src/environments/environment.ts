// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    'PROJECT-ONE': {
      apiKey: "AIzaSyCmdCdXcgGYgZx96G2cOK2CvtTAK5YkoYA",
      authDomain: "database1-54fe5.firebaseapp.com",
      databaseURL: "https://database1-54fe5.firebaseio.com",
      projectId: "database1-54fe5",
      storageBucket: "database1-54fe5.appspot.com",
      messagingSenderId: "16349969918",
      appId: "1:16349969918:web:6b560ca05e543300c814af",
      measurementId: "G-52BH94RBHS",
    },
    'PROJECT-TWO': {
      apiKey: "AIzaSyCFaUyIo3qCEAZ-iE1A0xrwuBLipRZOVFk",
      authDomain: "database2-39eab.firebaseapp.com",
      databaseURL: "https://database2-39eab.firebaseio.com",
      projectId: "database2-39eab",
      storageBucket: "database2-39eab.appspot.com",
      messagingSenderId: "435097287550",
      appId: "1:435097287550:web:48e1a429cd1a04c8d9512f",
      measurementId: "G-FYFJ0J32GS",
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
