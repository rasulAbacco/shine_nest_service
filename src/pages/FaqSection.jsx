import { useRef, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What types of cleaning services do you provide?",
    answer:
      "We offer a wide range of cleaning services including daily office cleaning, deep cleaning and sanitization, carpet and upholstery cleaning, restroom hygiene, post-construction cleaning, and disinfection/fogging services.",
  },
  {
    question: "Do you offer front desk and reception staffing?",
    answer:
      "Yes, we provide professional front desk services including front office management, helpdesk operations, visitor handling, and call/message handling.",
  },
  {
    question: "What does your pantry service include?",
    answer:
      "Our pantry services cover vending machine management, tea/coffee/snack service, and complete pantry management to ensure your office refreshment needs are met.",
  },
  {
    question: "Can you manage mailroom and courier operations?",
    answer:
      "Absolutely. We handle internal mail distribution, courier handling (inbound/outbound), document dispatch services, and even package tracking for seamless communication.",
  },
  {
    question: "How effective are your pest control services?",
    answer:
      "We provide routine pest control, rodent and termite management, mosquito and fly treatments, and fumigation services. All treatments are safe and carried out by licensed professionals.",
  },
  {
    question: "Do you offer gardening or landscaping support?",
    answer:
      "Yes, we offer complete landscaping and gardening services such as lawn maintenance, indoor plant care, garden design, and irrigation system management.",
  },
  {
    question: "Can you supply temporary or contract staffing?",
    answer:
      "We provide reliable contract staffing for office support roles including peons, office boys, stationery managers, filing support, and photocopy/printing assistants.",
  },
   {
    question: "Do you offer landscaping and gardening services?",
    answer:
      "Yes, we provide complete landscaping solutions including lawn maintenance, garden design, indoor plant care, and irrigation system management to enhance your facility’s aesthetics.",
  },
  {
    question: "What hygiene services do you offer for restrooms?",
    answer:
      "Our restroom hygiene services include deep cleaning, odor control, sanitization, regular consumable refills, and disinfection to maintain a clean and healthy environment.",
  },
  {
    question: "Is disinfection or fogging service available for offices?",
    answer:
      "Yes, we offer scheduled and on-demand disinfection and fogging services using government-approved chemicals to ensure a virus-free and sanitized workplace.",
  },
  {
    question: "How do you support document management tasks?",
    answer:
      "We provide trained support staff for filing, document sorting, photocopying, printing, and archiving to streamline your office's administrative operations.",
  },
  {
    question: "Can your services be customized for different facility sizes?",
    answer:
      "Absolutely. Our services are scalable and fully customizable to meet the specific needs of small offices, large corporate campuses, industrial units, and residential facilities.",
  },
];


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
        <Navbar/>
       <div
        className="bg-cover bg-center bg-no-repeat h-[300px] flex flex-col items-center justify-center text-white text-center px-4"
        style={{
            backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/40/29/88/360_F_340298830_J3bIrdYo4CEGF24HeBkhj7b1LuRrywI8.jpg')",
        }}>
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg text-blue-800">
            FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-1xl text-blue-800 px-6 py-4 bg-white/30 backdrop-blur rounded-lg shadow-md">
        Explore common queries about our Facility Management and Handiman Services. If your question isn’t listed, feel free to contact us directly.
        </p>

        </div>
        
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800"></h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={activeIndex === index}
                    onClick={() => toggleFAQ(index)}
                />
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className="">
     
        <div className="border border-blue-800 rounded-xl overflow-hidden transition-shadow hover:shadow-md w-180">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left px-6 py-5 bg-white"
        >
            <span className="text-gray-800 font-medium">{faq.question}</span>
            {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-blue-600 transition-transform duration-300" />
            ) : (
            <ChevronDownIcon className="h-5 w-5 text-blue-600 transition-transform duration-300" />
            )}
        </button>

        <div
            ref={contentRef}
            style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
            }}
            className="px-6 text-sm text-gray-600 overflow-hidden transition-all duration-500 ease-in-out"
        >
            <div className="py-4">{faq.answer}</div>
        </div>
        </div>
     
    </div>
  );
}
