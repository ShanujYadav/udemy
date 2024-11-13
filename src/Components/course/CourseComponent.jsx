import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiCaller } from '../../utils/ApiCaller';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CourseCard from './CourseCard';
import { IoFilter } from "react-icons/io5";


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

    const [openFilter, setOpenFilter] = useState(false)

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
        })

        console.log('filteredItems----', filteredItems);
        setFilteredCourses(filteredItems);
    }, [selectedCategory, selectedsubCategory, courses])



    const onClickFilter = () => {
        if (openFilter) {
            setOpenFilter(false)
        }
        else {
            setOpenFilter(true)
        }
    }

    const onSelectRating = () => {
        setOpenFilter(false)
    }
    const onSelectPrice = () => {
        setOpenFilter(false)
    }
    const onSelectAuthor = () => {
        setOpenFilter(false)
    }

    return (
        <>
            <section className="py-4 bg-white">
                {/* ------ Category ----- */}
                <div className="flex flex-col">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {Category.map((category, index) => (
                            <span
                                key={index}
                                onClick={() => onSelectCategory(category, index)}
                                className={`cursor-pointer font-semibold text-sm md:text-base lg:text-lg px-2 md:px-4 py-2 relative transition-colors duration-300 ${activeCategory === index ? 'text-purple-700' : 'text-gray-500'
                                    }`}
                            >
                                {category}
                                {activeCategory === index && (
                                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-purple-700" />
                                )}
                            </span>
                        ))}
                    </div>
                    <hr className='bg-gray-400 h-0.5 border-0 mt-4' />
                </div>

                {/* ------ SubCategeory ----- */}
                <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 w-9/10">
                            {SubCategory.map((subCategory, index) => (
                                <button
                                    key={index}
                                    onClick={() => onSelectSubCategory(subCategory, index)}
                                    className={`px-3 md:px-4 py-1 md:py-2 mt-2 text-sm md:text-base rounded-full border border-black transition-colors duration-300 ${activesubCategory === index
                                        ? 'bg-purple-700 text-white'
                                        : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {subCategory}
                                </button>
                            ))}
                        </div>

                        <div className="relative flex items-center gap-2 ml-auto w-1/10">
                            <div className="flex items-center gap-2 w-1/10 hover:cursor-pointer hover:text-purple-700 transition-colors duration-300" onClick={onClickFilter}>
                                <IoFilter className="h-5 w-5" />
                                <span className="">Filter</span>
                            </div>

                            {openFilter && (
                                <div className="absolute z-50 top-1 right-0 mt-4 w-40 bg-white shadow-lg rounded-lg p-4 space-y-2 border ">
                                    <div className="flex flex-col space-y-2">
                                        <button onClick={onSelectRating} className="hover:text-purple-700 transition-colors duration-300 text-gray-700">
                                            Higest Ratings
                                        </button>
                                        <button onClick={onSelectPrice} className="hover:text-purple-700 transition-colors duration-300 text-gray-700">
                                            Lowest Price
                                        </button>
                                        <button onClick={onSelectAuthor} className="hover:text-purple-700 transition-colors duration-300 text-gray-700">
                                            Most Enrolled
                                        </button>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>

                </div>


                {/* ------ Topic ----- */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Slider {...settings}>
                        {filteredCourses.map((course, index) => (
                            <div className="px-2 md:px-4" key={index}>
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default CourseComponent