import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSd4ISEj24Zhz_kqYA2lRFJt3JlmQq6xc",
  authDomain: "clone-56a33.firebaseapp.com",
  projectId: "clone-56a33",
  storageBucket: "clone-56a33.appspot.com",
  messagingSenderId: "415795534581",
  appId: "1:415795534581:web:771dc22c7e7c745c56c3bc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
