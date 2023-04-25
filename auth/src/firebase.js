// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPJYuO9ZzW6BfcvzonLBbehZOh9SqEqI",
  authDomain: "authentication-6af3b.firebaseapp.com",
  projectId: "authentication-6af3b",
  storageBucket: "authentication-6af3b.appspot.com",
  messagingSenderId: "731032218453",
  appId: "1:731032218453:web:f1f80580fe297fc46d1ddc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
