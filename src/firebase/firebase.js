import * as firebase from 'firebase';

const config = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  apiKey: 'AIzaSyALZXBllRIm8Y-HrtpOZHBH4GTLNF7aNG4',
  authDomain: 'elevator-app-e9bde.firebaseapp.com',
  databaseURL: 'https://elevator-app-e9bde.firebaseio.com',
  projectId: 'elevator-app-e9bde',
  storageBucket: 'elevator-app-e9bde.appspot.com',
  messagingSenderId: 213833276890
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };