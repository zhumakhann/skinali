import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCflv9L2ZnRArRx5-T0ZAILHuhSQrKpjWU",
    authDomain: "skinali-1ebab.firebaseapp.com",
    projectId: "skinali-1ebab",
    storageBucket: "skinali-1ebab.appspot.com",
    messagingSenderId: "735282186071",
    appId: "1:735282186071:web:8e95d6b01a2880fa3f2012",
    measurementId: "G-19NVQ89W94"
}

firebase.initializeApp(config);

export default firebase;