import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from "../components/HeroCarousel"; // adjust path as needed
import "../styles/homePage.css"; // adjust path as needed
import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs'; // adjust path as needed
import TestimonialsSection from '../components/TestimonialsSection';
import ClientMarquee from '../components/ClientMarquee';
import Footer from '../components/Footer';
const HomePage = () => {
    return (
        <div className="bg-[#030637] text-white">
            <Navbar />
            {/* Hero Carousel */}
            <section className="h-screen flex items-center justify-center">
                <HeroCarousel />

            </section>

            {/* Industries We Serve + Vision + Mission */}
            <section className="px-8 py-16 bg-white text-[#030637] grid grid-cols-1 lg:grid-cols-3 gap-12">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h2 className="text-2xl font-semibold mb-4 text-[#4300FF]">Industries We Serve</h2>
                    <p>
                        We Serve wide range of Industries through our professionally Managed and Dedicated In-House Team.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                    <h2 className="text-2xl font-semibold mb-4 text-[#4300FF]">Our Vision</h2>
                    <p>
                        To be one of the Renowned Service Provider in Facility Management Service Industry by Achieving Continues
                        Customer Satisfaction, by Quality Service Delivery, and to be the Best Employer among the Facility
                        Management Industry.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.4 }}>
                    <h2 className="text-2xl font-semibold mb-4 text-[#4300FF]">Our Mission</h2>
                    <p>
                        To Provide Process Driven, Accountable, Quality, Automated and Improved Facility Management Services to
                        across the Industries, Achieve our employee's satisfaction by Periodical Reward & Recognition, Empowerment
                        and Human Touch.
                    </p>
                </motion.div>
            </section>

            {/* Services Offered & Commitments */}
            <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center home-services">
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='services-box'>
                    <h2 className="services-text"><span>Services</span> Offered</h2>
                    <h4>Shine Nest Service offers Integrated Facilities Management Services - Hard Services, Soft Services, Business Support Services, Production Support Services, Specialized Services and Security Services.</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Integrated Facility Management</li>
                        <li>Security & Surveillance</li>
                        <li>Housekeeping Services</li>
                        <li>Technical Maintenance</li>
                    </ul>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='home-girl' >
                   
                        <img src="/images/img1.png" alt="Commitments" className="rounded-lg shadow-lg" />
                  
                </motion.div>
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
