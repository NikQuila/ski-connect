// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  initializeAuth,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn3HV0eAtZsUMhWAIBbrhv2k0wJRr3cQ8",
  authDomain: "ski-club-connect.firebaseapp.com",
  projectId: "ski-club-connect",
  storageBucket: "ski-club-connect.appspot.com",
  messagingSenderId: "163153878855",
  appId: "1:163153878855:web:683743a787771d093d7662",
  measurementId: "G-GKRCW2NWTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// const auth = firebase.auth();

// Función para registrar un usuario nuevo
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      try {
        await setDoc(userDocRef, {
          email: email,
          userID: user.uid,
          name: name,
        });
        console.log("Creted User Doc!");
      } catch (error) {
        console.log("error creating user");
      }
    }
    return userDocRef;
  } catch (error) {
    console.log(error);
  }
};

// Funcion para login
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Funcion para restablecer contraseña
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Funcion para chequear si el usuario esta loggeado
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// Funcion para loggearse out
export const logOutUser = async () => signOut(auth);
