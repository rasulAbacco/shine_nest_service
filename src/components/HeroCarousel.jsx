import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/homePage.css"; // adjust path as needed

const slides = [
    {
        id: 1,
        text: "Elite Soft Services – Professional Cleaning Solutions",
        description: "Experience the difference with our premium cleaning services designed to meet the unique needs of both residential and commercial spaces. We utilize modern equipment, eco-friendly products, and a skilled workforce to ensure a spotless environment every time.",
        image: "/images/slide1.jpg",
    },
    {
        id: 2,
        text: "We Specialize in Commercial & Residential Cleaning",
        description: "Whether it's an office, apartment, retail space, or industrial facility, our cleaning experts deliver top-tier results with precision and care. We focus on hygiene, attention to detail, and safety to provide a fresh and healthy space you can be proud of.",
        image: "/images/slide2.jpg",
    },
    {
        id: 3,
        text: "Trained Staff | Modern Equipment | Affordable Prices",
        description: "Our team is extensively trained, background-verified, and equipped with the latest tools to handle every cleaning challenge efficiently. Enjoy high-quality service without stretching your budget, backed by transparent pricing and unmatched value.",
        image: "/images/slide3.jpg",
    },
    {
        id: 4,
        text: "Committed to Quality, Reliability & Customer Satisfaction",
        description: "At Elite Soft Services, your satisfaction is our mission. We strive to exceed expectations with dependable service, punctual schedules, and exceptional cleaning outcomes. Let us take care of the mess, so you can focus on what matters most.",
        image: "/images/slide4.jpg",
    },
];



const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center text-white px-4 text-center">
            {/* Background image layer with blur */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center blur-[3px] scale-105 transition-all duration-1000"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                }}
            />
            <div className="absolute inset-0 bg-gray-900/30"></div>
            {/* Optional dark overlay for contrast */}
            <div className="absolute inset-0 z-0" />

            {/* Text content */}
            <div className="relative z-10 max-w-4xl w-full">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`title-${slides[currentSlide].id}`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-center hero-text"
                    >
                        {slides[currentSlide].text}
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`desc-${slides[currentSlide].id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-4 text-center text-base md:text-lg hero-description"
                    >
                        {slides[currentSlide].description}
                    </motion.p>
                </AnimatePresence>
            </div>

        </section>
    );
};

export default HeroCarousel;
