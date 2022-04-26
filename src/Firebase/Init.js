// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJdG7sell9m9GMBeoycc02_4w5EmfmOj4",
  authDomain: "volunteer-network-d7fea.firebaseapp.com",
  projectId: "volunteer-network-d7fea",
  storageBucket: "volunteer-network-d7fea.appspot.com",
  messagingSenderId: "291788776509",
  appId: "1:291788776509:web:430cd6ac44919b238ab654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
