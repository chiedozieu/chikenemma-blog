// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c2beb.firebaseapp.com",
  projectId: "mern-blog-c2beb",
  storageBucket: "mern-blog-c2beb.appspot.com",
  messagingSenderId: "845700812825",
  appId: "1:845700812825:web:1531ebb3eb7f435e2e1a88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);