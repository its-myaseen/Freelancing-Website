import React, { useContext } from 'react'
import PagesHeader from '../Components/PagesHeader'
import ProjectCard from '../Components/ProjectCard'
import image from '../assets/TemporaryProject Image.png'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'
import { ProjectDataContext } from '../Contexts/ProjectContext'

const Projects = () => {
    const { data } = useContext(ProjectDataContext)
    return (
        <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white px-4 sm:px-6 lg:px-10'>
            <PagesHeader Heading={
                <div className="text-center sm:text-left">
                    Not Just Built<br />Engineered.
                </div>
            } />

            <div className='block relative w-full box-border overflow-hidden space-y-4 sm:space-y-5 mt-10 sm:mt-12 lg:mt-15 pb-10 sm:pb-15 lg:pb-20'>
                {
                    data.map((data, ind)=>{
                       return <ProjectCard data={data} key={ind} image={image} />
                    })
                }
            </div>

            <FAQs />
            <Footer />
        </div>
    )
}

export default Projects