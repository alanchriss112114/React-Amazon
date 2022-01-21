import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBto9B649NZKTKAFU5o9v6t108MZLkoQK8",
  authDomain: "fir-7f617.firebaseapp.com",
  projectId: "fir-7f617",
  storageBucket: "fir-7f617.appspot.com",
  messagingSenderId: "94051285078",
  appId: "1:94051285078:web:a3940baf766c0dbf6ae3f7",
  measurementId: "G-2P487N8BSC"
};

  export default firebase.initializeApp(firebaseConfig)
  