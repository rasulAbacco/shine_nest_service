import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image.png'; // Adjust path as needed

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className="bg-white text-[#4300FF]"
            style={{
                boxShadow: '2px 2px 10px #4300FF', // Updated shadow with #4300FF
                zIndex: 50,
                position: 'sticky',
                top: 0
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-6 text-blue-900 font-medium text-sm md:text-base">
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'About', to: '/about' },
                        { label: 'Services', to: '/services' },
                        { label: 'Contact', to: '/contact' },
                        { label: 'Testimonials', to: '/testimonials' }
                    ].map(({ label, to }) => (
                        <li key={label}>
                            <Link
                                to={to}
                                className="relative hover:text-[#4300FF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#4300FF] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h16M4 16h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2 bg-[#4300FF] text-white">
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'About', to: '/about' },
                        { label: 'Services', to: '/services' },
                        { label: 'Contact', to: '/contact' },
                        { label: 'Testimonials', to: '/testimonials' }
                    ].map(({ label, to }) => (
                        <li key={label}>
                            <Link to={to} className="block hover:text-[#FFF]">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
