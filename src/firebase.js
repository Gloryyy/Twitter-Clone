import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAr6maxu-QFdDnspevjxMvu4lPke0Xh57Y",
  authDomain: "twitter-clone-6f19c.firebaseapp.com",
  projectId: "twitter-clone-6f19c",
  storageBucket: "twitter-clone-6f19c.appspot.com",
  messagingSenderId: "514743060677",
  appId: "1:514743060677:web:ab1897c8513b14687e08ac",
  measurementId: "G-1LFKM8P94Y",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
