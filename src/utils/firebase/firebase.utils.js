import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

export const auth = getAuth();
export const signInWithPopupGoogle = () => signInWithPopup(auth, provider);
export const signInWithRedirectGoogle = () => signInWithRedirect(auth, provider);
