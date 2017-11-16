/**
 * Giriş Ayarları
 */

import {rootRef, firebaseAuth} from "../reference";
import * as firebase from 'firebase';

export function saveUser(user) {
    return rootRef
        .child(`users/${user.uid}/info`)
        .set({email: user.email, uid: user.uid})
        .then(() => user)
}

export function auth(email, password) {
    return firebaseAuth()
        .createUserWithEmailAndPassword(email, password)
        .then(saveUser)
}

export function login(email, pw) {
    return firebaseAuth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(result =>{
        return firebaseAuth().signInWithEmailAndPassword(email, pw)
    })
    
}

export function logout(email, password) {
    return firebaseAuth.signOut();
}

export function resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email)
}
