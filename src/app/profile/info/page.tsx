"use client";
import { useUserProfile } from "@/hooks/useUserprofile";
import Image from "next/image";

export default function ProfileInfoPage() {
  const { profile } = useUserProfile();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-teal-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">No Profile Found</h2>
          <p className="mb-4 text-gray-600">Profile information is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-purple-100 to-teal-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center gap-6">
        {profile.photoURL && (
          <Image
            src={profile.photoURL}
            alt="Profile Photo"
            width={96}
            height={96}
            className="rounded-full border-4 border-teal-200 shadow object-cover"
          />
        )}
        <h2 className="text-2xl font-bold text-purple-800 mb-2 text-center">{profile.firstName} {profile.lastName}</h2>
        <div className="w-full text-left space-y-2">
          <div><span className="font-semibold">Email:</span> {profile.email}</div>
          <div><span className="font-semibold">Date of Birth:</span> {profile.dob}</div>
          <div><span className="font-semibold">Gender:</span> {profile.gender}</div>
          {profile.goals && (
            <div><span className="font-semibold">Goals:</span> {profile.goals}</div>
          )}
        </div>
      </div>
    </div>
  );
}
