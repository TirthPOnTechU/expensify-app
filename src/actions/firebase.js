import {provider,firebase} from "../firebase/firebase";

export const startLogin=()=>(
    (dispatch)=>{
        return firebase.auth().signInWithPopup(provider)
    }
)
export const startLogout=()=>(
    (dispatch)=>{
        return firebase.auth().signOut()
    }
)