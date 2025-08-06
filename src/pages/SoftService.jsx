import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SoftService = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cover bg-center bg-[url('https://phoenixcorpme.com/wp-content/uploads/2023/07/What-are-Soft-Services-in-Facilities-Management.jpeg')] text-[#4300FF] py-24 px-6 md:px-20">
        <div className="max-w-4xl">
            <h1 className="soft-heading">Soft Service Management</h1>
            <p className="soft-subtext">
            Expert facility solutions to maintain cleanliness, hygiene, and hospitality across all spaces.
            </p>

          {/* <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
            Get a Free Consultation
          </button> */}
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/2/385902315/AG/ZU/NV/12247396/vacuum-cleaning-service-500x500.jpg"
            alt="Soft Service"
            className="w-full rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Facility Services That Define Professionalism
            </h2>
            <p className="text-gray-700 text-lg">
              From pristine workspaces to welcoming front desks, our Soft Services ensure that every aspect of your environment reflects excellence. We tailor our cleaning, reception, and support services to suit your business needs and maintain top-tier hygiene and efficiency.
            </p>
          </div>
        </div>
      </section>

{/* Service Descriptions */}
<section className="py-20 px-6 md:px-24 bg-gradient-to-br from-gray-50 to-white text-gray-900 ">
  <div className="max-w-6xl mx-auto space-y-20">

    {/* Cleaning Services */}
    <div className="bg-white shadow-md rounded-2xl p-8 transition hover:shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4">
        Cleaning Services
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Our Cleaning Services are designed to provide a spotless and hygienic environment in every corner of your facility.
      </p>
      <div>

        <h4 className="font-bold pb-2">Daily Office Cleaning</h4>
        <p className="text-gray-700 pb-5">
          Regular cleaning of desks, floors, and common areas to maintain a tidy workplace. 
          Ensures a fresh, organized, and hygienic environment every day. 
          Ideal for boosting employee comfort and productivity.
        </p>

        <h4 className="font-bold pb-2">Deep Cleaning & Sanitization</h4>
        <p className="text-gray-700 pb-5">
          Thorough cleaning of every nook and corner, beyond surface-level. 
          Sanitizes high-touch areas to eliminate germs and bacteria. 
          Perfect for periodic hygiene maintenance in all spaces.
        </p>

        <h4 className="font-bold pb-2">Carpet & Upholstery Cleaning</h4>
        <p className="text-gray-700 pb-5">
          Specialized cleaning of carpets, sofas, and office furniture. 
          Removes stains, dust, and allergens for a fresh look and feel. 
          Extends the lifespan and hygiene of soft furnishings.
        </p>

        <h4 className="font-bold pb-2">Window/Glass Cleaning (Internal)</h4>
        <p className="text-gray-700 pb-5">
          Smudge-free, streakless cleaning of internal windows and glass partitions. 
          Enhances natural light and maintains a professional appearance. 
          Uses non-abrasive solutions to protect delicate surfaces.
        </p>

        <h4 className="font-bold pb-2">Restroom Hygiene Services</h4>
        <p className="text-gray-700 pb-5">
          Regular sanitation of restrooms including toilets, urinals, and sinks. 
          Restocking of tissues, soaps, and air fresheners for user comfort. 
          Ensures a clean, odor-free, and germ-free restroom experience.
        </p>

        <h4 className="font-bold pb-2">Post-Construction Cleaning</h4>
        <p className="text-gray-700 pb-5">
          Cleanup after renovation or construction work, removing dust and debris. 
          Deep cleaning of floors, windows, fixtures, and walls. 
          Makes the space ready for occupation or use.
        </p>

        <h4 className="font-bold pb-2">Disinfection/Fogging Services</h4>
        <p className="text-gray-700 pb-5">
          Comprehensive sanitization using fogging or misting technology. 
          Targets both surface-level and airborne pathogens. 
          Ideal for preventing the spread of viruses and bacteria in large areas.
        </p>

      </div>
    </div>


    {/* Reception & Front Desk Services */}
    <div className="bg-white shadow-md rounded-2xl p-8 transition hover:shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4">
        Reception & Front Desk Services
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        We deliver professional front-desk support that enhances your brand’s image and ensures smooth visitor and communication management.
      </p>
      <div>
        <h4 className="font-bold pb-2">Front Office Management</h4>
        <p className="text-gray-700 pb-5">
          Trained staff to greet visitors, manage schedules, and ensure front-desk efficiency. 
          Acts as the first point of contact representing your company professionally. 
          Maintains smooth entry processes and visitor logs.
        </p>

        <h4 className="font-bold pb-2">Helpdesk Operations</h4>
        <p className="text-gray-700 pb-5">
          Central point for employee and visitor queries, support, and information. 
          Manages service requests, escalations, and coordination with internal teams. 
          Enhances workplace responsiveness and issue resolution.
        </p>

        <h4 className="font-bold pb-2">Visitor Handling</h4>
        <p className="text-gray-700 pb-5">
          Welcoming and guiding visitors while maintaining security and etiquette. 
          Includes ID verification, issuing passes, and alerting concerned personnel. 
          Ensures professional and courteous guest management.
        </p>

        <h4 className="font-bold pb-2">Call Handling & Messaging</h4>
        <p className="text-gray-700 pb-5">
          Answering, screening, and forwarding incoming calls with prompt courtesy. 
          Manages voicemails, messages, and follow-up logs as per company protocol. 
          Reduces missed calls and improves customer communication flow.
        </p>
      </div>
    </div>

  </div>
</section>



      {/* Footer */}
       
   <Footer/>


    </>
  );
};

export default SoftService;
