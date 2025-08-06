import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image.png'; // Adjust the path based on your file structure


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-[white] text-[#4300FF] shadow-md">
            <div className="max-w-7xl mx-auto  px-4 py-3 flex items-center justify-between">
                {/* Left aligned icons here */}

                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />

                </Link>
                {/* You can add your navigation menu or other components here */}



                {/* Desktop Nav Links */}
                <ul className="flex space-x-6 text-blue-900 font-medium text-sm md:text-base">
                    <li>
                        <Link
                            to="/"
                            className="relative hover:text-[#B13BFF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B13BFF] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="relative hover:text-[#B13BFF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B13BFF] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="relative hover:text-[#B13BFF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B13BFF] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="relative hover:text-[#B13BFF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B13BFF] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/testimonials"
                            className="relative hover:text-[#B13BFF] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B13BFF] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Testimonials
                        </Link>
                    </li>
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
            {
                isOpen && (
                    <ul className="md:hidden px-4 pb-4 space-y-2 bg-[#4300FF]">
                        <li><Link to="/" className="block hover:text-[#B13BFF]">Home</Link></li>
                        <li><Link to="/about" className="block hover:text-[#B13BFF]">About</Link></li>
                        <li><Link to="/services" className="block hover:text-[#B13BFF]">Services</Link></li>
                        <li><Link to="/contact" className="block hover:text-[#B13BFF]">Contact</Link></li>
                        <li><Link to="/testimonials" className="block hover:text-[#B13BFF]">Testimonials</Link></li>
                    </ul>
                )
            }
        </nav >
    );
};

export default Navbar;