const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });

exports.firestoreFunction = functions.firestore
  .document('/documentos/{pushId}')
  .onCreate(event => {
    console.log('sale');
    return true;
  });
