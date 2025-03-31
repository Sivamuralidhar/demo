import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '50+' }
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We are committed to delivering exceptional digital solutions that drive real business growth and success for our clients.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Our approach is centered around understanding and meeting our clients\' unique needs and objectives.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we do, from development to customer service.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay at the forefront of technology trends to provide cutting-edge solutions for our clients.'
  }
];

const About = () => {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">About MFG Digital Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading digital technology company specializing in software development, 
            digital marketing, and SEO services. Our mission is to help businesses thrive in 
            the digital age through innovative solutions and strategic expertise.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{stat.value}</div>
              <div className="mt-2 text-lg font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              Founded in 2025, MFG Digital Tech has grown from a small team of passionate 
              developers to a full-service digital technology company. We've helped hundreds 
              of businesses across various industries establish their digital presence and 
              achieve their growth objectives.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Our team consists of experienced professionals who bring diverse expertise in 
              software development, digital marketing, and SEO. We believe in continuous 
              learning and staying updated with the latest industry trends to provide our 
              clients with the best possible solutions.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
              <value.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;