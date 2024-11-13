import React from 'react'
import { FaBookOpen, FaUser, FaTrophy } from "react-icons/fa";


const MyCourse = () => {
    return (
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">My Courses</h2>
            <ul className="space-y-6 w-full">
                {[
                    {
                        title: "React Native For Beginners",
                        rating: "4.5",
                        reviews: "38,571",
                        price: "₹3,099",
                        totalHours: "55 total hours",
                        updated: "8/2023",
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        title: "React Native For Beginners",
                        rating: "4.6",
                        reviews: "97,652",
                        price: "₹3,699",
                        totalHours: "67 total hours",
                        updated: "8/2020",
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        title: "Introduction to Web Development",
                        rating: "4.5",
                        reviews: "25,305",
                        price: "₹2,499",
                        totalHours: "2 total hours",
                        updated: "4/2016",
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        title: "Ultimate Web Designer & Web Developer Course",
                        rating: "4.6",
                        reviews: "83,568",
                        price: "₹3,699",
                        totalHours: "35 total hours",
                        updated: "3/2022",
                        bestseller: true,
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        title: "Introduction to Programming",
                        rating: "4.7",
                        reviews: "7,649",
                        price: "₹3,499",
                        totalHours: "12 total hours",
                        updated: "1/2017",
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        title: "The Complete Web Development Course - Build 15 Projects",
                        rating: "4.4",
                        reviews: "42,256",
                        price: "₹3,699",
                        totalHours: "99.5 total hours",
                        updated: "9/2024",
                        imgSrc: "https://plus.unsplash.com/premium_photo-1681248156475-be7454b5d54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                ].map((course, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 space-y-4 md:space-y-0"
                    >
                        <img
                            src={course.imgSrc}
                            alt={course.title}
                            className="w-full md:w-20 md:h-20 object-cover rounded mr-0 md:mr-4"
                        />
                        <div className="flex-1 mb-2 md:mb-0">
                            <p className="text-lg font-semibold">{course.title}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                                <div className="flex items-center space-x-2">
                                    <FaBookOpen className="text-xs" />
                                    <h2 className="text-xs">Lesson-8</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaUser className="text-xs" />
                                    <h2 className="text-xs">Student-367</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaTrophy className="text-xs" />
                                    <h2 className="text-xs">Medium</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4">
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none">
                                Let's Go
                            </button>
                            <span className="text-gray-800 font-semibold text-lg">{course.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyCourse