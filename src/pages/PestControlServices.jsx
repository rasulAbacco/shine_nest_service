import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const services = [
  {
    title: "Pantry Services",
    description:
      "We offer comprehensive pantry management including vending machine support, tea/coffee/snack arrangements, and hygienic pantry upkeep tailored to workforce needs.",
    points: [
      "Vending machine services",
      "Tea/coffee/snacks services",
      "Pantry management",
    ],
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/ZN/PT/GW/9020801/img-20220412-wa0013-jpg.jpg",
  },
  {
    title: "Mailroom & Courier Services",
    description:
      "Efficient internal and external mail distribution, courier handling, and package tracking solutions to streamline your corporate communication.",
    points: [
      "Internal mail distribution",
      "Courier handling (inbound/outbound)",
      "Package tracking",
      "Document dispatch services",
    ],
    image: "https://www.zippia.com/_next/image/?url=https%3A%2F%2Fmedia.zippia.com%2Fjob-title%2Fimages%2Fmail-clerk%2Fmail-clerk-2.webp&w=3840&q=75",
  },
  {
    title: "Pest Control Services",
    description:
      "Protect your facilities with expert pest control solutions including rodent and termite treatment, fumigation, and mosquito control.",
    points: [
      "Routine pest control",
      "Rodent management",
      "Termite control",
      "Mosquito/fly treatments",
      "Fumigation services",
    ],
    image: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1669909673247_zopt3_1040x500.jpg",
  },
  {
    title: "Landscaping & Gardening",
    description:
      "Beautiful, maintained landscapes with expert lawn care, garden design, and indoor plant management — boosting workplace appeal and well-being.",
    points: [
      "Lawn maintenance",
      "Garden design and upkeep",
      "Indoor plant care",
      "Irrigation system management",
    ],
    image: "https://st4.depositphotos.com/1203257/39794/i/450/depositphotos_397944894-stock-photo-middle-age-male-gardener-work.jpg",
  },
];

const SoftServiceDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
        <Navbar/>

         <div className="relative bg-gradient-to-b from-blue-900 via-blue-700 to-blue-600 text-white min-h-[60vh] flex items-center justify-center px-6 md:px-24 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-16 right-28 w-40 h-40 bg-gradient-to-br from-red-500 to-pink-400 rounded-full shadow-xl opacity-90 blur-2xl z-0"></div>
      <div className="absolute top-32 right-12 w-20 h-20 bg-gradient-to-br from-pink-300 to-red-300 rounded-full blur-xl opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Services</h1>
        <p className="text-lg md:text-xl text-white/80">
          Safe, certified, and hassle-free pest control solutions across Bangalore.
        </p>
      </div>
    </div>

        <div className="bg-white text-gray-800 py-16 px-6 md:px-20 space-y-20">
        {services.map((service, idx) => (
            <div
            key={idx}
            className={`flex flex-col md:flex-row items-center ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10`}
            data-aos="fade-up"
            >
            {/* Image */}
            <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg"
            />

            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>
        <Footer/>
    </div>
  );
};

export default SoftServiceDetails;
