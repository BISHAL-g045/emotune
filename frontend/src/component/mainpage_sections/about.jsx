import React from 'react';
import aboutImage from "../../images/about.png";

export const About = () => {
  return (
    <section className="about py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <div className="about__pic">
              <img src={aboutImage} alt="About" className="w-full h-auto" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex items-center">
            <div className="about__text">
              <div className="section-title mb-6">
                <h2 className="text-3xl font-bold">DJ RKN</h2>
                <h1 className="text-4xl font-extrabold text-gray-800">About Me</h1>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help to move your mind, body, and soul by delivering tracks that stand out
                from the norm. As if this impressive succession of high-impact, floor-filling bombs wasn’t
                enough to sustain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
