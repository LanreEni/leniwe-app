"use client";
import { useState } from "react";
import Login from "../login/page";
import Signup from "../signup/page";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Setup() {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<main className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-100 to-blue-50 flex flex-col items-center justify-center">
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="flex flex-col md:flex-row items-center justify-center gap-80 px-6 py-6 w-full"
			>
				{/* Left: Welcome & Image */}
				<div className="flex flex-col items-center md:items-start gap-6">
					<div className="relative w-40 h-40 md:w-70 md:h-70 mb-2">
						<Image
							src="/wellness.jpeg"
							  alt="LENIWE"
							fill
							className="object-cover rounded-full shadow-2xl border-4 border-purple-200"
							priority
						/>
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 text-center md:text-left leading-tight drop-shadow-lg">
						Welcome to <br />
						<span className="text-teal-600">LENIWE</span>
					</h1>
					<p className="mt-2 font-medium text-shadow-blue-950 text-gray-700 text-center md:text-left max-w-md">
						Log in or sign up to start your personalized LENIWE journey.
					</p>
				</div>

				{/* Right: Card */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="w-150 max-w-md rounded-3xl shadow-2xl p-8 backdrop-blur-md dark:bg-gray-100/90 border border-purple-50"
				>
					{/* Tabs */}
					<div className="flex mb-6 bg-purple-100 dark:bg-gray-600 rounded-xl overflow-hidden">
						<button
							onClick={() => setShowLogin(true)}
							className={`w-1/2 py-2 text-lg font-semibold transition ${
								showLogin
									? "bg-gradient-to-r from-teal-500 to-purple-500 text-white"
									: "text-gray-700 dark:text-gray-300"
							}`}
						>
							Log In
						</button>
						<button
							onClick={() => setShowLogin(false)}
							className={`w-1/2 py-2 text-lg font-semibold transition ${
								!showLogin
									? "bg-gradient-to-r from-teal-500 to-purple-500 text-white"
									: "text-gray-700 dark:text-gray-300"
							}`}
						>
							Sign Up
						</button>
					</div>

					{/* Form */}
					<motion.div
						key={showLogin ? "login" : "signup"}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.4 }}
					>
						{showLogin ? <Login /> : <Signup />}
					</motion.div>
				</motion.div>
			</motion.section>

		</main>
	);
}
