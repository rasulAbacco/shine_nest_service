import React, { useState, useEffect } from "react";
import "../styles/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



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
    description: "Professional-grade vacuuming to remove embedded dust, dirt, and allergens from carpets, sofas, and upholstery, leaving your interiors fresh and hygienic.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/385902315/AG/ZU/NV/12247396/vacuum-cleaning-service-500x500.jpg",
    route: "/sofrservices",
  },
  {
    title: "Kitchen Cleaning",
    description: "Comprehensive kitchen cleaning with degreasing, sanitizing countertops, cabinets, chimney hoods, sinks, and tiles for a sparkling, food-safe environment.",
    img: "https://mccoymart.com/post/wp-content/uploads/2019/05/Kitchen-cupboard-cleaner.jpg",
     route: "/sofrservices",
  },
  {
    title: "Bathroom Sanitization",
    description: "Thorough disinfection and stain removal from tiles, toilets, sinks, mirrors, and fixtures using hospital-grade solutions that eliminate 99.9% of bacteria and viruses.",
    img: "https://cpimg.tistatic.com/05837563/b/4/Bathroom-Cleaning-Services.jpg",
     route: "/sofrservices",
  },
  {
    title: "Window Wash",
    description: "Exterior and interior glass cleaning with streak-free solutions and squeegee techniques to ensure a crystal-clear, professional finish every time.",
    img: "https://skbuildingservices.com/wp-content/uploads/2023/02/what-is-the-difference-between-window-washing-and-window-cleaning_-scaled-1.jpeg",
    route:"/pestcontrol",
  },
  {
    title: "Office Deep Clean",
    description: "Detailed office cleaning including desks, electronics, flooring, partitions, and common areas to maintain a healthy, productive, and professional workplace.",
    img: "https://5.imimg.com/data5/TestImages/YC/VC/JQ/SELLER-55189093/office-cleaning-services.png",
     route:"/pestcontrol",
  },
  {
    title: "Mattress Refresh",
    description: "Deep cleaning and steam sanitization of mattresses to remove odors, bacteria, dust mites, and allergens, ensuring a restful and hygienic sleep experience.",
    img: "https://cleanshades.sg/wp-content/uploads/2024/02/Mattress_deep_cleaning.jpg",
     route:"/pestcontrol",
  },
  {
    title: "Carpet Shampoo",
    description: "Hot water extraction and shampooing of carpets to restore color, remove deep-set stains, and eliminate odors for a revitalized and clean appearance.",
    img: "https://www.dalworth.com/images/tile-and-grout-cleaning/tile-floor-cleaning-service.jpg",
     route:"/pestcontrol",
  },
  {
    title: "Sofa Cleaning",
    description: "Gentle yet effective upholstery cleaning using industry-grade equipment to remove dirt, stains, and allergens, extending the life of your sofas and chairs.",
    img: "https://jamesbonddrycleaners.com/wp-content/uploads/2025/03/sofa-clening.jpg",
     route:"/pestcontrol",
  },
  {
    title: "Appliance Detailing",
    description: "Detailed interior and exterior cleaning of kitchen appliances including microwave, refrigerator, oven, and chimney to ensure hygiene and peak performance.",
    img: "https://hellamaid.ca/wp-content/uploads/2023/08/2-1.jpg",
     route:"/pestcontrol",
  },
  {
    title: "Floor Mopping",
    description: "Expert mopping services using eco-friendly and non-toxic solutions to clean and shine tiled, wooden, and marble floors without leaving residues or streaks.",
    img: "https://flooringsolutions.ph/wp-content/uploads/2024/05/Cleaning-Methods-for-Different-Types-of-Floor.jpg",
     route:"/contract",
  },
  {
    title: "Curtain Cleaning",
    description: "Steam and dry cleaning of curtains and drapes to remove dust, mold, and allergens while preserving fabric quality and enhancing indoor air quality.",
    img: "https://selvafacilitymanagement.com/wp-content/uploads/2023/09/Curtain-Cleaning.jpg",
    route:"/contract",
  },
  {
    title: "Full Home Service",
    description: "Comprehensive whole-house deep cleaning including bathrooms, kitchens, bedrooms, furniture, and flooring for a fresh, sanitized, and inviting living space.",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/1/YT/OB/YL/81310128/full-home-cleaning-services.jpg",
    route:"/contract",
  },
];


  const handleCardClick = (card) => {
    setModalData(card);
  };

  const closeModal = () => setModalData(null);

  const cardGroups = [
    {
      title: "Soft Service Management",
      cards: cards.slice(0, 3),
    },
    {
      title: "Pest Control Services",
      cards: cards.slice(3, 9),
    },
    {
      title: "Contract Staffing Services",
      cards: cards.slice(9, 12),
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <Navbar />
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
          className="text-6xl md:text-5xl font-bold text-gray-800 mb-5 mt-9"
          data-aos="fade-up"
        >
          Our Services
        </h2>
          <p className="font-semibold text-center" data-aos="fade-up">
            Transform your workplace with our comprehensive facility management and staffing solutions ensuring cleanliness, comfort, efficiency, and seamless daily operations.
          </p>

        {/* Cards Grid */}
        {cardGroups.map((group, index) => (
          <div key={index} className="group-title w-full ">
            <h3
              className="text-2xl font-bold text-gray-800 mt-5"
              data-aos="fade-up"
            >
              {group.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
              {group.cards.map((card, i) => (
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
                      }}>
                      {/* Overlay for text visibility */}
                      <div className="absolute inset-0 bg-opacity-40 "></div>
                        <div className="relative z-10 px-4">
                        <p className="front-heading bg-white/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-lg font-semibold">
                          {card.title}
                        </p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="back">
                      <p className="back-heading " style={{color:"blue"}}>{card.title}</p>
                      <p>{card.description}</p>
                      <Link
                        to={card.route}
                        className="mt-2 px-4 py-2 bg-[blue] rounded-lg hover:bg-blue-700 transition no-underline"
                        style={{color:"white", textDecoration:"none"}}
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
                  Our in-house dashboard enables real-time tracking of MMR, DG
                  sets, and electrical systems for large properties.
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

      <Footer />

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
