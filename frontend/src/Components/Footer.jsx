import React from 'react'
import logo from '../assets/TextMark White.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerNavs = [
        {
            label: "Menu",
            items: [
                {
                    href: '/',
                    name: 'Home'
                },
                {
                    href: '/about',
                    name: 'About'
                },
                {
                    href: '/services',
                    name: 'Services'
                },
                {
                    href: '/projects',
                    name: 'Projects'
                },
                {
                    href: '/blogs',
                    name: 'Blogs'
                },
                {
                    href: '/contact',
                    name: 'Contact'
                },
            ],
        },
        {
            label: "Services",
            items: [
                {
                    href: '/service/mern-stack-solution',
                    name: 'Mern Stack Development'
                },
                {
                    href: '/service/web-development',
                    name: 'Website Development'
                },
                {
                    href: '/service/custom-landing-page-development',
                    name: 'Landing Page Development'
                },
                {
                    href: '/service/custom-software-development',
                    name: 'Software Development'
                },
                {
                    href: '/services',
                    name: 'More...'
                },
            ],
        }
    ]

    return (
        <footer className="text-white/70 bg-white/5 px-4 py-10 w-full mx-auto md:px-15 rounded-4xl mb-10">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src={logo} className="w-32" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Certified by Growstep Technologies. Trusted by clients for 100% satisfaction, 130% traffic growth, and high-converting web solutions built with cutting-edge technologies.
                        </p>
                    </div>

                </div>
                <div className="w-[40%] mt-10 space-y-6 items-start justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-[#b5d3f5] text-sm font-medium" style={{ fontFamily: `"Unbounded", sans-serif` }}>
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={el.href}
                                                className="relative hover:translate-x-5 cursor-none cursor-hover hover:text-[#b5d3f5] duration-300"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2025 Muhammad Yaseen (@dev_yaseen) All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 cursor-none cursor-hover h-10 rounded-full flex items-center justify-center">
                            <a className='cursor-none cursor-hover' href="javascript:void()">
                                <i class="ri-linkedin-fill text-xl text-[#b5d3f5]"></i>
                            </a>
                        </li>

                        <li className="w-10 h-10 cursor-none cursor-hover rounded-full flex items-center justify-center">
                            <p className='cursor-none cursor-hover' href="javascript:void()">
                                <a href="javascript:void()">
                                    <i class="ri-instagram-line cursor-none cursor-hover text-xl text-[#b5d3f5]"></i>
                                </a>
                            </p>
                        </li>

                        <li className="w-10 h-10 rounded-full flex items-center justify-center">
                            <p className='cursor-none cursor-hover' href="javascript:void()">
                                <a href="javascript:void()">
                                    <i class="ri-whatsapp-line text-xl cursor-none text-[#b5d3f5]"></i>
                                </a>
                            </p>
                        </li>

                        <li className="w-10 h-10 cursor-none cursor-hover rounded-full flex items-center justify-center">
                            <p className='cursor-none cursor-hover' href="javascript:void()">
                                <a className='cursor-none cursor-hover' href="javascript:void()">
                                    <i class="ri-github-line font-extralight text-xl text-[#b5d3f5]"></i>
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}

export default Footer
