import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export async function uploadProfileImage(uid: string, file: File) {
  const imageRef = ref(storage, `profile-images/${uid}/${file.name}`);
  await uploadBytes(imageRef, file);
  return await getDownloadURL(imageRef);
}
