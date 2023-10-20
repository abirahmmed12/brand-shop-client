// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsND54NyEOz58kpZvLajQwqf-LH2stSL0",
  authDomain: "brandshop-d3be7.firebaseapp.com",
  projectId: "brandshop-d3be7",
  storageBucket: "brandshop-d3be7.appspot.com",
  messagingSenderId: "1019177069363",
  appId: "1:1019177069363:web:d2e5022e3d2b18a5736c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app