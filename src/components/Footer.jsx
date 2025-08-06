import React from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react"; // Install: npm install lucide-react

const Footer = () => {
  return (
    <footer className="bg-[#030637] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Menu */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Shine Nest Services</h1>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="#">Company</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">News</Link></li>
            <li><Link to="#">Recent Updates</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="#">Development Tutorials</Link></li>
            <li><Link to="#">Documentation</Link></li>
            <li><Link to="#">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/contact">Customer Support</Link></li>
            <li><Link to="#"> Updates</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Social Icons */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="#"><Twitter className="hover:text-white" size={20} /></a>
          <a href="#"><Facebook className="hover:text-white" size={20} /></a>
          <a href="#"><Instagram className="hover:text-white" size={20} /></a>
          <a href="#"><Github className="hover:text-white" size={20} /></a>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>

        {/* Copyright */}
        <div>
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
