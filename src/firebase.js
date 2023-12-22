// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAF0aK0lQp6d9ZHxWjKKs8ZXvjL_xy-Mc8",
  authDomain: "fir-1-df383.firebaseapp.com",
  projectId: "fir-1-df383",
  storageBucket: "fir-1-df383.appspot.com",
  messagingSenderId: "106810807855",
  appId: "1:106810807855:web:4945c9eed1c7fba7d8d8da",
  measurementId: "G-SVQ67J6W43"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
