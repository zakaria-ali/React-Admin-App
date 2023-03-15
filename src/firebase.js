import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAuD5MbjUix8NFDz0a3qktKLAT6ESGHKeg",
    authDomain: "react-authadmin-app.firebaseapp.com",
    projectId: "react-authadmin-app",
    storageBucket: "react-authadmin-app.appspot.com",
    messagingSenderId: "444677169823",
    appId: "1:444677169823:web:e661c3f62bf183b521b8aa"
})

export const auth = app.auth()
export default app