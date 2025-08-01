import React, { useRef, useState } from 'react'
import Alert from './Alert'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
gsap.registerPlugin(ScrollTrigger)

const ContactMeForm = () => {
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')
    const dataDefault = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    }
    const closeAlert = () => {
        setShowAlert(false)
        setMessage('')
    }

    const [data, setData] = useState(dataDefault)
    const apiUrl = import.meta.env.VITE_BACKEND + '/api/email/send/ContactRequest'
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!data.firstName || !data.lastName || !data.phone || !data.email || !data.message) {
            setMessage('Please fill all the required fields');
            setType('error')
            setShowAlert(true)
            return null
        }
        setIsSending(true)


        const response = await fetch('https://formspree.io/f/mgvzevpn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(response)

        if (response.ok) {
            setIsSending(false);
            setData(dataDefault);
        } else {
            setMessage("Oops! Something Went Wrong")
            setType()
            setShowAlert(true)
        }

        if (response.data.success && response.status === 200) {
            setShowAlert(false)
            setMessage('Form submitted successfully!')
            setType('success')
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        } else if (response.data.error) {
            setShowAlert(false)
            setMessage('Oops! Something went wrong.')
            setType('error')
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }

        // setData(dataDefault)
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const form = useRef()

    useGSAP(() => {
        gsap.from(form.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: form.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        })
    })

    return (
        <>
            <div className='flex relative justify-center w-full' ref={form}>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='block relative box-border w-full bg-[#ffffff0e] border-2 border-[#ffffff0e] shadow-md rounded-xl p-4 md:p-5 mb-4'>
                        {/* Name Fields */}
                        <div className='flex flex-col sm:flex-row justify-center w-full gap-3 md:gap-5'>
                            <div className='block box-border w-full sm:w-1/2'>
                                <label className='text-gray-300 text-xs md:text-sm font-normal cursor-none'>First Name</label>
                                <input
                                    name='firstName'
                                    onChange={changeHandler}
                                    value={data.firstName}
                                    type="text"
                                    className='w-full h-9 md:h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-xs md:text-sm mt-1 focus:outline-none'
                                    placeholder='First Name'
                                />
                            </div>
                            <div className='block box-border w-full sm:w-1/2'>
                                <label className='text-gray-300 text-xs md:text-sm font-normal cursor-none'>Last Name</label>
                                <input
                                    name='lastName'
                                    onChange={changeHandler}
                                    value={data.lastName}
                                    type="text"
                                    className='w-full h-9 md:h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-xs md:text-sm mt-1 focus:outline-none'
                                    placeholder='Last Name'
                                />
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className='flex flex-col sm:flex-row justify-center w-full gap-3 md:gap-5 mt-6 md:mt-10'>
                            <div className='block box-border w-full sm:w-1/2'>
                                <label className='text-gray-300 text-xs md:text-sm font-normal cursor-none'>Phone</label>
                                <input
                                    name='phone'
                                    type="phone"
                                    onChange={changeHandler}
                                    value={data.phone}
                                    className='w-full h-9 md:h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-xs md:text-sm mt-1 focus:outline-none'
                                    placeholder='Phone'
                                />
                            </div>
                            <div className='block box-border w-full sm:w-1/2'>
                                <label className='text-gray-300 text-xs md:text-sm font-normal cursor-none'>Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    onChange={changeHandler}
                                    value={data.email}
                                    className='w-full h-9 md:h-10 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 text-white text-xs md:text-sm mt-1 focus:outline-none'
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className='flex justify-center w-full gap-3 md:gap-5 mt-6 md:mt-10'>
                            <div className='block box-border w-full'>
                                <label className='text-gray-300 text-xs md:text-sm font-normal cursor-none'>Your Message</label>
                                <textarea
                                    name='message'
                                    onChange={changeHandler}
                                    value={data.message}
                                    className='w-full h-32 md:h-37 bg-[#ffffff0e] border-1 border-[#ffffff0e] shadow-md rounded-md px-2 py-2 text-white text-xs md:text-sm mt-1 focus:outline-none resize-none'
                                    placeholder='Your Message'
                                />
                            </div>
                        </div>

                        <button className='h-10 md:h-12 w-full bg-white/70 hover:bg-white rounded-full mt-5 text-black text-sm cursor-none cursor-hover transition-colors duration-300'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {showAlert && <Alert type={type} message={message} close={closeAlert} />}
        </>
    )
}

export default ContactMeForm