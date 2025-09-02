"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUserProfile } from "@/hooks/useUserprofile";
import { updateUserProfile } from "@/lib/firebase/profile";
import { uploadProfileImage } from "@/lib/firebase/storage";
import Image from "next/image";

export default function ProfilePage() {
  const { profile, user } = useUserProfile();
  const [firstName, setFirstName] = useState(profile?.firstName ?? "");
  const [lastName, setLastName] = useState(profile?.lastName ?? "");
  const [email, setEmail] = useState(profile?.email ?? "");
  const [photoURL, setPhotoURL] = useState(profile?.photoURL ?? "");
  const [dob, setDob] = useState(profile?.dob ?? "");
  const [gender, setGender] = useState(profile?.gender ?? "");
  const [goals, setGoals] = useState(profile?.goals ?? "");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>(profile?.photoURL ?? "");
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setPhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a JPEG, JPG, or PNG image.");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setPhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a JPEG, JPG, or PNG image.");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = () => setDragActive(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (user?.uid) {
        await updateUserProfile(user.uid, {
          firstName,
          lastName,
          photoURL,
          dob,
          gender,
          goals,
        });
        router.push("/dashboard");
      }
    } catch (err: any) {
      alert("Error updating profile: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-teal-50 to-white px-4 py-10">
      <form
        onSubmit={handleSave}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full flex flex-col gap-6 border border-purple-100"
      >
        {/* Welcome */}
        <h1 className="text-3xl font-extrabold text-purple-900 text-center">
          Welcome,{" "}
          <span className="text-teal-600">
            {firstName || user?.email?.split("@")[0] || "Friend"}
          </span>
          👋
        </h1>
        <p className="text-center text-gray-600 text-sm -mt-2 mb-2">
          Let’s complete your profile so we can personalize your LENIWE journey 🌱
        </p>

        {/* Photo Upload */}
        <div
          className={`flex flex-col items-center gap-3 mb-4 border-2 ${
            dragActive ? "border-purple-400 bg-purple-50" : "border-dashed border-teal-200"
          } rounded-2xl p-6 transition`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {preview ? (
            <div className="relative">
              <Image
                src={preview}
                alt="Profile Preview"
                width={110}
                height={110}
                className="rounded-full border-4 border-teal-200 shadow-lg object-cover animate-pulse"
              />
            </div>
          ) : (
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-100 to-purple-100 flex items-center justify-center text-purple-400 text-4xl font-bold border-4 border-teal-200 shadow">
              ?
            </div>
          )}
          <button
            type="button"
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-full text-sm font-semibold shadow hover:opacity-90 transition"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? "Change Photo" : "Upload Photo"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handlePhotoChange}
            className="hidden"
          />
          <span className="text-xs text-gray-500">Drag & drop or click to upload</span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
          required
        />

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <textarea
          placeholder="Your LENIWE goals (optional)"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="px-4 py-3 rounded-xl border border-teal-300 focus:ring-2 focus:ring-teal-400"
          rows={3}
        />

        {/* Save Button */}
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white font-bold py-3 rounded-2xl shadow-lg transition"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}
