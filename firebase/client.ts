// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";

import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Aq0kDZafY4pa409wJati8-6aIi7iBQo",
  authDomain: "prepwell-ai.firebaseapp.com",
  projectId: "prepwell-ai",
  storageBucket: "prepwell-ai.firebasestorage.app",
  messagingSenderId: "747369166617",
  appId: "1:747369166617:web:5da3615680fb35fe013788",
  measurementId: "G-JN9QC54VCX"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db= getFirestore(app)