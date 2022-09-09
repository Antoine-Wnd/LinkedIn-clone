
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAzXlJj0NNyau01DPnK2iKilTp9hR114Xs",
    authDomain: "linkedin-clone-e319a.firebaseapp.com",
    projectId: "linkedin-clone-e319a",
    storageBucket: "linkedin-clone-e319a.appspot.com",
    messagingSenderId: "151770756695",
    appId: "1:151770756695:web:3fa0e7e9ea39578a231512",
    measurementId: "G-LHQH5FCV9H"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);
const auth = getAuth(FirebaseApp);

export { db, auth }