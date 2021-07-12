import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFjx4Hrc18wJH2PjB7rdCRCTLuDmpwL_Y",
    authDomain: "mlem-two.firebaseapp.com",
    projectId: "mlem-two",
    storageBucket: "mlem-two.appspot.com",
    messagingSenderId: "654714563967",
    appId: "1:654714563967:web:b2892b159b9618867dbe4a",
    measurementId: "G-7LHCKQXWSY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;