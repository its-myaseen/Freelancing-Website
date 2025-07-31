import React, { useContext } from 'react'
import BlogCard from '../Components/BlogCard'
import PagesHeader from '../Components/PagesHeader'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'
import { BlogDataContext } from '../Contexts/BlogContext'

const Blogs = () => {
    const {data} = useContext(BlogDataContext)
    return (
        <div className='block relative box-border min-h-screen w-screen overflow-hidden text-white px-3 md:px-5 lg:px-10'>

            <PagesHeader Heading={<>My Exclusive Blogs</>} />

            <div className='flex flex-wrap justify-center gap-10 items-center mt-25 pb-20'>
                {
                    data.map((data, ind) => {
                        return <BlogCard data={data} ind={ind} key={ind} />
                    })
                }
            </div>

            <FAQs />
            <Footer />
        </div>
    )
}

export default Blogs
