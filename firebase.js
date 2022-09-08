import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDk21vLo1VE6HDkzzF-HEv1QmYLtzdBS6M",
    authDomain: "facebook-2-yt.firebaseapp.com",
    projectId: "facebook-2-yt",
    storageBucket: "facebook-2-yt.appspot.com",
    messagingSenderId: "946331950880",
    appId: "1:946331950880:web:614742b1e87167d47f0145",
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };