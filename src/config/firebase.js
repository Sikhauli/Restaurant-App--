import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCitb28dUhr8XVK9bFWJP0_SVUrchY5dxY",
    authDomain: "restaurant-fabfa.firebaseapp.com",
    projectId: "restaurant-fabfa",
    storageBucket: "restaurant-fabfa.appspot.com",
    messagingSenderId: "711631545994",
    appId: "1:711631545994:web:3a17bd1bab10a46d19ef73",
    measurementId: "G-F043L2R0KD"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);