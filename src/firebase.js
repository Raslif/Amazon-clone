import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSzT4dhrQkQrmbazzTrtktzBOmA9-FmAc",
  authDomain: "clone-149b5.firebaseapp.com",
  projectId: "clone-149b5",
  storageBucket: "clone-149b5.appspot.com",
  messagingSenderId: "1007361563529",
  appId: "1:1007361563529:web:fffe32673c4ef03ce51f58",
  measurementId: "G-KFXRDZLGH9",
};

const firebaseInitializer = firebase.initializeApp(firebaseConfig);

const db = firebaseInitializer.firestore();
const auth = firebase.auth();

export { db, auth };
