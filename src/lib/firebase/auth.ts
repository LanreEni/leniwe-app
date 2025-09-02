// src/lib/firebase/auth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../firebase";
import { createUserProfile } from "./profile";
import { updateProfile } from "firebase/auth";

export async function signUpWithEmail(
  email: string,
  password: string,
  name?: string
) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const user = cred.user;
  // Update displayName in Firebase Auth
  if (name) {
    await updateProfile(user, { displayName: name });
  }
  // create profile document in Firestore
  await createUserProfile({
    uid: user.uid,
    email: user.email,
    name: name ?? user.displayName ?? undefined,
    photoURL: user.photoURL ?? undefined,
  });
  return user;
}

export async function loginWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}
