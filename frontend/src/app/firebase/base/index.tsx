import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

import config from "app/config";

const app = firebase.initializeApp(config.firebaseConfig);
export const firebaseFunctions = app.functions();



const {NODE_ENV} = process.env

console.log("NODE ENV", NODE_ENV)
if(NODE_ENV === 'development'){
    firebase.functions().useFunctionsEmulator('http://localhost:5001')
}



export const db = app.firestore();
export default app;