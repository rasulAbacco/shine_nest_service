import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-[#4300FF] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    EmailAI Pro
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/" className="hover:text-[#B13BFF]">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#B13BFF]">About</Link></li>
                    <li><Link to="/services" className="hover:text-[#B13BFF]">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-[#B13BFF]">Contact</Link></li>
                    <li><Link to="/testimonials" className="hover:text-[#B13BFF]">Testimonials</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2 bg-[#4300FF]">
                    <li><Link to="/" className="block hover:text-[#B13BFF]">Home</Link></li>
                    <li><Link to="/about" className="block hover:text-[#B13BFF]">About</Link></li>
                    <li><Link to="/services" className="block hover:text-[#B13BFF]">Services</Link></li>
                    <li><Link to="/contact" className="block hover:text-[#B13BFF]">Contact</Link></li>
                    <li><Link to="/testimonials" className="block hover:text-[#B13BFF]">Testimonials</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;