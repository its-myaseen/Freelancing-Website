import React, { useContext } from 'react';

import { SiteDataContext } from '../Contexts/SiteContext';

import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import Technologies from '../Components/Technologies';
import MyProcess from '../Components/MyProcess';
import Qualities from '../Components/Qualities';
import MyWorks from '../Components/MyWorks';
import Reviews from '../Components/Reviews';
import Stats from '../Components/Stats';
import FeatureBlogs from '../Components/FeatureBlogs';
import FAQs from '../Components/FAQs';
import Footer from '../Components/Footer';

const Home = () => {

  const { data } = useContext(SiteDataContext)

  return (
    <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white'>
      <HeroSection />
      <ServicesSection />
      <Technologies />
      <MyProcess />
      <Qualities />
      <MyWorks />
      <Reviews />
      <Stats />
      <FeatureBlogs />
      <FAQs />

      <div className='px-5 md:px-10'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
