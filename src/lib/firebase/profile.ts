//// src/lib/firebase/profile.ts
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { UserProfile } from "@/types/user";

export async function createUserProfile(profile: {
  uid: string;
  name?: string | null;
  email?: string | null;
  photoURL?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  gender?: string | null;
  goals?: string | null;
}) {
  const ref = doc(db, "users", profile.uid);
  const payload: UserProfile = {
    uid: profile.uid,
  name: profile.name ?? "LENIWE Explorer",
    email: profile.email ?? "",
    photoURL: profile.photoURL ?? "",
    createdAt: new Date().toISOString(),
    firstName: profile.firstName ?? "",
    lastName: profile.lastName ?? "",
    dob: profile.dob ?? "",
    gender: profile.gender ?? "",
    goals: profile.goals ?? "",
  };
  await setDoc(ref, payload, { merge: true });
  return payload;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as UserProfile;
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
  const ref = doc(db, "users", uid);
  await setDoc(ref, data as any, { merge: true });
}
