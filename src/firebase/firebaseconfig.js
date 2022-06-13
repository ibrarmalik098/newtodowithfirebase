import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeQ6CwlRP4pBOLelekfIqTPIZcND5rlKU",
    authDomain: "componentfirebase.firebaseapp.com",
    projectId: "componentfirebase",
    storageBucket: "componentfirebase.appspot.com",
    messagingSenderId: "496641110565",
    appId: "1:496641110565:web:2fcbe8d6039122fb0e05cc",
    measurementId: "G-14TPEC7E5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;