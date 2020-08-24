import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAAEZVgFHell7hjVRs1jUGqRlRw4q1w1Z0",
    authDomain: "book-santa-f125f.firebaseapp.com",
    databaseURL: "https://book-santa-f125f.firebaseio.com",
    projectId: "book-santa-f125f",
    storageBucket: "book-santa-f125f.appspot.com",
    messagingSenderId: "1017022966882",
    appId: "1:1017022966882:web:f5881b4091c093cdf6353b"
  };

firebase.initializeApp (firebaseConfig)

export default firebase.firestore();