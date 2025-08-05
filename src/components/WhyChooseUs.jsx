import { motion } from 'framer-motion';
import { FaHeadset, FaStar, FaRunning, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from 'react-icons/md';

const whyChooseItems = [
    {
        icon: <FaHeadset size={50} color="#4400ff" />,
        title: 'On-Demand Online/On-Call Support',
        desc: 'Get instant support through our online channels or direct phone calls whenever you need assistance.',
    },
    {
        icon: <MdOutlineVerifiedUser size={50} color="#4400ff" />,
        title: 'Ensuring and Maintaining the Highest Quality',
        desc: 'Our team ensures the highest standards of quality and consistency across all our services.',
    },
    {
        icon: <FaRunning size={50} color="#4400ff" />,
        title: 'Our SME ensures On-site presence within 60 mins',
        desc: 'We guarantee on-site presence of our Subject Matter Expert within 60 minutes for critical needs.',
    },
    {
        icon: <FaPhoneAlt size={50} color="#4400ff" />,
        title: 'Direct Access to a Senior-Level Decision Maker',
        desc: 'You get direct communication with senior-level managers to resolve queries and make quick decisions.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-300 mb-12">
                Our client-focused expertise ensures your complete peace of mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
