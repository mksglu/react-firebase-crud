import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA6xARrNOUUG_AfUbcS_6rn4qG7i1GpuWM",
  authDomain: "crud-36716.firebaseapp.com",
  databaseURL: "https://crud-36716.firebaseio.com"
};

firebase.initializeApp(config);

export const rootRef = firebase
  .database()
  .ref();

export const tasksRef = rootRef.child('users/user');
export const firebaseAuth = firebase.auth;
