"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
<div className="text-center md:text-left mb-6">
  {/* Main Heading */}
  <h1 className="text-4xl md:text-6xl font-bold text-purple-900 leading-tight">
    Take Care of Your{" "}
    <span className="text-teal-800">Mind & Body</span>
  </h1>
</div>


          <p className="mt-6 text-lg text-gray-700">
            Track your mood, improve your sleep, and nurture your mental
            wellness with our easy-to-use app.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-2xl px-6 py-3 shadow-lg" onClick={() => window.location.href = '/setup'}>
              Get Started
            </button>
            <button className="border border-purple-700 text-purple-700 rounded-2xl px-6 py-3">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-0"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-120 h-120 mb-4">
              <Image
                src="/wellness.jpeg"
                alt="LENIWE"
                fill
                className="object-cover rounded-full shadow-lg border-4 border-purple-200"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-16 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-900">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Balance your mind and body with simple tools for logging,
          tracking, and improving your wellness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="p-6 rounded-2xl shadow-lg border border-teal-100 bg-teal-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-800">Mood Log</h3>
            <p className="mt-3 text-gray-600">
              Track your emotions daily and gain insights into your mental
              health patterns.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border border-purple-100 bg-purple-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-800">Sleep Log</h3>
            <p className="mt-3 text-gray-600">
              Improve your rest by monitoring sleep cycles and getting gentle
              reminders.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border border-teal-100 bg-teal-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-800">Meditation</h3>
            <p className="mt-3 text-gray-600">
              Access guided meditations to relax, focus, and recharge anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
