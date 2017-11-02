import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAkbg8O9V---zp-wUtD0K-DH14AOhftBSw",
  databaseURL: "https://adressbook-ddccf.firebaseio.com",
  authDomain: "adressbook-ddccf.firebaseapp.com"
};
firebase.initializeApp(config);




const rootRef = firebase.database().ref();

 export const tasksRef = rootRef.child('users');
 
