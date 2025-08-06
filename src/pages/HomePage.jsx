import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from "../components/HeroCarousel"; // adjust path as needed
import "../styles/homePage.css"; // adjust path as needed
import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs'; // adjust path as needed
import TestimonialsSection from '../components/TestimonialsSection';
import ClientMarquee from '../components/ClientMarquee';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
const HomePage = () => {
    return (
        <div className="bg-[#030637] text-white">
            <Navbar />
            {/* Hero Carousel */}
            <section className="h-screen flex items-center justify-center">
                <HeroCarousel />

            </section>

            {/* Industries We Serve + Vision + Mission */}
            <section className="px-8 py-16 bg-white text-[#030637] grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="border-l-4 border-[#4400FF] bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-3 text-[#4400FF]">Industries We Serve</h2>
                    <p>
                        We serve a wide range of industries through our professionally managed and dedicated in-house team that ensures efficiency, reliability, and quality.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="border-l-4 border-[#4400FF] bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-3 text-[#4400FF]">Our Vision</h2>
                    <p>
                        To become a renowned provider in the facility management industry by consistently delivering exceptional services and being the most preferred employer.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    className="border-l-4 border-[#4400FF] bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-3 text-[#4400FF]">Our Mission</h2>
                    <p>
                        To deliver accountable, process-driven, and automated facility management services, while fostering employee satisfaction through recognition, empowerment, and human connection.
                    </p>
                </motion.div>
            </section>


            {/* Services Offered & Commitments */}
            <section className="">
                <ServicesSection />
            </section>

            {/* Trusted by Clients */}
            <section className="px-8 py-16 bg-white text-[#030637]">
                <ClientMarquee />
            </section>

            {/* Why Choose Us */}
            <section className="px-8 py-16 text-white bg-[#4300FF]">
                <WhyChooseUs />
            </section>

            {/* Testimonials */}
            <section className="px-8 py-16 bg-white text-[#030637]">
                <TestimonialsSection />
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
