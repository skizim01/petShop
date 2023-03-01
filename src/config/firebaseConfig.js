// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase , ref, set, push} from "firebase/database";

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,

} from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    databaseURL: "https://petshop-b1147-default-rtdb.europe-west1.firebasedatabase.app/",
    apiKey: "AIzaSyAdelRCbbpm1UabNhKUh5D27of36EzMfSI",
    authDomain: "petshop-b1147.firebaseapp.com",
    projectId: "petshop-b1147",
    storageBucket: "petshop-b1147.appspot.com",
    messagingSenderId: "640661319460",
    appId: "1:640661319460:web:1cb1289b690d10b61e0db1",
    measurementId: "G-EREXDVD4ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


initializeApp(firebaseConfig);

//init services
const auth = getAuth();


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {

    database,
    app,
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    ref, set, push
}