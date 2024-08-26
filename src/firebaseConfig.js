// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXSMfNmrOkAph1PWhislaX4M04QVdDXDA",
  authDomain: "elmanage.firebaseapp.com",
  projectId: "elmanage",
  storageBucket: "elmanage.appspot.com",
  messagingSenderId: "1020765449135",
  appId: "1:1020765449135:web:693e5b2a05dabd1c4c9d5a",
  measurementId: "G-P9JVDZRVWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);