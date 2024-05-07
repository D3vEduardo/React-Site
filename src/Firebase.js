// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMjZXcQUxoqYWCNQTnKjib7nrTOR0lFrA",
    authDomain: "educode-54a02.firebaseapp.com",
    databaseURL: "https://educode-54a02-default-rtdb.firebaseio.com",
    projectId: "educode-54a02",
    storageBucket: "educode-54a02.appspot.com",
    messagingSenderId: "106000310484",
    appId: "1:106000310484:web:f8f09a82db363fdefbdb41",
    measurementId: "G-VFLCKEFF39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
