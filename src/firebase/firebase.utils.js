import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCiFzJNPmi0ISP90z39ZjI2Vx467HMi6Ys",
    authDomain: "food-restaurant-df78a.firebaseapp.com",
    projectId: "food-restaurant-df78a",
    storageBucket: "food-restaurant-df78a.appspot.com",
    messagingSenderId: "428330849162",
    appId: "1:428330849162:web:9744f9553c30e583326e73",
    measurementId: "G-59PB12W0PS"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
