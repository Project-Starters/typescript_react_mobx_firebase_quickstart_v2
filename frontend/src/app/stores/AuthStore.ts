import { observable, action, computed } from 'mobx';
import app from "app/firebase/base";
import firebase from '@firebase/app';
import RouterStore from './RouterStore';
import { User } from './User';


export class AuthStore {
    private routerStore: RouterStore
    @observable user: User;
    @observable public error: string
    @observable public email: string
    @observable public password: string
    @observable public signupPage: string

    constructor(routerStore: RouterStore) {
        this.routerStore = routerStore
        // this.loading = true;
        this.user = new User()
        this.error = ""
        this.email = ""
        this.password = ""
        this.signupPage = ""
        app.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("user", user)
                // this.user = user;
                this.user = new User(user)
                // this.loadUserDoc(this.user.uid)
                console.log(this.user.providerData)
                console.log("photo url", this.user?.photoURL, this.user.displayName)
            } else {
                // this.user.isLoggedIn = false;
                this.user.loading = false;
            }
        });
    }

    onChange = (name: string) => {
        return (e) => {
            this[name] = e.target.value 
        }
    }

    @action
    handleUserSignup = () => {
        return new Promise((res, rej) => {
            app.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
                res({ ok: true });
            }).catch((error) => {
                this.error = error.message
                res({ ok: false, error });
            });
        })
    }
    handleCommonErrors = (error) => {
        if (error.message === "auth/account-exists-with-different-credential") {
            if (this.user && this.user.uid) {
                this.user.user.linkWithCredential(error.credential)
            } else {
                this.error = `You already have an account with the email ${error.email}`
            }
        }
    }

    @action
    handleUserLogin = async () => {
        return new Promise((res, rej) => {
            app.auth().setPersistence((firebase as any).auth.Auth.Persistence.LOCAL)
                .then(() => {
                    app.auth().signInWithEmailAndPassword(this.email, this.password).then((event) => {
                        if (event.user) {
                            console.log(event);
                            this.user = new User(event.user);
                        }
                        res()
                    }).catch((error) => {
                        console.error(error)
                        this.error = error.message
                        rej(error.message)
                    });
                }).catch((error) => {
                    console.log(error);
                    this.error = error.message
                    rej(error)
                })
        })
    }

    @action
    signOut = async () => {
        app.auth().signOut().then(() => {
            console.log("signout success")
        }).catch((error) => {
            console.warn("signout error", error)
        })
    }


    @computed
    get loading() {
        return this.user.loading
    }
    get isLoggedIn() {
        return this.user.isLoggedIn
    }

    get userData() {
        return this.user.userData
    }
    get userDoc() {
        return this.user.userDoc
    }
}

export default AuthStore;