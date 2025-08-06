import { motion } from 'framer-motion';
import jswLogo from '/images/nike-logo.png'; // replace with your logo path

const testimonials = [
    {
        name: 'Hemant Sabat',
        title: 'Deputy General Manager',
        text: `We are happy with Elite Soft Services’ facility management for our steel plant. Their investment in equipment and focus on safety resulted in excellent hygiene and operational standards.`,
        logo: jswLogo,
    },
    {
        name: 'Ankita Sharma',
        title: 'Operations Head',
        text: `Elite Soft Services has provided us with reliable and professional cleaning solutions. Their attention to detail has exceeded our expectations.`,
        logo: jswLogo,
    },
    {
        name: 'Ravi Kumar',
        title: 'Facility Manager',
        text: `Working with Elite Soft Services has been seamless. Their proactive approach ensures our property is always well maintained.`,
        logo: jswLogo,
    },
    {
        name: 'Sunita Desai',
        title: 'Office Manager',
        text: `The team is highly skilled and very responsive. We’ve seen a significant improvement in our workplace hygiene since partnering with them.`,
        logo: jswLogo,
    },
    {
        name: 'Rajesh Iyer',
        title: 'Plant Supervisor',
        text: `Elite Soft Services’ on-site presence and support is unmatched. Their quality of work speaks for itself.`,
        logo: jswLogo,
    },
    {
        name: 'Priya Verma',
        title: 'Admin Head',
        text: `Very satisfied with the service quality. The team is friendly, professional, and always on time.`,
        logo: jswLogo,
    },
    {
        name: 'Amit Mehra',
        title: 'Operations Manager',
        text: `Their innovative cleaning solutions have helped us maintain a safe and hygienic environment.`,
        logo: jswLogo,
    },
    {
        name: 'Neha Kapoor',
        title: 'HR Manager',
        text: `Elite Soft Services understands our requirements well and consistently delivers beyond expectations.`,
        logo: jswLogo,
    },
    {
        name: 'Vikram Patel',
        title: 'Logistics Head',
        text: `Their professionalism and work ethics are truly commendable. Highly recommend their services.`,
        logo: jswLogo,
    },
    {
        name: 'Arun Gupta',
        title: 'Chief Engineer',
        text: `Reliable, efficient, and extremely professional. Elite Soft Services has been a trusted partner for us.`,
        logo: jswLogo,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="px-8 py-16 bg-white text-[#030637] overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-[#4300FF] mb-12">
                Hear it from our Clients
            </h2>

            <motion.div
                className="flex space-x-6"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                }}
            >
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        className="min-w-[300px] max-w-[300px] p-6 bg-white rounded-lg shadow-lg mx-2 flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-4xl text-[#DAA520] mb-2">“</div>
                            <h3 className="text-lg font-bold text-[#030637]">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                            <p className="text-sm text-[#030637] mb-4 leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={testimonial.logo} alt="Company Logo" className="h-8 object-contain mt-4" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TestimonialsSection;
