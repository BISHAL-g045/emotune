import React from 'react';
import { Hero } from '../component/mainpage_sections/hero';
import { About } from '../component/mainpage_sections/about';
import { Services } from '../component/mainpage_sections/services';
import { Footer } from '../component/mainpage_sections/footer';
import { Youtube } from '../component/mainpage_sections/Youtube';
import Nav from '../component/Nav';

export const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <br />
      <Services />
      <br />
      <br /><br />
      <Youtube />
      <br />
      <Footer />
    </div>
  );
}