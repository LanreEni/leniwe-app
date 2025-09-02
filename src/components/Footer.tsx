"use client";

export default function Footer() {
  return (
    <footer className="bg-teal-50 text-gray-800 border-t border-purple-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700">Leniwe</h2>
          <p className="mt-3 text-sm text-gray-600">
            Your companion for mental and physical well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
            <li><a href="#" className="hover:text-purple-500">Services</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: support@leniwe.com</li>
            <li>Phone: +234 800 123 4567</li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">Follow Us</h3>
          <div className="mt-3 flex gap-4 text-sm">
            <a href="#" className="hover:text-purple-500">Facebook</a>
            <a href="#" className="hover:text-purple-500">Twitter</a>
            <a href="#" className="hover:text-purple-500">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-purple-200 pt-4 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Leniwe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
