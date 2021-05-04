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

export const getCurrentUser = () => {
  return new Promise(resolve => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    });
  });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionData = async (collectionKey, collectionValue) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  collectionValue.forEach(obj => {
    const objRef = collectionRef.doc();
    console.log(objRef);
    batch.set(objRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
      id: doc.id,
    };
  });

  return transformedCollection.reduce((acc, obj) => {
    acc[obj.title.toLowerCase()] = obj;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
