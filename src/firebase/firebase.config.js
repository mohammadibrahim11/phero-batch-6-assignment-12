// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4s-KheaKfEQz4Kn-WJC_b5Cxm8wYdSiI",
  authDomain: "re-commerce-6e01b.firebaseapp.com",
  projectId: "re-commerce-6e01b",
  storageBucket: "re-commerce-6e01b.appspot.com",
  messagingSenderId: "109500586763",
  appId: "1:109500586763:web:566b752302175f0e8f200e",
  measurementId: "G-RVSEE1YHSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app