"use client";
import { useState } from "react";
import { loginWithEmail } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 bg-gradient-to-br from-white via-purple-100 to-teal-100 rounded-2xl shadow-lg p-8 border border-purple-100"
    >
      <h2
        className="text-2xl font-extrabold text-purple-900 mb-2 text-center"
        style={{ fontFamily: "Asimovian, sans-serif" }}
      >
        Login
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
        className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded-xl shadow transition {transition-duration-20ms;}"
      >
        Log In
      </button>
    </form>
  );
}
