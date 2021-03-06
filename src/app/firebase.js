// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCx_Aeh12xfI6AOlJvKCbVtUZCuPdX2vLU",
    authDomain: "slack-clone-e6eef.firebaseapp.com",
    projectId: "slack-clone-e6eef",
    storageBucket: "slack-clone-e6eef.appspot.com",
    messagingSenderId: "946941677084",
    appId: "1:946941677084:web:dbd14d57317bcef8f4d9d9",
    measurementId: "G-CRCKXY85NJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
