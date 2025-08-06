import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Office Support Services",
    description:
      "Efficient, reliable office assistance for smooth day-to-day operations, including document handling, printing, and essential support staff.",
    points: [
      "Office boy/peon services",
      "Stationery management",
      "Filing/document support",
      "Photocopying/printing assistance",
    ],
    image:
      "https://www.iqor.com/wp-content/uploads/2021/06/shutterstock_1771621901.jpg", // replace with better image if needed
  },
  // You can add more contract staffing categories here if required
];

const ContractStaffingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
            <div
            className="relative from-blue-900 via-blue-700 to-blue-600 text-white min-h-[60vh] flex items-center justify-center px-6 md:px-24 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url('https://indiaemployerforum.org/wp-content/uploads/2023/01/Contract-Staffing-India-Employer-Forum.png')`,
            }}
            >        {/* Decorative Circles */}
        {/* <div className="absolute top-16 right-28 w-40 h-40 bg-gradient-to-br from-red-500 to-pink-400 rounded-full shadow-xl opacity-90 blur-2xl z-0"></div>
        <div className="absolute top-32 right-12 w-20 h-20 bg-gradient-to-br from-pink-300 to-red-300 rounded-full blur-xl opacity-70 z-0"></div> */}

        {/* Heading Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contract Staffing Services
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Professional support staff tailored to your business needs — reliable and efficient.
          </p>
        </div>
      </div>

      {/* Service Details */}
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

            {/* Text Content */}
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

      <Footer />
    </div>
  );
};

export default ContractStaffingServices;

 