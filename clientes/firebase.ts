// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmoQlae7yfKRXxMl3vOyfey4K1kp4kPIw",
  authDomain: "nissan-8b891.firebaseapp.com",
  projectId: "nissan-8b891",
  storageBucket: "nissan-8b891.firebasestorage.app",
  messagingSenderId: "123985195949",
  appId: "1:123985195949:web:9394df8c55885a274be724",
  measurementId: "G-KTPXQ7S84C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);