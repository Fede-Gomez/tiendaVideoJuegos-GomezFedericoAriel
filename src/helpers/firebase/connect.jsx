// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAclpMMBofXd-lJBoD7WPcqdI1xWpCITyM",
  authDomain: "ecommercevideojuegos.firebaseapp.com",
  projectId: "ecommercevideojuegos",
  storageBucket: "ecommercevideojuegos.appspot.com",
  messagingSenderId: "4780288034",
  appId: "1:4780288034:web:8938168947d9504153827b"
};

// Initialize Firebase
const startFirebase = ()=> initializeApp(firebaseConfig);
export default startFirebase