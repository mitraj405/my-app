import {getApp, getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqhaOVaOwCo9AeEY18QKAZAmyA_s4Czt0",
  authDomain: "test-c30d2.firebaseapp.com",
  projectId: "test-c30d2",
  storageBucket: "test-c30d2.appspot.com",
  messagingSenderId: "977716308003",
  appId: "1:977716308003:web:22cfb889726f807158a996",
  measurementId: "G-3ME3G3QNPR"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db};