import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as  serviceAccount from './serviceAccount.json';
import {authConfig, userData_i, submitUserData_v} from 'shared'
import {validate} from 'class-validator'


console.warn("env var", process.env.NODE_ENV)
const { NODE_ENV } = process.env


if (NODE_ENV == "dev") {
    admin.initializeApp({
        ...functions.config().firebase,
        credential: admin.credential.cert('./creds.json')
    });
} else {
    admin.initializeApp({
        ...functions.config().firebase
    });
}

let db = admin.firestore();



const {allowSignup} = authConfig 


exports.onUserCreate = functions.auth.user().onCreate((user)=>{
    if(!allowSignup){
        admin.auth().updateUser(user.uid, {
            disabled: true
        })
    }


    db.collection("users").doc(user.uid).create({
        completed: false
    })
})


exports.submitUserData = functions.https.onCall((data: userData_i, context)=>{
    return new Promise(async(res, rej)=>{
        if(!context.auth?.uid){
            return res({ok: false, message: "must be authed"})
        }

        console.log("submitUserData", data)

        const cls = new submitUserData_v(data)
        const errors = await validate(cls)

        if(errors.length != 0 ){
            return res({ok: false, errors})
        }

        await db.collection("users").doc(context.auth.uid).update({
            userData: data,
            "meta.completed" : true
        })
    })
})