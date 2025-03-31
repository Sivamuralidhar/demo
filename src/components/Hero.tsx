import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Transform Your Digital Presence",
    description: "Innovative software solutions and digital strategies to elevate your business in the digital age.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Data-Driven SEO Excellence",
    description: "Boost your online visibility with our proven SEO strategies and analytics-based approach.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Digital Marketing That Delivers",
    description: "Create impactful digital campaigns that connect with your audience and drive real results.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions that streamline your operations and drive business growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }
];

const Hero = () => {
  return (
    <div id="home" className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
                  <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="font-inter text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-10 animate-fade-in-delay">
                    {slide.description}
                  </p>
                  <div className="flex justify-center gap-x-6">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200 active:text-gray-600 focus-visible:outline-white transform hover:scale-105 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;