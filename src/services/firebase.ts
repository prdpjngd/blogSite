import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    appId: process.env.GATSBY_FIREBASE_APPID,
    authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
    measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
    projectId: process.env.GATSBY_FIREBASE_PROJECTID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET
}
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;