import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiCaller } from '../../utils/ApiCaller';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CourseCard from './CourseCard';

const CourseComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <IoIosArrowForward color='black' size={50} />,
        prevArrow: <IoIosArrowBack color='black' size={50} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [activeCategory, setActiveCategory] = useState(0)
    const [activesubCategory, setactivesubCategory] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedsubCategory, setSelectedsubCategory] = useState('')


    const [courses, setCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])

    const Category = ['It & Software', "development", 'Marketing']
    const SubCategory = ['IT Certifications', 'Web Development', 'Digital Marketing', 'Search Engine Optimization', 'Network & Security']

    const onSelectCategory = (category, index) => {
        setActiveCategory(index)
        setSelectedCategory(category)
        console.log("category----", category)
    }

    const onSelectSubCategory = (subCategory, index) => {
        setactivesubCategory(index)
        setSelectedsubCategory(subCategory)
        console.log('subCategory---', subCategory)
    }


    const fetchCourses = async () => {
        let response = await fetch('https://udemy-vr4p.onrender.com/courses', {
            method: "GET",
        })
        const res = await response.json();
        setCourses(res)
        console.log('response----', res);
    }
    
    useEffect(() => {
        fetchCourses()
    }, [])

    useEffect(() => {
        console.log('selectedCategory----', selectedCategory);
        console.log('selectedSubCategory----', selectedsubCategory);

        const filteredItems = courses.filter((course) => {
            const categoryMatch = selectedCategory ? course.category === selectedCategory : true;
            const subCategoryMatch = selectedsubCategory ? course.sub_category === selectedsubCategory : true;
            return categoryMatch && subCategoryMatch;
        });

        console.log('filteredItems----', filteredItems);
        setFilteredCourses(filteredItems);
    }, [selectedCategory, selectedsubCategory, courses]);

    return (
        <>
            <section className="py-4 bg-white">
                {/* ------ Category ----- */}
                <div className="flex flex-col">
                    <div className="flex flex-wrap justify-center">
                        {Category.map((category, index) => (
                            <span
                                key={index}
                                onClick={() => onSelectCategory(category, index)}
                                className={`cursor-pointer font-bold px-4 py-2 relative transition-colors duration-300 ${activeCategory === index ? 'text-purple-700' : 'text-gray-500'
                                    }`}
                            >
                                {category}
                                {activeCategory === index && (
                                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-purple-700" />
                                )}
                            </span>
                        ))}
                    </div>
                    <hr className='bg-gray-400 h-0.5 border-0' />
                </div>

                {/* ------ SubCategory ----- */}
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <div className="flex space-x-4 justify-center pb-4">
                            {SubCategory.map((subCategory, index) => (
                                <button
                                    key={index}
                                    onClick={() => onSelectSubCategory(subCategory, index)}
                                    className={`px-4 py-2 rounded-full border border-black transition-colors duration-300 ${activesubCategory === index
                                        ? 'bg-purple-700 text-white'
                                        : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {subCategory}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ------ Topic ----- */}
                <div className="container mx-5 py-2">
                    <Slider {...settings}>
                        {filteredCourses.map((course, index) => {
                            return (
                                <CourseCard key={index} course={course} />
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default CourseComponent