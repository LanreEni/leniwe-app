// src/app/dashboard/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUserProfile } from "@/hooks/useUserprofile";
import { useRouter } from "next/navigation";


const Quote = ({ text }: { text: string }) => (
  <div className="text-sm text-purple-800/90 font-medium">{text}</div>
);

export default function Dashboard() {
  const streak = 7; // placeholder
  const avgSleep = 7.1; // placeholder
  const moodLabel = "Mostly Positive"; // placeholder
  const quote =
    "Small steps, daily consistency — that's true progress.";

    const { profile, loading, user } = useUserProfile();
    const router = useRouter();

    if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-purple-100 to-teal-100">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-purple-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <div className="text-lg font-semibold text-purple-800">Loading your dashboard...</div>
        </div>
      </div>
    );
    if (!user) {
      if (typeof window !== "undefined") {
        router.push("/setup");
      }
      return <div className="p-10">Redirecting to login...</div>;
    }

    // Show profile completion if firstName or lastName is missing
    if (!profile?.firstName || !profile?.lastName) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-teal-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Complete Your Profile</h2>
            <p className="mb-4 text-gray-600">Welcome! Please add your name to personalize your dashboard experience.</p>
            <a href="/profile" className="inline-block px-6 py-2 bg-purple-700 text-white rounded-full font-semibold shadow hover:bg-purple-800 transition">Go to Profile Setup</a>
          </div>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-teal-50 text-gray-800 antialiased">
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Top */}
        <section className="flex flex-col md:flex-row items-start gap-8">
          {/* Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-purple-800">
                  Welcome back, <span className="text-teal-600">{profile?.firstName ?? "Friend"}</span> 👋
                </h1>
                <p className="mt-2 text-gray-600">
                  Here's your Personalised Dashboard. <br /> Your daily snapshot! — quick actions below to help you keep the streak.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/checkin"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-full shadow hover:bg-purple-900 transition"
                  >
                    Log Check-in
                  </Link>
                  <Link
                    href="/sleep"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-teal-200 text-purple-800 rounded-full shadow-sm hover:shadow-md transition"
                  >
                    Sleep Log
                  </Link>
                  <Link
                    href="/mood"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full border border-teal-100 hover:shadow-md transition"
                  >
                    Mood Log
                  </Link>
                  <Link
                    href="/profile/info"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition"
                  >
                    View Profile
                  </Link>
                </div>
                {/* Show goals if available */}
                {profile?.goals && (
                  <div className="mt-4 text-sm text-teal-700 bg-teal-50 rounded px-3 py-2 shadow">
                    <span className="font-semibold">Your Goals:</span> {profile.goals}
                  </div>
                )}
              </div>
              {/* Profile Photo */}
              {profile?.photoURL && (
                <img
                  src={profile.photoURL}
                  alt="Profile Photo"
                  className="w-20 h-20 rounded-full border-4 border-teal-200 shadow object-cover"
                />
              )}
            </div>
            <div className="mt-6">
              <Quote text={quote} />
            </div>
          </motion.div>

          {/* Quick Summary Column */}
          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="w-full md:w-80 space-y-4"
          >
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">Avg Sleep (7 days)</div>
              <div className="mt-2 text-2xl font-semibold text-purple-800">{avgSleep} hrs</div>
              {/* small sparkline - placeholder */}
              <div className="mt-3">
                <svg className="w-full h-8" viewBox="0 0 100 24" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    points="0,16 10,12 20,14 30,10 40,8 50,12 60,6 70,10 80,8 90,12 100,9"
                    strokeOpacity="0.9"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">Mood Trend</div>
              <div className="mt-2 text-xl font-semibold text-teal-700">{moodLabel}</div>
              <div className="mt-3 text-xs text-gray-500">Based on latest check-ins</div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">Reminders</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Sleep Reminder</span>
                  <span className="text-xs text-teal-700 font-medium">10:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Mood Reminder</span>
                  <span className="text-xs text-teal-700 font-medium">2:00 PM</span>
                </li>
              </ul>
            </div>
          </motion.aside>
        </section>

        {/* Daily Check-ins section */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sleep Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-800">Sleep</h3>
                <p className="text-sm text-gray-500">Log bedtime & wake time</p>
              </div>
              <div className="text-teal-600 font-semibold">Last: 7.5h</div>
            </div>

            <div className="mt-4 flex gap-3">
              <Link
                href="/sleep"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-purple-800 text-white rounded-lg"
              >
                Log Sleep
              </Link>
              <Link
                href="/sleep/history"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg"
              >
                View
              </Link>
            </div>
          </motion.div>

          {/* Mood Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-800">Mood</h3>
                <p className="text-sm text-gray-500">Emoji + slider (0–10)</p>
              </div>
              <div className="text-purple-700 font-semibold">🙂 8/10</div>
            </div>

            <div className="mt-4">
              <Link
                href="/mood"
                className="block w-full text-center px-4 py-2 bg-teal-50 text-teal-700 rounded-lg"
              >
                Check In
              </Link>
            </div>
          </motion.div>

          {/* Journal Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-800">Journal</h3>
                <p className="text-sm text-gray-500">Quick notes & reflections</p>
              </div>
              <div className="text-xs text-gray-500">Today</div>
            </div>

            <div className="mt-4">
              <Link
                href="/journal"
                className="block w-full text-center px-4 py-2 bg-purple-700 text-white rounded-lg"
              >
                Write Entry
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Analytics & Insights */}
        <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-purple-800">Analytics & Insights</h3>
          <p className="text-sm text-gray-500 mt-1">Weekly summary — quick highlights and trends</p>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-teal-50">
              <div className="text-xs text-gray-600">Avg Sleep</div>
              <div className="text-2xl font-bold text-purple-800">7.1 hrs</div>
              <div className="text-sm text-gray-500 mt-2">You slept 30 min more on weekends</div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-100">
              <div className="text-xs text-gray-600">Mood Trend</div>
              <div className="text-2xl font-bold text-teal-700">Mostly Positive</div>
              <div className="text-sm text-gray-500 mt-2">Mood improved after 3 consecutive good sleeps</div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-100">
              <div className="text-xs text-gray-600">Consistency</div>
              <div className="text-2xl font-bold text-purple-800">5/7 days</div>
              <div className="text-sm text-gray-500 mt-2">Keep logging to build longer streaks</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
