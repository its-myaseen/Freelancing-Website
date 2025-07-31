import React from 'react'
import PagesHeader from '../Components/PagesHeader'
import ContactMeForm from '../Components/ContactMeForm'
import ContactMeHeader from '../Components/ContactMeHeader'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white px-4 sm:px-6 lg:px-10'>
            <PagesHeader Heading={<>Discuss Your Vision <br /> Develop It with MERN</>} />
            <div className='flex flex-col md:flex-row w-full box-border justify-between overflow-hidden mt-15 md:mt-30 gap-10 md:gap-0 pb-20'>
                {/* Left Section */}
                <div className='block relative h-full w-full md:w-[50%] overflow-hidden md:pr-10'>
                    <h1 className='block relative text-2xl md:text-3xl text-white' style={{fontFamily: 'Poppins'}}>Get in Touch</h1>
                    <p className='block relative mt-1 text-sm md:text-md text-white/70'>Need a MERN Stack expert? Let's talk.</p>
                
                    <div className='block w-full box-border md:pr-10 mt-8 md:mt-15'>
                        {/* Contact Cards */}
                        <a href='https://wa.me/923235973947' target='_blank' className='flex cursor-none justify-start gap-4 items-start group bg-white/4 rounded-xl border border-white/10 shadow-[inset_0_0_10px_#ffffff0e] p-3 md:p-4 w-full h-16 md:h-18 backdrop-blur-2xl transform hover:translate-x-5 duration-500 cursor-hover'>
                            <div className='flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-black/20 rounded-lg border border-white/10 shadow-[inset_0_0_10px_#ffffff0e]'>
                                <i className="ri-whatsapp-line text-white/60 text-xl md:text-2xl"></i>
                            </div>
                            <div className='flex flex-col justify-between h-full flex-1'>
                                <h1 className='block relative text-[11px] md:text-[12px] text-white font-semibold'>Whatsapp me</h1>
                                <p className='block relative text-[10px] md:text-[11px] text-white/70 font-light'>+92 323 5973947</p>
                            </div>
                            <div className='flex justify-center items-center h-full box-border'>
                                <div className='flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-white/10 rounded-full'>
                                    <i className="ri-arrow-right-up-line text-xs md:text-sm text-white group-hover:rotate-[40deg] duration-500"></i>
                                </div>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a href='mailto:itsmyaseen2040@gmail.com' target='_blank' className='flex cursor-none justify-start gap-4 items-start mt-3 group bg-white/4 rounded-xl border border-white/10 shadow-[inset_0_0_10px_#ffffff0e] p-3 md:p-4 w-full h-16 md:h-18 backdrop-blur-2xl transform hover:translate-x-5 duration-500 cursor-hover'>
                            <div className='flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-black/20 rounded-lg border border-white/10 shadow-[inset_0_0_10px_#ffffff0e]'>
                                <i className="ri-mail-line text-white/60 text-xl md:text-2xl"></i>
                            </div>
                            <div className='flex flex-col justify-between h-full flex-1'>
                                <h1 className='block relative text-[11px] md:text-[12px] text-white font-semibold'>Email me</h1>
                                <p className='block relative text-[10px] md:text-[11px] text-white/70 font-light'>itsmyaseen2040@gmail.com</p>
                            </div>
                            <div className='flex justify-center items-center h-full box-border'>
                                <div className='flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-white/10 rounded-full'>
                                    <i className="ri-arrow-right-up-line text-xs md:text-sm text-white group-hover:rotate-[40deg] duration-500"></i>
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href='https://www.linkedin.com/in/yaseenthemernstackdeveloper' target='_blank' className='flex cursor-none justify-start gap-4 items-start mt-3 group bg-white/4 rounded-xl border border-white/10 shadow-[inset_0_0_10px_#ffffff0e] p-3 md:p-4 w-full h-16 md:h-18 backdrop-blur-2xl transform hover:translate-x-5 duration-500 cursor-hover'>
                            <div className='flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-black/20 rounded-lg border border-white/10 shadow-[inset_0_0_10px_#ffffff0e]'>
                                <i className="ri-linkedin-line text-white/60 text-xl md:text-2xl"></i>
                            </div>
                            <div className='flex flex-col justify-between h-full flex-1'>
                                <h1 className='block relative text-[11px] md:text-[12px] text-white font-semibold'>Connect on LinkedIn</h1>
                                <p className='block relative text-[10px] md:text-[11px] text-white/70 font-light'>Muhammad Yaseen</p>
                            </div>
                            <div className='flex justify-center items-center h-full box-border'>
                                <div className='flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-white/10 rounded-full'>
                                    <i className="ri-arrow-right-up-line text-xs md:text-sm text-white group-hover:rotate-[40deg] duration-500"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className='block relative h-full w-full md:w-[50%]'>
                    <ContactMeForm/>
                </div>
            </div>

            <FAQs/>
            <Footer/>
        </div>
    )
}

export default Contact