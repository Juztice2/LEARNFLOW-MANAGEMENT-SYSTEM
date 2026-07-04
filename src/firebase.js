// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJc2fGN4NYxdj6PWQZ8PbNYkPDpzLdVM4",
  authDomain: "learnflow-60393.firebaseapp.com",
  projectId: "learnflow-60393",
  storageBucket: "learnflow-60393.firebasestorage.app",
  messagingSenderId: "841064164483",
  appId: "1:841064164483:web:d4f5fd420b49f7952effb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)