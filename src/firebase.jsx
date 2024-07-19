
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 

export const auth = getAuth();
export const db=getFirestore(app)