// src/types/user.ts
export interface UserProfile {
  uid: string;
  name?: string;
  email?: string;
  createdAt?: string; // ISO string
  photoURL?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  goals?: string;
  // later: add fields for trackers, reminders, preferences
  // trackers?: { ... }
}
