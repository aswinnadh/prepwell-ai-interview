import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4Aq0kDZafY4pa409wJati8-6aIi7iBQo",
  authDomain: "prepwell-ai.firebaseapp.com",
  projectId: "prepwell-ai",
  storageBucket: "prepwell-ai.appspot.com",
  messagingSenderId: "747369166617",
  appId: "1:747369166617:web:5da3615680fb35fe013788",
  measurementId: "G-JN9QC54VCX"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);