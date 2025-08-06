import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Building2,
  Hospital,
  GraduationCap,
  Store,
  Factory,
  Hotel,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Testimonials
const testimonials = [
  {
    name: "Amit Sharma",
    role: "Operations Manager, TechSpark",
    text: "Shinenest transformed our office environment. Their team is professional, timely, and thorough. Highly recommended!",
  },
  {
    name: "Priya Desai",
    role: "HR Head, BrightEdge",
    text: "We've been using Shinenest for over 3 years now. Their attention to detail and customer service is top-notch.",
  },
  {
    name: "Rajeev Menon",
    role: "Facilities Director, GreenField Infra",
    text: "Reliable, efficient, and extremely professional. Our go-to team for all maintenance needs.",
  },
  {
    name: "Sneha Kapoor",
    role: "Admin Lead, UrbanSpace Co.",
    text: "They go above and beyond. Our premises are always spotless and inviting. Great value for money!",
  },
  {
    name: "Nikhil Verma",
    role: "CEO, CleanPro Solutions",
    text: "Their dedication and punctuality have helped us maintain a great work environment.",
  },
  {
    name: "Ritika Reddy",
    role: "Facility Manager, BrightNova",
    text: "Shinenest’s staff is courteous and efficient. Highly impressed by their professional attitude.",
  },
];

// Industries
const industryLeaders = [
  {
    icon: <Building2 size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Corporate Offices",
    subtitle: "Fortune 500 companies and growing businesses",
  },
  {
    icon: <Hospital size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Healthcare Facilities",
    subtitle: "Hospitals, clinics, and medical centers",
  },
  {
    icon: <GraduationCap size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Educational Institutions",
    subtitle: "Schools, universities, and training centers",
  },
  {
    icon: <Store size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Retail Spaces",
    subtitle: "Shopping centers, stores, and commercial outlets",
  },
  {
    icon: <Factory size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Manufacturing",
    subtitle: "Industrial facilities and production centers",
  },
  {
    icon: <Hotel size={40} className="text-[#4300FF] mb-4 mx-auto" />,
    title: "Hospitality",
    subtitle: "Hotels, restaurants, and entertainment venues",
  },
];

// Stats
const stats = [
  { label: "Clients Served", value: "150+" },
  { label: "Offices Maintained", value: "300+" },
  { label: "Avg. Satisfaction", value: "98%" },
  { label: "Years of Experience", value: "10+" },
];

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TestimonialsSection = () => {

  return (
<>
    <Navbar />
        <section className="bg-gradient-to-br from-[#F7F3FF] via-white to-[#F0E9FF] text-gray-800 py-16 px-6 md:px-12">
    {/* Testimonials */}

      <div className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-4 text-[#B13BFF]"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Real feedback from real customers who trust our services.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Star className="text-[#B13BFF] mb-3" />
                <h4 className="text-lg font-semibold text-[#4300FF]">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                <p className="text-gray-700 italic">“{t.text}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="max-w-6xl mx-auto my-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#B13BFF]">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We proudly serve clients across various industries
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryLeaders.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-[#030637]">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#B13BFF]">
          Our Track Record
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <CheckCircle className="mx-auto mb-2 text-[#030637]" />
              <h3 className="text-2xl font-bold text-[#4300FF]">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
</>
    
  );
};

export default TestimonialsSection;
