// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOnRgzEwir7LGCjo0C8AvD2gHGexwxhC0",
  authDomain: "foodscape-react.firebaseapp.com",
  projectId: "foodscape-react",
  storageBucket: "foodscape-react.appspot.com",
  messagingSenderId: "378794149189",
  appId: "1:378794149189:web:83bdd0ae79ba0bf06bea2c",
  measurementId: "G-R295BHFPMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 

export const auth = getAuth();
export const db=getFirestore(app)