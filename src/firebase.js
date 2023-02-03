// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCh9-P6bbcWsKBagc0Jgl0DZtnYf4CBUQ",
  authDomain: "netflixreplica-804b0.firebaseapp.com",
  projectId: "netflixreplica-804b0",
  storageBucket: "netflixreplica-804b0.appspot.com",
  messagingSenderId: "640884164026",
  appId: "1:640884164026:web:26b3ebdcd82e2515a30983",
  measurementId: "G-28WCQP7FZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
