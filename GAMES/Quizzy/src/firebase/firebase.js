// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtRzgPEeyddAl7-3WQ1kanL_8bKq8_F8",
  authDomain: "quizzy-b0a46.firebaseapp.com",
  projectId: "quizzy-b0a46",
  storageBucket: "quizzy-b0a46.appspot.com",
  messagingSenderId: "936120935023",
  appId: "1:936120935023:web:3b8bf58dd2d87a7c72a39a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
