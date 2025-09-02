"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"], weight: ["700"], variable: "--font-geist" });

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#features", label: "About" },
    { href: "#features", label: "Feature" },
    { href: "/setup", label: "Login/Signup" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from bg-teal-50 font-semibold text-purple-950 shadow-lg fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-10 gap-4">
{/* Brand Logo Only */}
<Link href="/" className="flex items-center">
  <span className="relative w-40 h-10"> 
    {/* Adjust w/h so it takes up about the same space the text did */}
    <Image 
      src="/ligs1.png" 
      alt="LENIWE Logo" 
      fill 
      className="object-contain" 
      priority 
    />
  </span>
</Link>


        {/* Navigation */}
        <nav className="flex gap-8 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`relative group transition ${
                pathname === item.href ? "font-semibold text-teal-300" : ""
              }`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-300 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
