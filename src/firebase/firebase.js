import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDeGm7e9EBHj_VRD7je6X11tj5u2sTed44",
    authDomain: "expensify-2bfd9.firebaseapp.com",
    databaseURL: "https://expensify-2bfd9.firebaseio.com",
    projectId: "expensify-2bfd9",
    storageBucket: "expensify-2bfd9.appspot.com",
    messagingSenderId: "442698493129",
    appId: "1:442698493129:web:424b39b851e3ae6ac57118",
    measurementId: "G-N2C32CV6X4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  export {firebase, provider}