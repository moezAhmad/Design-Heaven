import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7HbCwpb95gOoR1NWyrklW4eSqnFPyPgU",
    authDomain: "design-heaven.firebaseapp.com",
    projectId: "design-heaven",
    storageBucket: "design-heaven.appspot.com",
    messagingSenderId: "458228987872",
    appId: "1:458228987872:web:c50985295bf21e5b641d85",
    measurementId: "G-XLGTC3HNXS"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { firebase, projectFirestore, projectAuth }



