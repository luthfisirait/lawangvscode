// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwYyXGtdGAF9gmNzDryDx7eK6FN34PS4Q",
  authDomain: "acehaquatic.firebaseapp.com",
  projectId: "acehaquatic",
  storageBucket: "acehaquatic.firebasestorage.app",
  messagingSenderId: "929725957179",
  appId: "1:929725957179:web:09ff3aea167ed74c75081e",
  measurementId: "G-29BE8EQ4QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);