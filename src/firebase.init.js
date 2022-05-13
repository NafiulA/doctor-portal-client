// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe7ReY6tZrN0mSRw3kem2QbHksDZKAr8Q",
    authDomain: "doctors-portal-3c569.firebaseapp.com",
    projectId: "doctors-portal-3c569",
    storageBucket: "doctors-portal-3c569.appspot.com",
    messagingSenderId: "330309652541",
    appId: "1:330309652541:web:8245df27e00b89391e9a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;