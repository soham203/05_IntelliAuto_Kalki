// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "shyam-say-s.firebaseapp.com",
  projectId: "shyam-say-s",
  storageBucket: "shyam-say-s.appspot.com",
  messagingSenderId: "530576189539",
  appId: "1:530576189539:web:49008f83ef6f9a87ce3056",
  measurementId: "G-ZJBDGGWXP9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


  