import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const serviceCategories = [
    {
        title: 'Cleaning Services',
        items: [
            'Daily office cleaning',
            'Deep cleaning & sanitization',
            'Carpet & upholstery cleaning',
            'Window/glass cleaning (internal)',
            'Restroom hygiene services',
            'Post-construction cleaning',
            'Disinfection/fogging services',
        ],
    },
    {
        title: 'Reception & Front Desk Services',
        items: [
            'Front office management',
            'Helpdesk operations',
            'Visitor handling',
            'Call/message management',
            'Guest hospitality',
        ],
    },
    {
        title: 'Pantry Services',
        items: [
            'Vending machine services',
            'Tea/coffee/snacks services',
            'Pantry management',
        ],
    },
    {
        title: 'Mailroom & Courier Services',
        items: [
            'Internal mail distribution',
            'Courier handling (inbound/outbound)',
            'Package tracking',
            'Document dispatch services',
        ],
    },
    {
        title: 'Pest Control Services',
        items: [
            'Routine pest control',
            'Rodent management',
            'Termite control',
            'Mosquito/fly treatments',
            'Fumigation services',
        ],
    },
    {
        title: 'Landscaping & Gardening',
        items: [
            'Lawn maintenance',
            'Garden design and upkeep',
            'Indoor plant care',
            'Irrigation system management',
        ],
    },
    {
        title: 'Office Support Services',
        items: [
            'Office boy/peon services',
            'Stationery management',
            'Filing/document support',
            'Photocopying/printing assistance',
        ],
    },
];

const ServicesSection = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-[#e0e7ff] to-[#4400FF] home-services">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-700"
            >
                <span className="text-black">Our</span> Services
            </motion.h2>
            <p className="text-center max-w-7xl mx-auto mb-10 text-gray-900 text-2xl md:text-2xl font-semibold">
                Elevating your workspaces with reliable, end-to-end soft service solutions — from daily cleaning and pest control to front desk and facility support, all under one expert team.
            </p>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {serviceCategories.map((category, index) => (
                    <Link to="/services"
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">{category.title}</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm font-semibold">
                            {category.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;
