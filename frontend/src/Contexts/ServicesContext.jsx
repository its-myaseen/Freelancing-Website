import React, { createContext, useState } from 'react'
export const ServicesDataContext = createContext()


//Thumbnail Imports
import MERN from '/assets/Service Thumbnails/MERN.png'
import WEB from '/assets/Service Thumbnails/WEB.png'
import ECOMM from '/assets/Service Thumbnails/ECOMMERCE.png'
import SOFTWARE from '/assets/Service Thumbnails/SOFTWARE.png'
import CHATBOT from '/assets/Service Thumbnails/CHATBOT.png'
import MANAGEMENTSYS from '/assets/Service Thumbnails/MANAGEMENTSYSTEM.png'
import LANDINGPAGE from '/assets/Service Thumbnails/LANDINGPAGE.png'
import PWA from '/assets/Service Thumbnails/PWA.png'
import API from '/assets/Service Thumbnails/API.png'
import WORDPRESS from '/assets/Service Thumbnails/WORDPRESS.png'

const ServicesContext = ({ children }) => {

    const data = [
        {
            icon: <i className="ri-reactjs-fill"></i>,
            id: 'mern-stack-solution',
            thumbnail:MERN,
            serviceName: "Mern Stack Solution",
            serviceTitle: <>MERN Stack Solution<br />to Power Your Business</>,
            aboutService: "I develop end-to-end web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. From building responsive user interfaces to creating secure backend systems, I offer complete full-stack solutions tailored to your goals. My focus is on writing clean, scalable code and delivering high-performing applications that help businesses grow and succeed online.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>MERN Stack development</b> is perfect for building fast, scalable, and user-friendly web apps. It uses a single JavaScript-based technology stack across both frontend and backend, making development more efficient. React.js ensures smooth, modern user interfaces that enhance engagement. Node.js and Express.js power secure, high-performance APIs. MongoDB provides flexible data handling to support business growth.<b className='font-normal text-white'> This stack is ideal for startups and businesses looking for reliable, future-ready digital solutions.</b>


            </p>,
            servicePoints: [
                {
                    q: "Improved User Experience",
                    a: "React.js provides smooth, dynamic, and responsive interfaces that keep users engaged.",
                },
                {
                    q: "Faster Development Process",
                    a: "A unified JavaScript stack allows for quicker development and easier collaboration.",
                },
                {
                    q: "Scalable Architecture",
                    a: "MongoDB and Node.js handle large data and user loads, making your app future-ready.",
                },
                {
                    q: "Secure and Reliable Backend",
                    a: "Express.js and Node.js enable robust, secure APIs for smooth data communication.",
                },
                {
                    q: "Cross-Platform Compatibility",
                    a: "Easily extend your web app to mobile or desktop with the same codebase structure.",
                },
                {
                    q: "Better Performance",
                    a: "The asynchronous, non-blocking nature of Node.js ensures high speed and performance.",
                },
                {
                    q: "Cost-Effective Solution",
                    a: "Using one language for both frontend and backend reduces development time and cost.",
                },
                {
                    q: "SEO & Speed Optimization",
                    a: "Server-side rendering and fast loading times improve search engine visibility and user retention.",
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I build full-stack web applications using the MERN stack</b> — MongoDB, Express.js, React.js, and Node.js. I create responsive frontends, develop secure backends, and manage scalable databases. From UI design to API integration, I handle the complete development process with clean, efficient code. My goal is to deliver fast, modern, and reliable web solutions tailored to business needs.
            </p>,
            serviceDescription: `
*Project Discussion and Requirement Analysis:*  
- Collaborate closely with stakeholders to comprehensively understand the application’s goals, user personas, technical constraints, and expected workflows, ensuring all expectations are documented clearly.  
- Define detailed functional and technical requirements tailored specifically to the MERN stack architecture, including data handling, API structure, security protocols, and scalability considerations.  

*System Architecture and UI/UX Design:*  
- Design a robust, scalable architecture that leverages the strengths of MongoDB for flexible data storage, Express.js and Node.js for efficient backend processing, and React for a dynamic client-side interface, providing a seamless integration between frontend and backend.  
- Create detailed UI/UX wireframes and interactive prototypes using React, focusing on delivering an intuitive and engaging user experience that adapts flawlessly across diverse devices and screen sizes.  

*Front-end Development with React:*  
- Build a modular and reusable component library using React, implementing advanced state management solutions (like Context API or Redux) to manage complex data flows and ensure smooth user interactions throughout the application.  
- Incorporate modern React features such as hooks, lazy loading, and code splitting to optimize performance, reduce load times, and provide a fast, responsive frontend experience for users.  

*Back-end Development with Node.js and Express:*  
- Develop comprehensive RESTful APIs using Express.js and Node.js that handle client requests efficiently, include robust error handling, and support asynchronous operations to manage high volumes of data and user requests without bottlenecks.  
- Implement middleware for authentication, logging, and data validation, ensuring that the backend is secure, maintainable, and easily extendable to support future features or microservices.  

*Database Integration with MongoDB:*  
- Design flexible schema-less data models in MongoDB that allow rapid iteration and adaptation to evolving application requirements, while maintaining data integrity and consistency across various collections and relations.  
- Optimize database queries and indexing strategies to improve read/write performance, support large-scale datasets, and ensure fast response times for critical operations within the application.  

*Authentication and Authorization:*  
- Implement secure user authentication mechanisms such as JSON Web Tokens (JWT) or OAuth 2.0, providing safe login workflows, token management, and automatic session expiration to protect user data.  
- Manage user roles and permissions meticulously, ensuring granular access control so that sensitive resources and APIs are accessible only to authorized users or admin roles.  

*Deployment and DevOps:*  
- Configure scalable cloud infrastructure using providers such as AWS, Azure, or DigitalOcean, implement containerization with Docker, and set up Continuous Integration / Continuous Deployment (CI/CD) pipelines for automated testing and deployment.  
- Monitor application health and performance using tools like Prometheus or New Relic, automate backups and disaster recovery plans, and ensure uptime with load balancing and auto-scaling capabilities.  

*Maintenance and Continuous Support:*  
- Provide ongoing maintenance that includes regular updates to dependencies, patching security vulnerabilities, and optimizing codebase performance to keep the application secure and performant over time.  
- Offer proactive technical support and iterative feature enhancement based on user feedback and analytics, helping your MERN application evolve in line with business needs and market trends.  
`,
        },
        {
            icon: <i className="ri-window-line"></i>,
            id: 'web-development',
            thumbnail: WEB,
            serviceName: "Website Development",
            serviceTitle: <>Custom Websites That<br />Convert and Perform</>,
            aboutService: "I build custom, responsive websites that are fast, secure, and tailored to your business needs. Whether you're launching a startup or scaling an existing brand, I deliver clean code, modern design, and reliable performance you can count on.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                A <b className='font-normal text-white'> well-developed website is key to building trust and attracting customers</b> in today’s digital world. It enhances user experience, improves load speed, and works seamlessly across all devices. With custom development, your site reflects your brand and supports your business goals. <b className='font-normal text-white'> This service ensures you have a strong, scalable, and high-performing online presence</b>.
            </p>,
            servicePoints: [
                {
                    q: "Enhanced User Experience",
                    a: "MERN Stack delivers fast, smooth, and interactive web applications that keep users engaged and improve satisfaction across all devices.",
                },
                {
                    q: "Stronger Brand Identity",
                    a: "A custom-designed MERN-based website helps your brand stand out with a unique and modern digital presence tailored to your business goals.",
                },
                {
                    q: "Fully Mobile Responsive",
                    a: "Every site is optimized for mobile, tablet, and desktop — ensuring your users have a seamless browsing experience on any device.",
                },
                {
                    q: " Optimized Performance",
                    a: "A professional, secure, and high-performance website builds trust, making your business look reliable and up-to-date in the digital space.",
                },
                {
                    q: "Improved Search Engine Rankings",
                    a: "With SEO-friendly code, fast loading speeds, and clean architecture, MERN Stack websites are built to rank better on Google and other search engines.",
                },
                {
                    q: "Faster Loading Speeds",
                    a: "MERN’s efficient backend and lightweight frontend ensure your pages load quickly — reducing bounce rates and boosting conversions.",
                },
                {
                    q: "Gain a Competitive Advantage",
                    a: "With modern features, better performance, and scalability, your MERN Stack web app helps you stay ahead of competitors with outdated tech.",
                },
                {
                    q: "Secure and Easy Management",
                    a: "Enjoy peace of mind with built-in security practices and user-friendly admin panels to manage content, users, and data with ease.Enjoy peace of mind with built-in security practices and user-friendly admin panels to manage content, users, and data with ease.",
                }
                // Add more service points as needed
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>Web Development</b> involves building robust, scalable, and secure websites and applications that bring your digital vision to life. This process ensures your site functions flawlessly across all devices while providing fast load times and seamless user interactions. By leveraging the latest programming languages, frameworks, and best practices, we create custom solutions tailored to meet your specific business needs and support long-term growth. Our service includes:
            </p>,
            serviceDescription: `*Discussion and Requirement Gathering:*  
- In-depth discussions to understand your business goals, project vision, and target audience.  
- Engaging stakeholders through interviews and workshops to capture clear requirements and prevent scope creep.  

*Understanding Requirements and UI Research:*  
- Analyze and validate requirements for completeness and clarity.  
- Conduct UI research studying trends, competitors, and user behavior to inform design strategy.  

*Responsive Development:*  
- Build websites fully responsive for desktops, tablets, and smartphones.  
- Emphasize mobile-first design principles to prioritize mobile user experience.  

*Custom Backend Development:*  
- Develop secure, scalable server-side applications tailored to your unique needs.  
- Integrate databases, APIs, and business logic ensuring robust performance.  

*Content Management System (CMS) Implementation (If Required):*  
- Integrate and customize CMS platforms like WordPress or Drupal.  
- Provide training and documentation for seamless content management.  

*E-commerce Solutions (If Required):*  
- Develop secure e-commerce platforms with product catalogs and payment gateways.  
- Integrate shipping, inventory, and third-party services to enhance operations.  

*SEO Optimization:*  
- Incorporate SEO best practices including keyword research and on-page SEO.  
- Optimize site speed, metadata, and semantic markup to improve search rankings.  

*Maintenance and Support:*  
- Provide ongoing updates, bug fixes, security monitoring, and backups.  
- Offer technical support to ensure your website remains secure and performant.  
`,
        },
        {
            icon: <i className="ri-store-3-line"></i>,
            id: 'e-commerce-development',
            thumbnail: ECOMM,
            serviceName: "E-Commerce Development",
            serviceTitle: <>eCommerce Development<br />That Delivers Results</>,
            aboutService: "I build custom e-commerce stores that are fast, secure, and optimized for conversions. From product pages to payment integration, I deliver responsive, scalable solutions that help you sell more and grow your online business.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                In today’s digital world,<b className='font-normal text-white'> having an online store is essential</b> for reaching a wider audience and increasing sales. eCommerce development allows businesses to  <b className='font-normal text-white'>sell products 24/7 without geographical limits</b>. A professionally built store ensures smooth user experience, secure payments, and mobile responsiveness. It also helps build trust, attract more customers, and streamline order management. With more people shopping online, your business needs a fast, reliable, and scalable eCommerce solution to stay competitive. Investing in a quality eCommerce website is no longer optional — it’s a necessity.


            </p>,
            servicePoints: [
                {
                    q: "24/7 Online Presence",
                    a: "Sell your products anytime, anywhere — even while you sleep."
                },
                {
                    q: "Reach a Global Audience",
                    a: "Expand beyond local boundaries and attract customers worldwide."
                },
                {
                    q: "Boost Sales & Revenue",
                    a: "A well-designed online store improves conversions and increases sales."
                },
                {
                    q: "Mobile-Friendly Shopping",
                    a: "Responsive design ensures a smooth experience on phones and tablets."
                },
                {
                    q: "Secure Payment Integration",
                    a: "Offer safe and trusted payment gateways to build customer trust."
                },
                {
                    q: "Easy Product & Order Management",
                    a: "Manage inventory, track orders, and process payments with ease."
                },
                {
                    q: "Customer Insights & Analytics",
                    a: "Track user behavior, preferences, and buying patterns for smarter decisions."
                },
                {
                    q: "Stay Competitive in the Market",
                    a: "In a digital-first world, having a professional eCommerce store is essential to survive and grow."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I design and develop custom eCommerce websites</b> that are fast, secure, and user-friendly. From product listings and shopping carts to secure payment gateways and order management systems, I build complete online stores tailored to your business needs. I focus on responsive design, smooth user experience, and clean functionality to help you increase sales and grow your online presence. Whether it’s a small shop or a full-scale eCommerce platform, I deliver solutions that work seamlessly across all devices.
            </p>,
            serviceDescription: `
*Project Consultation and Requirement Analysis:*  
- Conduct thorough discussions with stakeholders to understand business models, target customers, product types, and sales goals, ensuring a clear vision for the e-commerce platform.  
- Document detailed technical and functional requirements, including payment methods, shipping options, inventory management, and customer engagement features necessary for success.  

*Platform Architecture and UI/UX Design:*  
- Design a scalable and secure architecture that supports product catalog management, user accounts, shopping carts, and order processing with an emphasis on seamless integration between frontend and backend.  
- Develop user-centric UI/UX designs with intuitive navigation, easy product discovery, and compelling calls-to-action, optimized for both desktop and mobile to maximize conversions.  

*Front-end Development:*  
- Build responsive and fast-loading storefronts using modern technologies such as React or Vue, ensuring smooth browsing, filtering, and checkout experiences across all devices and browsers.  
- Implement dynamic product pages, interactive shopping carts, and real-time inventory updates to keep customers informed and engaged throughout their purchase journey.  

*Back-end Development and API Integration:*  
- Develop robust and secure server-side systems using Node.js, Express, or other suitable technologies to manage user authentication, payment processing, and order fulfillment workflows.  
- Integrate with third-party APIs for payment gateways like Stripe or PayPal, shipping services, tax calculators, and marketing platforms for a fully featured e-commerce ecosystem.  

*Inventory and Catalog Management:*  
- Create flexible product database schemas to handle various product types, variants, pricing rules, and stock levels, enabling administrators to efficiently manage the catalog.  
- Provide bulk upload tools, category management, and product search optimization to simplify content administration and improve user experience.  

*Customer Account and Security Features:*  
- Develop secure user account systems with password encryption, multi-factor authentication, and profile management capabilities to protect customer data.  
- Implement role-based access control for different user types such as shoppers, administrators, and vendors, ensuring appropriate permissions and protection.  

*SEO and Performance Optimization:*  
- Apply SEO best practices including keyword-rich product descriptions, metadata, fast page loading, and mobile optimization to improve organic search rankings and traffic.  
- Optimize images, minimize code, and leverage CDN technologies to deliver a high-performance shopping experience that reduces bounce rates and increases customer satisfaction.  

*Post-Launch Maintenance and Support:*  
- Provide ongoing support to handle software updates, security patches, feature enhancements, and bug fixes, ensuring your e-commerce platform remains competitive and secure.  
- Monitor site analytics, user behavior, and system health to proactively identify improvements and maintain smooth operations during traffic spikes and sales events.  
`,
        },
        {
            icon: <i className="ri-cpu-line"></i>,
            id: 'custom-software-development',
            thumbnail: SOFTWARE,
            serviceName: "Software Development",
            serviceTitle: <>Custom Software Solutions<br />Built for Your Business</>,
            aboutService: "I craft tailored software solutions that solve real business problems. From internal tools to full-scale platforms, I deliver secure, scalable, and efficient systems built to match your workflow and drive productivity.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                In today’s competitive world,<b className='font-normal text-white'> custom software gives businesses the tools they need to operate more efficiently and scale faster</b>. Off-the-shelf solutions often lack the flexibility to meet specific needs, while custom-built software is tailored to your exact workflows and goals.<b className='font-normal text-white'> It helps automate repetitive tasks</b>, reduce manual errors, and improve overall productivity. Whether it's a management system, CRM, or automation tool, well-built software can streamline your operations and save valuable time. As technology evolves, having the right software is no longer a luxury — it’s a strategic advantage for any business.


            </p>,
            servicePoints: [
                {
                    q: "Tailored to Your Business Needs",
                    a: "Custom software is built specifically for your workflows, goals, and operations."
                },
                {
                    q: "Increased Efficiency & Productivity",
                    a: "Automate repetitive tasks and reduce manual work to save time and resources."
                },
                {
                    q: "Scalability as You Grow",
                    a: "Easily adapt and expand your software as your business evolves."
                },
                {
                    q: "Better Data Management",
                    a: "Centralize, organize, and access your data securely and efficiently."
                },
                {
                    q: "Improved Decision Making",
                    a: "Get insights through real-time reports, dashboards, and analytics."
                },
                {
                    q: "Competitive Advantage",
                    a: "Use technology to stand out from competitors and offer better customer experiences."
                },
                {
                    q: "Enhanced Security",
                    a: "Protect sensitive business data with custom-built, secure systems."
                },
                {
                    q: "Integration with Existing Tools",
                    a: "Seamlessly connect your software with other apps, platforms, or APIs you already use."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I design and develop custom software solutions that solve real business problems and improve operational efficiency</b>. Whether it’s a management system, CRM, inventory tool, or a custom automation platform, I build scalable and secure applications tailored to your unique needs. I handle the full development cycle — from planning and architecture to clean code, integrations, and deployment. My focus is on creating user-friendly, high-performance software that helps businesses work smarter and grow faster.
            </p>,
            serviceDescription: `*1. Planning*  
- Define project scope, goals, and feasibility with stakeholder collaboration.  
- Establish timeline, allocate resources, and assess risks to set a clear foundation.  

*2. Feasibility Analysis (Requirements Analysis)*  
- Evaluate technical, financial, and operational viability of the project.  
- Refine user needs into detailed functional and non-functional specifications.  

*3. System Design*  
- Create high-level system architecture and detailed component designs.  
- Develop wireframes, prototypes, and technical specifications guiding development.  

*4. Implementation (Development)*  
- Write code following design documents and coding standards.  
- Use modular coding, version control, and continuous integration for quality.  

*5. Testing*  
- Conduct unit, integration, system, regression, and user acceptance testing.  
- Detect defects early using automated and manual testing techniques.  

*6. Deployment*  
- Release software to production via phased rollout or big-bang launch.  
- Configure infrastructure and enable user access with minimal downtime.  

*7. Maintenance*  
- Provide ongoing bug fixes, security patches, and feature upgrades.  
- Continuously monitor performance and adapt to user feedback and evolving needs.  
`,
        },
        {
            icon: <i className="ri-message-3-line"></i>,
            id: 'ai-chatbot-development',
            thumbnail: CHATBOT,
            serviceName: "AI ChatBot Development and Integration",
            serviceTitle: <>Seamless AI Chatbot Integration<br />for Modern Workflows</>,
            aboutService: "I build intelligent, API-based AI chatbots that automate customer support and streamline interactions. From integration to training, I deliver smart, responsive bots that enhance user experience and boost efficiency across your platforms.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>AI chatbots help businesses provide instant, 24/7 support</b> to their customers while reducing workload on human teams. They <b className='font-normal text-white'>automate repetitive tasks, answer FAQs, and guide users</b> through processes — all in real time. With natural language processing, chatbots can understand user intent and deliver accurate, human-like responses. This not only  <b className='font-normal text-white'>improves customer experience</b> but also increases engagement and conversion rates. Whether it’s for websites, apps, or social platforms, integrating an AI chatbot makes your business more efficient, responsive, and future-ready.


            </p>,
            servicePoints: [
                {
                    q: "24/7 Customer Support",
                    a: "Chatbots never sleep — they assist customers around the clock without human supervision."
                },
                {
                    q: "Faster Response Time",
                    a: "Instantly answer common queries and reduce wait times, improving user satisfaction."
                },
                {
                    q: "Cost-Efficient Operations",
                    a: "Automate repetitive tasks and reduce the need for large support teams."
                },
                {
                    q: "Improved Customer Engagement",
                    a: "Keep users engaged with personalized, conversational experiences."
                },
                {
                    q: "Lead Generation & Qualification",
                    a: "Capture leads, collect contact info, and route serious inquiries to your sales team."
                },
                {
                    q: "Omnichannel Integration",
                    a: "Deploy chatbots across websites, apps, Facebook, WhatsApp, and more."
                },
                {
                    q: "Smart Automation with NLP",
                    a: "AI-powered bots understand intent and provide human-like responses using natural language processing."
                },
                {
                    q: "Data Collection & Insights",
                    a: "Track user behavior and gather valuable data to improve services and decision-making."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I develop API-based AI chatbots that integrate seamlessly into websites</b>, mobile apps, and business systems. Using powerful AI models and NLP, I connect chatbots to platforms via APIs to automate conversations, handle user queries, and streamline processes in real time. I ensure smooth integration with third-party tools like CRMs, databases, and messaging platforms such as WhatsApp or Messenger. From custom API logic to secure deployment, I build scalable chatbot solutions tailored to your business needs.
            </p>,
            serviceDescription: `*Understanding the Basics:*  
- Familiarize yourself with AI fundamentals, chatbots, and models like ChatGPT to design effective conversational agents.  
- Learn about capabilities and limitations of the chosen AI to set realistic expectations for your chatbot.  

*Defining the Chatbot’s Purpose:*  
- Clearly specify what your chatbot will do, such as customer support, lead generation, or information retrieval.  
- Tailor the chatbot's responses and behaviors according to the intended use case for better engagement.  

*Setting Up the Development Environment:*  
- Prepare your environment with necessary tools like Python, an IDE, and relevant libraries to interact with chatbot APIs.  
- Obtain and securely store your API key (such as OpenAI API key) required for authenticating requests.  

*Creating the Chatbot Script:*  
- Build the core logic to send user inputs as prompts to the AI API and receive generated responses.  
- Implement prompt engineering to guide the chatbot's tone, response format, and behavior based on your requirements.  

*Testing and Iteration:*  
- Test your chatbot extensively under different scenarios to evaluate accuracy, responsiveness, and conversational flow.  
- Refine prompts and handle edge cases iteratively to enhance user experience and chatbot reliability.  

*API Integration:*  
- Expose chatbot functionality via RESTful API endpoints in your backend using frameworks like Flask or Express.js.  
- Design your API to accept user queries in JSON format and return structured chatbot responses for frontend consumption.  

*Deployment and Monitoring:*  
- Deploy your chatbot backend on a reliable hosting platform with scalability and security measures in place.  
- Monitor usage patterns, gather user feedback, and track performance metrics to continuously improve your chatbot.  

*Advanced Enhancements:*  
- Integrate custom knowledge bases or training data to specialize the chatbot for domain-specific queries.  
- Use state management and context retention to enable more natural, coherent multi-turn conversations.  
`,
        },
        {
            icon: <i className="ri-clipboard-line"></i>,
            id: 'management-system-development',
            thumbnail: MANAGEMENTSYS,
            serviceName: "Management System Development",
            serviceTitle: <>Streamline Operations with<br />Smart Management Solutions</>,
            aboutService: "I develop custom management systems that streamline your operations and centralize your data. From dashboards to role-based access, I deliver secure, scalable solutions tailored to your workflow and business goals.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                A <b className='font-normal text-white'>custom management system helps businesses streamline operations, reduce manual work, and improve overall efficiency. </b> Unlike generic software, it’s tailored to your specific workflows, departments, and business goals. It centralizes data, automates daily tasks, and provides real-time insights for smarter decision-making. Whether you need to manage employees, projects, inventory, or clients — a well-built system keeps everything organized and accessible. As your business grows, a custom management system scales with you, <b className='font-normal text-white'>saving time and increasing productivity.</b>


            </p>,
            servicePoints: [
                {
                    q: "Streamlined Operations",
                    a: "Automate repetitive tasks and manage daily operations more efficiently."
                },
                {
                    q: "Centralized Data Management",
                    a: "Store, access, and update all critical data in one secure place."
                },
                {
                    q: "Improved Accuracy",
                    a: "Reduce human errors with automated calculations and data handling."
                },
                {
                    q: "Real-Time Monitoring & Reporting",
                    a: "Track performance and generate reports to support better decision-making."
                },
                {
                    q: "Custom Workflows",
                    a: "Tailor the system to match your exact business processes and needs."
                },
                {
                    q: "Scalability",
                    a: "Easily adapt the system as your business or team grows."
                },
                {
                    q: "Enhanced Collaboration",
                    a: "Allow teams to work together more effectively with role-based access and shared tools."
                },
                {
                    q: "Time & Cost Savings",
                    a: "Save hours of manual work and reduce operational costs with a smart, automated system."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I design and develop custom management systems</b> that help businesses automate their workflows, organize data, and operate more efficiently. Whether it’s a system for managing employees, inventory, clients, or internal processes, I build scalable and user-friendly solutions tailored to your exact needs. I handle everything from planning and database design to front-end interface and backend functionality. My goal is to deliver reliable, secure, and easy-to-use systems that simplify operations and support business growth.
            </p>,
            serviceDescription: `*1. Planning and Scope Definition:*  
- Identify the business needs and define the project scope clearly to align stakeholders and set realistic goals.  
- Allocate resources, establish timelines, and prepare feasibility assessments to ensure successful project execution.  

*2. Requirements Gathering and Analysis:*  
- Engage with end-users and stakeholders to collect detailed functional and non-functional requirements.  
- Analyze current business processes and identify gaps to inform system design and customization.  

*3. System Design and Prototyping:*  
- Develop system architecture, data models, and user interface designs that meet the gathered requirements.  
- Create prototypes and wireframes to validate design choices and obtain user feedback early in development.  

*4. Development and Customization:*  
- Translate designs into a working management system using appropriate technologies and coding standards.  
- Customize modules and integrate third-party services or legacy systems as needed.  

*5. Testing and Quality Assurance:*  
- Conduct comprehensive testing including unit, integration, system, and user acceptance tests to ensure reliability and performance.  
- Identify and fix defects or inconsistencies before deployment to minimize risks.  

*6. Implementation and Deployment:*  
- Install and configure the system in the production environment using phased, pilot, parallel, or direct cutover approaches.  
- Train users, migrate legacy data, and manage change to ensure smooth transition and adoption.  

*7. Operation, Maintenance, and Support:*  
- Provide ongoing system support including updates, patches, security management, and user helpdesk services.  
- Monitor system performance and evolve the system to adapt to changing organizational needs and technology advancements.  
`,
        },
        {
            icon: <i className="ri-paint-brush-line"></i>,
            id: 'custom-landing-page-development',
            thumbnail: LANDINGPAGE,
            serviceName: "Custom Landing Page Development",
            serviceTitle: <>First Impressions That Convert<br />Custom Landing Pages That Work</>,
            aboutService: "I design and develop high-converting landing pages tailored to your brand and goals. With fast load times, modern design, and clear CTAs, I help you capture leads, drive sales, and make a strong first impression.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                In today’s competitive digital landscape, your <b className='font-normal text-white'>landing page</b> is often the first and only chance to capture a visitor’s attention. <b className='font-normal text-white'>A well-designed landing page helps you focus on a single goal</b>—whether it’s lead generation, product promotion, or event sign-ups. Unlike generic pages, custom landing pages are built to align with your brand, message, and audience. They remove distractions and guide users toward action with clarity and intent. This leads to higher conversion rates, better ROI on ad campaigns, and more qualified leads. If you want results, you need a landing page that’s designed with purpose.
            </p>,
            servicePoints: [
                {
                    q: "Higher Conversion Rates",
                    a: "Focused messaging and design drive more users to take action."
                },
                {
                    q: "Tailored to Campaign Goals",
                    a: "Designed specifically for promotions, launches, or lead generation."
                },
                {
                    q: "Faster Load Speeds ",
                    a: "Optimized code ensures quicker access, reducing bounce rates"
                },
                {
                    q: "Improved User Experience",
                    a: "Clean, mobile-responsive layouts enhance engagement."
                },
                {
                    q: "Stronger Brand Identity",
                    a: "Custom visuals and content reflect your unique brand tone."
                },
                {
                    q: "Better Ad Performance",
                    a: "Dedicated pages increase ROI for Google, Facebook, and other ad platforms."
                },
                {
                    q: "A/B Testing Ready",
                    a: "Easily test variations to improve design and copy effectiveness."
                },
                {
                    q: "Focuses Attention",
                    a: "Removes distractions and highlights your main call to action."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I craft high-converting, visually compelling landing pages tailored to specific business goals</b>—whether it's capturing leads, promoting a product, or launching a campaign. I start by understanding your target audience and offer, then design a focused, mobile-responsive page with clean UI and persuasive content. I handle everything from design to deployment, ensuring your landing page is optimized for speed, SEO, and conversions. The result? A custom page that drives action and delivers measurable results.

            </p>,
            serviceDescription: `*Planning Your Landing Page:*  
- Define the primary objective clearly, such as lead generation, sales, or event registration, to focus your design and messaging effectively.  
- Identify key performance indicators (KPIs) like conversion rate and bounce rate to measure your landing page’s success accurately.  

*Understanding Your Target Audience:*  
- Research demographics, behavior patterns, and preferences to tailor the landing page content specifically to your ideal customers.  
- Create user personas representing your typical visitors to guide content and design decisions that resonate and engage.  

*Choosing the Right Platform and Template:*  
- Select a landing page builder or platform that matches your technical skills and customization needs. Popular tools include Wix, Canva, Unbounce, and Xtensio.  
- Pick a template aligned with your goal and brand identity, ensuring it supports necessary features like forms, CTAs, and multimedia.  

*Customizing Design and Content:*  
- Personalize the template by adjusting colors, fonts, layouts, and images to maintain brand consistency and visual appeal.  
- Craft compelling headlines, engaging images or videos, clear call-to-actions (CTAs), and user-friendly forms that encourage visitor interaction.  

*Optimizing for Mobile and SEO:*  
- Ensure the landing page renders flawlessly on smartphones and tablets using responsive design best practices.  
- Implement SEO techniques including keyword optimization, meta tags, and alt text for images to improve search visibility.  

*Publishing, Testing, and Iteration:*  
- Launch your landing page and rigorously test its performance across devices and browsers.  
- Monitor analytics data such as visitor behavior, conversion rates, and bounce rates to identify areas for continuous improvement.  
`,
        },
        {
            icon: <i className="ri-apps-line"></i>,
            id: 'progressive-web-app-development',
            thumbnail: PWA,
            serviceName: "Progressive Web App Development",
            serviceTitle: <>Future-Ready Web Experiences<br />with PWA Technology</>,
            aboutService: "I build Progressive Web Apps that combine the best of web and mobile experiences. Fast, reliable, and installable, my PWAs offer offline support, push notifications, and responsive design to boost user engagement and performance.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                In today’s fast-paced digital world, <b className='font-normal text-white'>users expect apps to be fast, responsive, and available anytime</b> — even without internet. Progressive Web Apps (PWAs) solve that by combining the best of web and mobile apps into one seamless experience. They load instantly, work offline, and <b className='font-normal text-white'>can be installed on any device</b> without app store restrictions. For businesses, PWAs improve engagement, reduce bounce rates, and <b className='font-normal text-white'>offer native-like speed</b> without the heavy cost of native app development. They're also easier to maintain and update compared to traditional mobile apps. If you want your brand to stay relevant and accessible across all platforms, a PWA is the smart move.


            </p>,
            servicePoints: [
                {
                    q: "Offline Accessibility",
                    a: "PWAs work even without internet, keeping users connected to your app anytime."
                },
                {
                    q: "App-Like Experience ",
                    a: "They feel and behave like native mobile apps with smooth transitions and fast interactions."
                },
                {
                    q: "No App Store Approval Needed ",
                    a: "Users can install the app directly from the browser, bypassing app store limitations."
                },
                {
                    q: "Faster Load Times",
                    a: "Thanks to service workers and caching, PWAs load instantly after the first visit."
                },
                {
                    q: "Improved User Engagement ",
                    a: "With push notifications and home screen access, user retention improves significantly."
                },
                {
                    q: "Cross-Platform Compatibility",
                    a: "One codebase works across Android, iOS, desktop, and tablets."
                },
                {
                    q: "Lower Development Costs",
                    a: "PWAs eliminate the need to build separate apps for different platforms."
                },
                {
                    q: "Automatic Updates",
                    a: "Users always have the latest version without manual updates or downloads."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I build full-stack web applications using the MERN stack</b> — MongoDB, Express.js, React.js, and Node.js. I create responsive frontends, develop secure backends, and manage scalable databases. From UI design to API integration, I handle the complete development process with clean, efficient code. My goal is to deliver fast, modern, and reliable web solutions tailored to business needs.
            </p>,
            serviceDescription: `*1. Setting Up Your Development Environment:*  
- Install essential tools including a code editor (like Visual Studio Code), Node.js with NPM, and a local development server such as Live Server or Express.  
- Initialize your project directory using NPM to manage dependencies and scripts efficiently.  

*2. Planning and Scoping Your PWA:*  
- Define the primary purpose of your app, such as offline accessibility, push notifications, or device integration, to guide feature selection.  
- Decide between building a basic PWA with core features or an advanced PWA equipped with rich interactivity and native-like capabilities.  

*3. Building the App Shell:*  
- Create a lightweight HTML/CSS/JS structure that loads instantly and contains minimal UI components like header, footer, and navigation.  
- Use service workers to cache app shell assets to enable fast loading and offline capability.  

*4. Front-end Development:*  
- Use modern frameworks such as React, Vue, or Angular along with HTML5 and CSS3 to build responsive and accessible user interfaces.  
- Implement performance optimizations like lazy loading, minimizing HTTP requests, and browser caching to enhance user experience.  

*5. Service Worker Implementation:*  
- Register service workers to intercept network requests and cache necessary resources for offline use and improved reliability.  
- Manage cache versioning, handle fetch events, and provide custom offline pages to enhance UX during connectivity loss.  

*6. Adding Web App Manifest:*  
- Create a manifest JSON file describing your app’s name, icons, theme colors, and display mode to enable installation on user devices.  
- Configure metadata for home screen icons, splash screens, and orientation preferences to mimic native app behavior.  

*7. Testing and Performance Optimization:*  
- Test your PWA on multiple devices and browsers using tools like Chrome DevTools, Lighthouse, and BrowserStack to ensure compatibility and performance.  
- Analyze and optimize key metrics such as loading speed, time to interactive, and accessibility compliance to meet industry standards.  

*8. Deployment:*  
- Host your PWA on secure servers with HTTPS support to meet PWA security requirements and enable features like service workers.  
- Make your app discoverable through search engine optimization (SEO) and consider publishing in app stores if applicable.  

*9. Maintenance and Continuous Improvement:*  
- Monitor user feedback and analytics to identify issues and areas for enhancement.  
- Update service workers, dependencies, and features regularly to maintain performance and security.  
`,
        },
        {
            icon: <i className="ri-links-line"></i>,
            id: 'api-development-and-integration',
            thumbnail: API,
            serviceName: "API Development and Integration",
            serviceTitle: <>Seamless API Development & Integration<br />for Scalable Digital Solutions</>,
            aboutService: "I develop and integrate robust APIs that enable seamless data flow between your systems. Whether it's third-party services or custom backends, I ensure secure, scalable, and efficient communication across your applications.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>In the modern digital ecosystem, systems need to communicate smoothly</b> — and that's where APIs come in. API development allows different applications, platforms, and services to interact and share data in real-time. Whether you're connecting your frontend to a backend, integrating third-party services like payment gateways or CRMs, or enabling mobile apps to talk to your server, APIs make it all possible. They improve efficiency, reduce manual effort, and automate complex workflows. Without strong APIs, your product lacks scalability and flexibility. <b className='font-normal text-white'>This service ensures your business runs smarter and faster through seamless connectivity.</b>
            </p>,
            servicePoints: [
                {
                    q: "Enhanced Connectivity",
                    a: "Seamlessly link different software systems, apps, and platforms."
                },
                {
                    q: "Real-Time Data Exchange",
                    a: "Enable instant and secure data sharing across services."
                },
                {
                    q: "Improved Efficiency",
                    a: "Automate tasks that reduce manual work and speed up operations."
                },
                {
                    q: "Third-Party Service Integration",
                    a: "Easily connect tools like payment gateways, CRMs, or analytics."
                },
                {
                    q: "Scalable Architecture",
                    a: "APIs make it easier to scale your system as your business grows."
                },
                {
                    q: "Better User Experience",
                    a: "Fast, dynamic features powered by APIs boost user satisfaction."
                },
                {
                    q: "Cross-Platform Support",
                    a: "Allow web, mobile, and desktop apps to communicate with a single backend."
                },
                {
                    q: "Secure Access Control",
                    a: "Implement token-based authentication and manage who accesses your data."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I design and build secure, scalable APIs</b> that enable smooth communication between different systems, applications, and platforms. Whether it's creating custom RESTful APIs, integrating third-party services like Stripe, Firebase, or Google APIs, or connecting frontend interfaces to powerful backends, I handle it all. I ensure robust authentication, structured data handling, and detailed documentation for easy use and maintenance. My focus is on delivering efficient, future-ready APIs tailored to your business needs.
            </p>,
            serviceDescription: `*Understanding API Fundamentals:*  
- APIs (Application Programming Interfaces) act as bridges enabling communication between different software applications, allowing access to features or data without exposing internal system details.  
- In 2025, RESTful APIs remain dominant, while GraphQL and gRPC offer flexible alternatives for efficient data querying and communication.

*Key Considerations for Modern APIs:*  
- Ensure *interoperability* to allow seamless interaction across diverse platforms and languages.  
- Prioritize *security* using OAuth 2.0, API keys, JWT tokens, and rate limiting to protect data and prevent abuse.  
- Design for *scalability* to handle growing traffic without performance degradation.  
- Optimize for *performance* by minimizing latency, crucial for real-time and high-demand applications.

*Best Practices in API Design:*  
- Keep your API simple and intuitive with consistent, descriptive endpoint names and standard HTTP methods (GET, POST, PUT, DELETE).  
- Implement API versioning (e.g., '/v1/users') to maintain backward compatibility without breaking existing clients.  
- Design for *discoverability*: make your API self-explanatory with clear naming and comprehensive documentation.  

*Consistency and Reusability:*  
- Maintain consistent naming conventions, response formats, and behavior to reduce developer confusion and bugs.  
- Build reusable endpoints and data models that serve multiple teams or applications, enhancing maintainability and scalability.  

*Security Best Practices:*  
- Integrate authentication and authorization from the start, including encryption and audit logging.  
- Use rate limiting and throttling to manage traffic and prevent denial-of-service attacks.

*Documentation and Developer Experience:*  
- Provide thorough, up-to-date documentation with examples for every endpoint using tools like Swagger or Apidog to automate the process.  
- Ensure your docs are publicly accessible and compatible with AI-driven code generation tools to enhance developer adoption.

*API Lifecycle Management:*  
- Establish clear design guidelines to standardize API development across teams.  
- Monitor API performance continuously using metrics such as uptime, response times, error rates, and resource utilization.  
- Implement governance practices to enforce consistency, security, and version control throughout the API lifecycle.

*Essential Tools for API Development in 2025:*  
- Use integrated platforms like Apidog for design, testing, documentation, and mocking to streamline workflows.  
- Employ monitoring and logging tools to detect issues early and maintain high availability and reliability.

*Integration Strategy:*  
- Expose API endpoints that accept standardized JSON requests and return structured responses, enabling easy frontend-backend communication.  
- Design APIs to support microservices architectures for modular, scalable, and robust system integration.

*Continuous Improvement:*  
- Gather user feedback and analyze usage data to refine APIs iteratively.  
- Adapt APIs to evolving technical standards, security requirements, and business goals to maintain relevance and performance.

`,
        },
        {
            icon: <i className="ri-wordpress-fill"></i>,
            id: 'wordpress-development',
            thumbnail: WORDPRESS,
            serviceName: "Wordpress Development",
            serviceTitle: <>Custom WordPress Development<br />for Powerful, Scalable Websites</>,
            aboutService: "I create custom WordPress websites that are fast, secure, and easy to manage. From theme customization to plugin integration, I build scalable solutions tailored to your brand, ensuring a smooth user experience and strong online presence.",
            whyNeeded: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>WordPress powers over 40% of websites worldwide</b> — and for good reason. It’s a flexible, user-friendly platform that <b className='font-normal text-white'>allows you to manage content easily without technical knowledge.</b> Whether you're launching a blog, business site, or eCommerce store, WordPress offers countless themes and plugins to speed up development. Custom WordPress development ensures your site is fast, secure, and aligned with your brand. You get a professional look with the power to scale. It’s the perfect solution for businesses that need both performance and simplicity.
            </p>,
            servicePoints: [
                {
                    q: "User-Friendly CMS",
                    a: "Easily update and manage your website content without coding."
                },
                {
                    q: "Highly Customizable",
                    a: "Thousands of themes and plugins to tailor your site’s functionality."
                },
                {
                    q: "SEO Optimized",
                    a: "Built-in features and plugins help boost your search engine rankings."
                },
                {
                    q: "Responsive Design",
                    a: "Mobile-friendly layouts for a seamless experience across all devices."
                },
                {
                    q: "Cost-Effective",
                    a: "Lower development and maintenance costs compared to custom platforms."
                },
                {
                    q: "Secure & Reliable",
                    a: "Regular updates and plugins offer enhanced site security."
                },
                {
                    q: "Scalable for Growth",
                    a: "Easily expand your site as your business grows."
                },
                {
                    q: "Community Support",
                    a: "A massive global community ensures quick solutions and improvements."
                }
            ],
            serviceInfo: <p
                className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
                style={{ fontFamily: 'Poppins' }}
            >
                <b className='font-normal text-white'>I build custom WordPress websites</b> tailored to your brand, business goals, and user experience needs. From responsive design to plugin integration, I ensure your site is fast, secure, and easy to manage. Whether it’s a blog, business site, or online store, I develop clean, SEO-optimized themes and offer performance enhancements. I also handle custom functionality, security hardening, and post-launch support for a complete WordPress solution.
            </p>,
            serviceDescription: "",
        },
        // {
        //     icon: ``,
        //     id: 'id-here',
        //     thumbnail: "",
        //     serviceName: "",
        //     serviceTitle: <>title line1<br />title line2</>,
        //     aboutService: "",
        //     whyNeeded: <p
        //         className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
        //         style={{ fontFamily: 'Poppins' }}
        //     >
        //         <b className='font-normal text-white'>MERN Stack development</b> is perfect for building fast, scalable, and user-friendly web apps. It uses a single JavaScript-based technology stack across both frontend and backend, making development more efficient. React.js ensures smooth, modern user interfaces that enhance engagement. Node.js and Express.js power secure, high-performance APIs. MongoDB provides flexible data handling to support business growth.<b className='font-normal text-white'> This stack is ideal for startups and businesses looking for reliable, future-ready digital solutions.</b>


        //     </p>,
        //     servicePoints: [
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         },
        //         {
        //             q: "",
        //             a: ""
        //         }
        //     ],
        //     serviceInfo: <p
        //         className="block text-xl md:text-3xl mt-10 text-white/40 tracking-tight"
        //         style={{ fontFamily: 'Poppins' }}
        //     >
        //         <b className='font-normal text-white'>I build full-stack web applications using the MERN stack</b> — MongoDB, Express.js, React.js, and Node.js. I create responsive frontends, develop secure backends, and manage scalable databases. From UI design to API integration, I handle the complete development process with clean, efficient code. My goal is to deliver fast, modern, and reliable web solutions tailored to business needs.
        //     </p>,
        //     serviceDescription: "",
        // },
    ]



    const getService = (id) => {
        const object = data.find(b => b.id == id)
        if(!object){
            return "Not Found!"
        }
        return object
    }

    const getServices = (num) => {
        const Array = data.slice(0, num)
        return Array
    }


    const features = {
        data,
        getService,
        getServices
    }


    return (
        <ServicesDataContext.Provider value={features} >
            {children}
        </ServicesDataContext.Provider>
    )
}

export default ServicesContext
