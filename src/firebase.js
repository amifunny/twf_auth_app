/*
    Initialize irebase app and configure it
*/
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCzIV4QrRUu8NofDwZftarRYu7eyFVh7Dw",
    authDomain: "twf-app-d47bc.firebaseapp.com",
    databaseURL: "https://twf-app-d47bc-default-rtdb.firebaseio.com",
    projectId: "twf-app-d47bc",
    storageBucket: "twf-app-d47bc.appspot.com",
    messagingSenderId: "645927044942",
    appId: "1:645927044942:web:528029ad6f745c36bd801f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {firebase,db};