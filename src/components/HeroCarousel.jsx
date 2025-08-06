import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/homePage.css"; // Adjust path if needed

const slides = [
    {
        id: 1,
        text: "Elite Soft Services – Professional Cleaning Solutions",
        description:
            "Experience the difference with our premium cleaning services designed to meet the unique needs of both residential and commercial spaces.",
        image: "/images/slide1.jpg",
    },
    {
        id: 2,
        text: "We Specialize in Commercial & Residential Cleaning",
        description:
            "Whether it's an office, apartment, retail space, or industrial facility, our cleaning experts deliver top-tier results with precision and care.",
        image: "/images/slide2.jpg",
    },
    {
        id: 3,
        text: "Trained Staff | Modern Equipment | Affordable Prices",
        description:
            "Our team is trained, background-verified, and equipped with the latest tools. Enjoy high-quality service backed by unmatched value.",
        image: "/images/slide3.jpg",
    },
    {
        id: 4,
        text: "Committed to Quality, Reliability & Customer Satisfaction",
        description:
            "We strive to exceed expectations with dependable service, punctual schedules, and exceptional cleaning outcomes.",
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

    const highlightWords = [
        "Elite",
        "Cleaning",
        "Solutions",
        "Affordable",
        "Satisfaction",
        "Trained",
        "Committed",
    ];

    return (
        <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center px-4 text-center">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 transition-all duration-1000"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            {/* Overlay */}

            {/* Text Content */}
            <div className="relative z-10 max-w-4xl w-full">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`title-${slides[currentSlide].id}`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-center px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl text-white shadow-md"
                    >
                        {slides[currentSlide].text.split(" ").map((word, index) => {
                            const cleanWord = word.replace(/[^a-zA-Z]/g, "");
                            return (
                                <span
                                    key={index}
                                    className={
                                        highlightWords.includes(cleanWord)
                                            ? "text-[#4400FF] font-extrabold"
                                            : ""
                                    }
                                >
                                    {word + " "}
                                </span>
                            );
                        })}
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`desc-${slides[currentSlide].id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-4 text-center text-base md:text-lg font-medium text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-md"
                    >
                        {slides[currentSlide].description}
                    </motion.p>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default HeroCarousel;
