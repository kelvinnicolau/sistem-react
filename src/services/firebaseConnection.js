import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDrfOR1CsLabxxxhmWtDsNz4IGSzUJeIko",
    authDomain: "sistema-c1e47.firebaseapp.com",
    projectId: "sistema-c1e47",
    storageBucket: "sistema-c1e47.appspot.com",
    messagingSenderId: "227484203247",
    appId: "1:227484203247:web:9bd6fc40ef864c1787031a",
    measurementId: "G-VH1GCZF07H"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;