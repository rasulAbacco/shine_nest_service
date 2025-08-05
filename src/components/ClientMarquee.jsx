import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitter, FaLinkedin, FaSpotify, FaPaypal } from 'react-icons/fa';
import { SiAdobeacrobatreader } from "react-icons/si";
import '../styles/homePage.css'; // custom CSS for marquee animation

const clients = [
    <FaApple size={60} color="#4300FF" />,
    <FaGoogle size={60} color="#4300FF" />,
    <FaAmazon size={60} color="#4300FF" />,
    <FaMicrosoft size={60} color="#4300FF" />,
    <FaFacebook size={60} color="#4300FF" />,
    <FaTwitter size={60} color="#4300FF" />,
    <FaLinkedin size={60} color="#4300FF" />,
    <FaSpotify size={60} color="#4300FF" />,
    <SiAdobeacrobatreader size={60} color="#4300FF" />,
    <FaPaypal size={60} color="#4300FF" />,
];

const ClientMarquee = () => {
    return (
        <section className="px-8 py-16 bg-white text-[#030637]">
            <h2 className="text-3xl font-bold text-center text-[#4300FF] mb-8">
                Over 500 clients have trusted us across India
            </h2>

            <div className="overflow-hidden relative space-y-6 ">
                {/* Top Row */}
                <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                    {clients.concat(clients).map((icon, i) => (
                        <div key={i} className="flex items-center justify-center w-32 logo-cards">
                            {icon}
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="flex space-x-12 animate-marquee-reverse whitespace-nowrap ">
                    {clients.concat(clients).map((icon, i) => (
                        <div key={i} className="flex items-center justify-center w-32 logo-cards">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientMarquee;
