import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCMlAdgF1oJT5AiAgHTiBG67Fn2wsL40ko",
    authDomain: "shameless-ab794.firebaseapp.com",
    projectId: "shameless-ab794",
    storageBucket: "shameless-ab794.appspot.com",
    messagingSenderId: "50277848436",
    appId: "1:50277848436:web:2dd60c266073de803d4821",
    measurementId: "G-QJXKGLSJD1"
  };

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const app = initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


// const storage = firebase.storage();

// export { db };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };