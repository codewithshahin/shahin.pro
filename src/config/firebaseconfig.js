// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkDLiwNUNPEYu0U4GjzSJ-BF5Xks5x4IU",
  authDomain: "shahina-pro.firebaseapp.com",
  projectId: "shahina-pro",
  storageBucket: "shahina-pro.appspot.com",
  messagingSenderId: "119257347934",
  appId: "1:119257347934:web:98bfe905aa96cbd2eb01cf",
  measurementId: "G-HXSNZP0TT8",
};

// Initialize Firebase
const FirebaseInit = () => initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(FirebaseInit());

export { FirebaseInit, db };
