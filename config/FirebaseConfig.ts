import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzsOm7hwE4HmXb5dreP2rm-VQeQR-ZQ4M",
  authDomain: "reactnativeproject-5cfff.firebaseapp.com",
  projectId: "reactnativeproject-5cfff",
  storageBucket: "reactnativeproject-5cfff.appspot.com",
  messagingSenderId: "239918718959",
  appId: "1:239918718959:web:dd7fef47bfdb2f69a6a01a",
  measurementId: "G-N69ZXLRKWL",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
