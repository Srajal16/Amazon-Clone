// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACt0PhvAM37UxmW8if3nv5mHjHXoJpRNc",
  authDomain: "clone-7549a.firebaseapp.com",
  projectId: "clone-7549a",
  storageBucket: "clone-7549a.appspot.com",
  messagingSenderId: "339596947606",
  appId: "1:339596947606:web:a37488ddf5163daebc52b7",
  measurementId: "G-D6BKL274RH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};