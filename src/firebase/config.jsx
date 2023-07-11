import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const {VITE_APIKEY,VITE_AUTHDOMAIN,VITE_PROJECTID,VITE_STORAGEBUCKET,VITE_MESSAGINGSENDERID,VITE_APPID} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)