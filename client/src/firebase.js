// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-59813.firebaseapp.com",
  projectId: "mern-blog-59813",
  storageBucket: "mern-blog-59813.appspot.com",
  messagingSenderId: "944378955075",
  appId: "1:944378955075:web:d00faa6fd182f32bf25bf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);