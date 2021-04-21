import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCV0FMyy1ZpdKWnduHdEPUzsUR3CKucs6c',
  authDomain: 'charming-league-308616.firebaseapp.com',
  projectId: 'charming-league-308616',
  storageBucket: 'charming-league-308616.appspot.com',
  messagingSenderId: '82780033922',
  appId: '1:82780033922:web:9d269c0102f7d21118359b',
  measurementId: 'G-3W5D06P99H',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
