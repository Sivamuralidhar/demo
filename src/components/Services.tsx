import React from 'react';
import { Code, Search, Megaphone, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
    icon: Code,
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with our data-driven SEO strategies.',
    icon: Search,
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing campaigns that deliver measurable results and ROI.',
    icon: Megaphone,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance on technology decisions to help your business stay competitive and efficient.',
    icon: Briefcase,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions to power your digital transformation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;