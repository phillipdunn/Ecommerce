import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVhv16FJnu9x9YHVoaeAfkRUMz0niTKwQ',
  authDomain: 'ecom-db-dc2da.firebaseapp.com',
  projectId: 'ecom-db-dc2da',
  storageBucket: 'ecom-db-dc2da.appspot.com',
  messagingSenderId: '322800220143',
  appId: '1:322800220143:web:3a858001479459df5ce81a',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// force user to select an account
provider.setCustomParameters({ prompt: 'select_account' });

// Auth
export const auth = getAuth();
export const signInWithPopupGoogle = () => signInWithPopup(auth, provider);

// Firestore
export const db = getFirestore();

export const addCollectionsAndDocs = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objects.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
  console.log('batch done');
};

export const createUserDocFromAuth = async (userAuth, additonalUserInfo) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  const userDocRef = doc(db, `users`, uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    // create user doc
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additonalUserInfo });
    } catch (error) {
      throw error;
    }
  }
  return userDocRef;
};

// email password sign up
export const createAuthUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log('error creating user', error.message);
    throw error;
  }
};

// email password sign in
export const signInAuthUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log('error creating user', error.message);
    throw error;
  }
};

// sign out user
export const signOutAuthUser = async () => await signOut(auth);

// auth state change observer/listener
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
