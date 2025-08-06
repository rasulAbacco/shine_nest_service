import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsAndPrivacy = () => {
    const [activeSection, setActiveSection] = useState('privacy');

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="text-black bg-white">
            <Navbar />
            {/* Banner Section with image */}
            <section
                className="relative w-full h-100 flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/banner.jpg')",
                }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white z-10 drop-shadow-lg">
                    Terms & Privacy
                </h1>
                <div className="absolute inset-0 animate-backgroundWave bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:40px_40px] opacity-10 z-0"></div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex space-x-1">
                        <button
                            onClick={() => scrollToSection('privacy-policy')}
                            className={`px-6 py-4 font-semibold border-b-2 transition-all duration-300 ${activeSection === 'privacy'
                                ? 'border-[#4400ff] text-[#4400ff]'
                                : 'border-transparent text-gray-600 hover:text-[#4400ff]'
                                }`}
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => scrollToSection('terms-conditions')}
                            className={`px-6 py-4 font-semibold border-b-2 transition-all duration-300 ${activeSection === 'terms'
                                ? 'border-[#4400ff] text-[#4400ff]'
                                : 'border-transparent text-gray-600 hover:text-[#4400ff]'
                                }`}
                        >
                            Terms & Conditions
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Privacy Policy Section */}
                <section id="privacy-policy" className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#4400ff] mb-4">Privacy Policy</h2>
                        <div className="w-24 h-1 bg-[#4400ff] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            This Privacy Policy applies to Shine Nest Services. By using our website, you agree to the practices described here.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Consent Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#4400ff] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-[#4400ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Consent</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                By using our website, you consent to our Privacy Policy and agree to its terms.
                            </p>
                        </div>

                        {/* Information Collection Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#4400ff] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-[#4400ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Collected Information</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We may collect personal information such as your name, email, phone number, and any information you provide while contacting us. Technical data like IP address, browser type, and operating system may also be collected.
                            </p>
                        </div>

                        {/* Cookies Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#4400ff] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-[#4400ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Cookies</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Cookies are small data files used to enhance user experience. You can reject cookies in your browser settings, but it may impact some site functionality.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-600">
                                    <strong>Cookie Duration:</strong> We use persistent cookies valid for 30 days, automatically deleted afterward.
                                </p>
                            </div>
                        </div>

                        {/* Information Usage Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#4400ff] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-[#4400ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">How We Use Your Information</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    'Understand and analyze website usage',
                                    'Improve and personalize the website',
                                    'Send you updates or responses',
                                    'Prevent fraud and misuse'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-[#4400ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Privacy Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Log Files</h4>
                            <p className="text-gray-600 text-sm">
                                We use log files to track visitor behavior, device info, browser type, and other non-identifiable data to improve services.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Advertising Partners</h4>
                            <p className="text-gray-600 text-sm">
                                Third-party advertisers may use cookies and tracking technologies to deliver personalized ads and measure effectiveness.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Do Not Sell My Info</h4>
                            <p className="text-gray-600 text-sm">
                                You may request us not to sell your personal information. We honor such requests in accordance with consumer protection laws.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Terms & Conditions Section */}
                <section id="terms-conditions" className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#4400ff] mb-4">Terms & Conditions</h2>
                        <div className="w-24 h-1 bg-[#4400ff] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These Terms and Conditions govern your use of the Shine Nest Services website.
                        </p>
                    </div>

                    {/* Terms Content Grid */}
                    <div className="space-y-8">
                        {/* Definitions & Website Use */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#4400ff] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Definitions
                                </h3>
                                <div className="space-y-3">
                                    <p className="text-gray-600">
                                        <strong className="text-gray-800">"Shine Nest Services"</strong> refers to the company.
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-800">"Website"</strong> refers to https://www.shinenestservices.com.
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-800">"User"</strong> means anyone accessing the website.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#4400ff] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Use of the Website
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#4400ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-gray-800">Eligibility:</strong>
                                            <p className="text-gray-600">Must be 18+ and legally able to agree to terms.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#4400ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-gray-800">License:</strong>
                                            <p className="text-gray-600">Limited use license for personal, non-commercial use only.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#4400ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-gray-800">User Account:</strong>
                                            <p className="text-gray-600">Responsible for maintaining account security and notifying us of any unauthorized use.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal Terms Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Intellectual Property",
                                    content: "All content is owned by Shine Nest Services or its licensors. No reproduction without written permission."
                                },
                                {
                                    title: "Disclaimer of Warranties",
                                    content: "We provide the website \"as is\". We don't guarantee accuracy, reliability, or uninterrupted access."
                                },
                                {
                                    title: "Limitation of Liability",
                                    content: "We are not liable for any damages resulting from your use of the website."
                                },
                                {
                                    title: "Indemnification",
                                    content: "You agree to indemnify Shine Nest Services against any claims arising from your use of the site or violation of these terms."
                                },
                                {
                                    title: "Modifications",
                                    content: "We may change these terms at any time. Continued use means you accept the updated terms."
                                },
                                {
                                    title: "Governing Law",
                                    content: "These terms are governed by the laws of your local jurisdiction. Disputes will be resolved in relevant local courts."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* Severability & Contact */}
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Severability</h3>
                                <p className="text-gray-600">
                                    If a part of these terms is unenforceable, the rest remains in effect.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#4400ff] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                <p className="mb-4 opacity-90">
                                    For questions or concerns, reach out to us:
                                </p>
                                <div className="space-y-2">
                                    <a
                                        href="mailto:support@example.com"
                                        className="flex items-center text-white hover:text-gray-200 transition-colors"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        support@example.com
                                    </a>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +91-1234567890
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndPrivacy;