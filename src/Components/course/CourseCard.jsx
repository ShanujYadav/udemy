import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
const navigate=useNavigate()
    const addToCart = (title) => {

    }

    return (
        <div className="w-full ml-2 max-w-[300px] md:max-w-[260px] sm:max-w-[200px] flex-shrink-0 bg-gray-100 border border-gray-900 shadow-md bg-gray-100 rounded-md">
            <div className="flex flex-col rounded-xl text-gray-700  h-[350px]">
                <div className="relative overflow-hidden bg-blue-gray-500 h-[150px] rounded-md">
                    <img src={course.image} alt="Video Img" className="w-full h-full object-cover" />
                </div>
                <div className="flex w-full p-2">
                    <div className="w-[85%]">
                        <h5 className="text-lg md:text-base sm:text-sm font-medium text-blue-gray-900 text-justify line-clamp-2">
                            {course.title}
                        </h5>
                    </div>
                    <div className="w-[15%] flex items-center text-yellow-700 text-base sm:text-sm">
                        <MdOutlineStar color="golden" size={20} />{course.rating}
                    </div>
                </div>

                <div className="px-2 flex flex-col">
                    <span className="text-base sm:text-sm text-black">{course.author}</span>
                    <span className="text-base sm:text-sm text-black">{course.level}</span>
                    <span className="text-base sm:text-sm text-black">₹ <span className='text-purple-600 font-semibold'> {course.price}</span>
                    </span>
                </div>

                <div className="p-2 mt-auto flex space-x-3">
                    <button
                    onClick={()=>navigate('/courses')}
                     className="w-1/2 rounded-md bg-transparent px-3 py-2 text-xs text-black uppercase font-semibold shadow-md transition hover:bg-gray-800">
                        View Details
                    </button>
                    <button
                        className="w-1/2 rounded-md bg-purple-600 px-3 py-2 text-xs text-white uppercase font-semibold shadow-md transition hover:bg-purple-700"
                        onClick={() => addToCart({ title: "Course 1" })}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard