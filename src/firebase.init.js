// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm7Y1yJDF3Xv1a8x7vB3AMvtXMh0qRet4",
    authDomain: "genius-car-service1-d0b48.firebaseapp.com",
    projectId: "genius-car-service1-d0b48",
    storageBucket: "genius-car-service1-d0b48.appspot.com",
    messagingSenderId: "1058661002562",
    appId: "1:1058661002562:web:78fc5c142da71cbf2e6cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;