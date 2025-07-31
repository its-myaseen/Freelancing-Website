import React, { useContext, useEffect, useState } from 'react';
import PagesHeader from '../Components/PagesHeader';
import ServiceCard from '../Components/ServiceCard';
import WhyMe from '../Components/WhyMe';
import Footer from '../Components/Footer';
import FAQs from '../Components/FAQs';
import { ServicesDataContext } from '../Contexts/ServicesContext';

const Services = () => {
    const [Services, setServices] = useState([
        {
            id: 1,
            icon: <></>,
            heading: "",
            aboutService: ""
        }
    ])

    const {data} = useContext(ServicesDataContext);
    
    useEffect(()=>{
        setServices(data);
    }, [data]);

    return (
        <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white px-4 sm:px-10'>
            <PagesHeader Heading={
                <div className='text-center sm:text-left'>
                    Discover<br/>My Services
                </div>
            } />
            
            <div className='flex flex-wrap justify-center gap-4 sm:gap-5 mt-10 sm:mt-20'>
                {
                    Services.map((data, ind) => (
                        <ServiceCard 
                            key={ind} 
                            data={data} 
                            id={ind} 
                        />
                    ))
                }
            </div>

            <WhyMe />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Services