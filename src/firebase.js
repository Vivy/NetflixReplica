// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
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
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const readOne = async (table = '', docId = '') => {
  try {
    const result = await getDoc(doc(collection(db, table), docId))
    console.log(result.id, 'this is result')
    console.log(result.data(), 'this is result data ')

  } catch (error) {
    console.log(error.message, 'something went wrong')
  }
}

export const write = () => { }

export const signIn = async (email = '', password = '') => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error.message, "things did not work in SignIN")
  }
}

export const signUp = async (email = '', password = '') => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    signIn(email, password)
    console.log(error.message, "things did not work in SignUP")
  }
}

