// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
