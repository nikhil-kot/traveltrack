// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkdbgNCPsjoYQMbXmM1-F2l4_f9SVHciw",
  authDomain: "my-app-b92d3.firebaseapp.com",
  projectId: "my-app-b92d3",
  storageBucket: "my-app-b92d3.appspot.com",
  messagingSenderId: "837698993134",
  appId: "1:837698993134:web:ad16229edc64500509ecff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();