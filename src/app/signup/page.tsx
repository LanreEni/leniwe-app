"use client";
import { useState } from "react";
import { signUpWithEmail } from "@/lib/firebase/auth";    
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

   const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signUpWithEmail(email, password);
      // optionally update displayName in Firebase auth profile:
      if (name && user) {
        await updateProfile(user, { displayName: name });
      }
      router.push("/login"); // redirect after signup
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col gap-4 bg-gradient-to-br from-white via-purple-100 to-teal-100 rounded-2xl shadow-lg p-8 border border-purple-100"
    >
      <h2
        className="text-2xl font-extrabold text-purple-900 mb-2 text-center"
        style={{ fontFamily: "Asimovian, sans-serif" }}
      >
        Sign Up
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
        required
      />
      <button
        type="submit"
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl shadow transition {transition-duration-30ms;}"
      >
        Sign Up
      </button>
    </form>
  );
}
