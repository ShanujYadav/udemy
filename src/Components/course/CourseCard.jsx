import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'

const CourseCard = ({ course }) => {
    const navigate = useNavigate()
    const addToCart = (title) => {

    }

    return (
        <div className="w-full ml-2 max-w-[300px] md:max-w-[260px] sm:max-w-[200px] flex-shrink-0 bg-white border border-gray-200 shadow-md rounded-md">
            <div className="flex flex-col text-gray-700 h-[350px]">
                <div className="relative overflow-hidden bg-gray-300 h-[150px] rounded-t-md">
                    <img src={course.image} alt="Course Image" className="w-full h-full object-cover" />
                </div>

                <div className="p-3 flex flex-col space-y-1">
                    <h5 className="text-lg font-semibold text-gray-900 line-clamp-2 h-[54px]">
                        {course.title}
                    </h5>

                    <p className="text-sm text-gray-600">{course.author}</p>

                    <div className="flex items-center text-yellow-500 text-sm space-x-1">
                        <MdOutlineStar size={18} />
                        <span className="font-medium">{course.rating}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-base font-semibold">
                        <span className="text-gray-500">₹{course.price}</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CourseCard