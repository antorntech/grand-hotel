// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fWpxxz-AYtiE4RKK4Rwgqh9hxdrdN24",
  authDomain: "grand-hotel-1ba2f.firebaseapp.com",
  projectId: "grand-hotel-1ba2f",
  storageBucket: "grand-hotel-1ba2f.appspot.com",
  messagingSenderId: "321394634447",
  appId: "1:321394634447:web:4ba7d0e361994209dd91ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
