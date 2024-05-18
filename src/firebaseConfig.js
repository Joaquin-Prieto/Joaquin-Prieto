
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE ,
  messagingSenderId: import.meta.env.VITE_MESSAGING ,
  appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth( app );
const provider = new GoogleAuthProvider();
export {auth, provider};
export const db = getFirestore( app )
