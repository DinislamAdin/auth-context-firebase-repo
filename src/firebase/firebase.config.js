// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHm0vetDQ-5wmlTIo66CVpHxY1uPEVKAk",
    authDomain: "auth-firebase-context-cb9ca.firebaseapp.com",
    projectId: "auth-firebase-context-cb9ca",
    storageBucket: "auth-firebase-context-cb9ca.appspot.com",
    messagingSenderId: "433156316448",
    appId: "1:433156316448:web:2ed42050e2305475da8b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;