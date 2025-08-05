import React, { useState, useEffect } from "react";
import "../styles/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

// Modal component (reusable)
// const Modal = ({ isOpen, onClose, title, description }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
//         <h2 className="text-xl font-bold mb-2">{title}</h2>
//         <p className="text-gray-700">{description}</p>
//         <button
//           onClick={onClose}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

function ServicePage() {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

 const cards = [
  {
    title: "Vacuum Service",
    description: "Deep vacuum cleaning for carpets and sofas.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/385902315/AG/ZU/NV/12247396/vacuum-cleaning-service-500x500.jpg",
  },
  {
    title: "Kitchen Cleaning",
    description: "Sparkling countertops and sanitized surfaces.",
    img: "https://mccoymart.com/post/wp-content/uploads/2019/05/Kitchen-cupboard-cleaner.jpg",
  },
  {
    title: "Bathroom Sanitization",
    description: "Kills 99.9% of germs and removes stains.",
    img: "https://cpimg.tistatic.com/05837563/b/4/Bathroom-Cleaning-Services.jpg",
  },
  {
    title: "Window Wash",
    description: "Crystal-clear glass with streak-free shine.",
    img: "https://skbuildingservices.com/wp-content/uploads/2023/02/what-is-the-difference-between-window-washing-and-window-cleaning_-scaled-1.jpeg",
  },
  {
    title: "Office Deep Clean",
    description: "Maintain a professional and clean workspace.",
    img: "https://5.imimg.com/data5/TestImages/YC/VC/JQ/SELLER-55189093/office-cleaning-services.png",
  },
  {
    title: "Mattress Refresh",
    description: "Deodorize and disinfect your bedding.",
    img: "https://cleanshades.sg/wp-content/uploads/2024/02/Mattress_deep_cleaning.jpg",
  },
  {
    title: "Carpet Shampoo",
    description: "Revive colors and texture with deep cleaning.",
    img: "https://www.dalworth.com/images/tile-and-grout-cleaning/tile-floor-cleaning-service.jpg",
  },
  {
    title: "Sofa Cleaning",
    description: "Remove dust, stains, and pet hair.",
    img: "https://jamesbonddrycleaners.com/wp-content/uploads/2025/03/sofa-clening.jpg",
  },
  {
    title: "Appliance Detailing",
    description: "Spotless microwave, fridge, and oven.",
    img: "https://hellamaid.ca/wp-content/uploads/2023/08/2-1.jpg",
  },
  {
    title: "Floor Mopping",
    description: "Sparkling tiles with eco-friendly solutions.",
    img: "https://flooringsolutions.ph/wp-content/uploads/2024/05/Cleaning-Methods-for-Different-Types-of-Floor.jpg",
  },
  {
    title: "Curtain Cleaning",
    description: "Dust and allergen-free fabric cleaning.",
    img: "https://selvafacilitymanagement.com/wp-content/uploads/2023/09/Curtain-Cleaning.jpg",
  },
  {
    title: "Full Home Service",
    description: "Top-to-bottom premium cleaning experience.",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/1/YT/OB/YL/81310128/full-home-cleaning-services.jpg",
  },
];

  const handleCardClick = (card) => {
    setModalData(card);
  };

  const closeModal = () => setModalData(null);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="service-page text-white relative overflow-hidden min-h-screen flex items-center justify-between px-6 md:px-20 py-10">
        {/* Bubbles */}
        {[
          { top: "top-10", left: "left-10", size: "w-6 h-6" },
          {
            bottom: "bottom-20",
            left: "left-40",
            size: "w-4 h-4",
            delay: "delay-200",
          },
          {
            top: "top-1/3",
            right: "right-20",
            size: "w-5 h-5",
            delay: "delay-500",
          },
          {
            bottom: "bottom-10",
            right: "right-10",
            size: "w-8 h-8",
            delay: "delay-1000",
          },
          {
            top: "top-[18%]",
            left: "left-[30%]",
            size: "w-6 h-6",
            delay: "delay-700",
          },
          {
            bottom: "bottom-24",
            left: "left-[70%]",
            size: "w-4 h-4",
            delay: "delay-300",
          },
          {
            top: "top-1/3",
            right: "right-[50%]",
            size: "w-5 h-5",
            delay: "delay-500",
          },
          {
            bottom: "bottom-10",
            right: "right-[30%]",
            size: "w-8 h-8",
            delay: "delay-800",
          },
          {
            top: "top-[15%]",
            left: "left-[10%]",
            size: "w-4 h-4",
            delay: "delay-300",
          },
          {
            top: "top-[30%]",
            left: "left-[20%]",
            size: "w-5 h-5",
            delay: "delay-500",
          },
          {
            top: "top-[45%]",
            left: "left-[30%]",
            size: "w-6 h-6",
            delay: "delay-700",
          },
          {
            top: "top-[60%]",
            left: "left-[35%]",
            size: "w-3 h-3",
            delay: "delay-[850ms]",
          },
          {
            top: "top-[75%]",
            left: "left-[25%]",
            size: "w-5 h-5",
            delay: "delay-[1000ms]",
          },
          {
            bottom: "bottom-[10%]",
            left: "left-[15%]",
            size: "w-4 h-4",
            delay: "delay-[1200ms]",
          },
        ].map((bubble, i) => (
          <div
            key={i}
            className={`absolute ${bubble.top || ""} ${bubble.bottom || ""} ${
              bubble.left || ""
            } ${bubble.right || ""} ${
              bubble.size
            } bg-white opacity-10 rounded-full animate-ping ${
              bubble.delay || ""
            }`}
          />
        ))}

        {/* home TEXT */}
        <div className="max-w-xl z-10 ml-5">
          <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 w-fit animate-glow">
            Cleaning Services
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            So Fresh & So Clean...
            <br />
            We Promise!
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            We help you live in a space that feels clean, healthy, and cared
            for.
          </p>
          <button className="service-book text-white font-semibold py-2 px-5 rounded-full transition bg-blue-600 hover:bg-blue-700">
            Book Now →
          </button>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block z-10 px-5">
          <img
            src="https://www.movemystuff.com.au/wp-content/uploads/2024/01/cleaners.jpg"
            alt="Cleaning Man"
            className="rounded-full w-[500px] h-[500px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* FLIP CARDS SECTION */}

        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
            {/* Heading */}
            <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-9"
            data-aos="fade-up"
            >
            Our Services
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-25 gap-y-0">
                {cards.map((card, i) => (
                    <div
                    key={i}
                    className="container"
                    data-aos="fade-up"
                    onClick={() => setModalData(card)}
                    >
                    <div className="card">
                        {/* Front Side with background image */}
                        <div
                        className="front relative flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${card.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        >
                        {/* Overlay for text visibility */}
                        <div className="absolute inset-0 bg-opacity-40 rounded-t-2xl"></div>

                        {/* Text centered */}
                        <div className="relative z-10 px-4">
                            <p className="front-heading text-white">{card.title}</p>
                        </div>
                        </div>

                        {/* Back Side */}
                        <div className="back">
                        <p className="back-heading">{card.title}</p>
                        <p>{card.description}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

        </div>


 {/*  VALUE ADDED SERVICES */}


        <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-20">
            <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-800 mb-16 tracking-tight">
                Value Added Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Card */}
                {[
                {
                    title: "Transition",
                    desc: "STS will seamlessly handle the site transition process with full support, at no extra cost to the client.",
                },
                {
                    title: "AMC",
                    desc: "STS will manage all AMC activities, including coordination, vendor management, and reporting, ensuring cost-efficiency and uptime.",
                },
                {
                    title: "Reports",
                    desc: "Customized reports such as Daily Logs, Monthly Performance Reviews, and Exception Reports will be delivered regularly for full operational transparency.",
                },
                {
                    title: "Site Improvements",
                    desc: "Periodic inspections will be conducted, and actionable proposals will be submitted to enhance safety, cleanliness, and operational efficiency.",
                },
                {
                    title: "Procurement",
                    desc: "STS provides access to vetted suppliers for maintenance and consumables, passing on the cost benefits and ensuring timely availability.",
                },
                {
                    title: "Software",
                    desc: (
                    <>
                        Our in-house dashboard enables real-time tracking of MMR, DG sets, and electrical systems for large properties.
                        <br />
                        <span className="italic text-sm text-gray-500">
                        *Recommended for sites with 100+ manpower*
                        </span>
                    </>
                    ),
                },
                ].map(({ title, desc }, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                >
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
                ))}
            </div>
        </div>

        {/* footer */}

        <Footer/>


      {/* MODAL */}
      {/* <Modal
        isOpen={!!modalData}
        onClose={closeModal}
        title={modalData?.title}
        description={modalData?.description}
      /> */}
    </div>
  );
}

export default ServicePage;
