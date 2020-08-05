import { observable } from 'mobx';
import { f_users_i } from 'shared';
import { DocumentSnapshot } from "@firebase/firestore-types";
import { db, firebaseFunctions } from 'app/firebase/base';
import { userData_i } from 'shared'



export class User{
    @observable public user: firebase.User 
    @observable public loading: boolean
    @observable public isLoggedIn: boolean
    
    @observable public userDoc?: DocumentSnapshot
    @observable public userData?: f_users_i
    constructor(user?: firebase.User){
        this.loading = true
        this.isLoggedIn = false;
        if(user){
            this.isLoggedIn = true;
            this.user = user
            this.loadUserDoc()             
        }
    }

    loadUserDoc = async () => {
        // const doc = await db.collection("users").doc(this.uid).get()
        db.collection("users").doc(this.uid).onSnapshot((doc)=>{
            this.userDoc = doc;
            this.userData = doc.data() as f_users_i
            this.loading = false
        })
    }


    updateUserDoc = async (userData: userData_i) => {
        
        const submitUserData = firebaseFunctions.httpsCallable("submitUserData") 
        const response = await submitUserData(userData)
        console.log("RESPONSE", response)
        // db.collection("users").doc(this.uid).update({userData: userInfo})
    }


    get uid(): string{
        return this.user.uid
    }
    get displayName(): string{
        return this.user.displayName ? this.user.displayName : this.userData?.userData.displayName
    }
    get providerData(){
        return this.user.providerData
    }

    get isCompleted(){
        return this.userData?.meta?.completed
    }
    
}