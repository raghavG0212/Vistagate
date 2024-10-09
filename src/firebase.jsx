// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTd7AZvibZRSVrn-FbQyPaMjS2hdIah88",
  authDomain: "ecommerce-website-c0ba9.firebaseapp.com",
  projectId: "ecommerce-website-c0ba9",
  storageBucket: "ecommerce-website-c0ba9.appspot.com",
  messagingSenderId: "763142690065",
  appId: "1:763142690065:web:1f39b8f3140dcb0ba968b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
