// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBINitiV6MJj7lrSJPfRV7F8aMp4Q5EeOY",
  authDomain: "amai-wellness-login.firebaseapp.com",
  projectId: "amai-wellness-login",
  storageBucket: "amai-wellness-login.firebasestorage.app",
  messagingSenderId: "903369718564",
  appId: "1:903369718564:web:1f358c026c3b93453f51b1",
  measurementId: "G-E80TWLDTJK"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);