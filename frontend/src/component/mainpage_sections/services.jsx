import React from 'react';
import servLeft from "../../images/service-left.jpg";
import service1 from "../../images/service-1.png";
import service2 from "../../images/joystick.png";
import service4 from "../../images/service-4.png";

const ServiceItem = ({ image, title, description, isDeepBg }) => (
  <div className={`p-6 ${isDeepBg ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} flex flex-col items-center`}>
    <img src={image} alt={title} className="w-16 h-16 mb-4" />
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-center">{description}</p>
  </div>
);

export const Services = () => {
  return (
    <section className="services">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: `url(${servLeft})` }}>
              <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8" className="absolute inset-0 flex items-center justify-center">
                <i className="fa fa-play text-white text-6xl bg-black bg-opacity-50 p-4 rounded-full"></i>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap">
            <div className="w-1/2">
              <ServiceItem
                image={service1}
                title="Disabled Individual"
                description="Benefits visually impaired individuals by recommending music based on emotional cues rather than visual facial expressions."
                isDeepBg={true}
              />
            </div>
            <div className="w-1/2">
              <ServiceItem
                image={service2}
                title="Gaming"
                description="Adapts the in-game music to match player emotions and enhance immersion."
              />
            </div>
            <div className="w-1/2">
              <ServiceItem
                image={servLeft}
                title="Mental Health and Therapy"
                description="Utilizes music to support emotional well-being, relaxation, and therapy."
              />
            </div>
            <div className="w-1/2">
              <ServiceItem
                image={service4}
                title="Social Media"
                description="Enhances posts and videos with mood-appropriate background music for engaging content."
                isDeepBg={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


