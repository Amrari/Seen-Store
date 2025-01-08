import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsm-ZNxtQk6nzTYGbDHSWJ8G_k0GkXzpo",
  authDomain: "seen-store-9b2f0.firebaseapp.com",
  projectId: "seen-store-9b2f0",
  storageBucket: "seen-store-9b2f0.firebasestorage.app",
  messagingSenderId: "848809746442",
  appId: "1:848809746442:web:450a056784ffec99797ff3",
  measurementId: "G-2G5CPTCJYW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(firebaseApp);

// const provider = initializeApp(firebasConfig);
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup= () => {
    return signInWithPopup(auth, provider);
}
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, `users`,userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    }catch(error){
      console.log('Error creating user', error.message);
    };
  };

  return userDocRef;
}