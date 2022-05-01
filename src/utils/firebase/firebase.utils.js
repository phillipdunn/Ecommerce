import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const signInWithRedirectGoogle = () => signInWithRedirect(auth, provider);

// Firestore
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const { uid } = userAuth;
  const userDocRef = doc(db, `users`, uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    // create user doc
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating user', error.message);
      throw error;
    }
  }
  return userDocRef;
};
