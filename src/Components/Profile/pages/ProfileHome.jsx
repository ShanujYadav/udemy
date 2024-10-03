import React from 'react'
import { FiBook, FiBarChart2, FiUser, FiSettings } from 'react-icons/fi';

const ProfileHome = () => {
    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 pl-0 pr-20 pt-4 lg:pt-6">
                {/* Header */}
                <header className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <h1 className="text-3xl font-semibold text-gray-800">Welcome, [Username]</h1>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition">
                            Notifications
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition">
                            Profile
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced top margin and gap */}
                    {/* Courses Section */}
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-2 text-indigo-600">My Courses</h2>
                        <ul className="space-y-2">
                            <li className="p-2 bg-indigo-50 rounded-lg">Course 1: React Basics</li>
                            <li className="p-2 bg-indigo-50 rounded-lg">Course 2: Advanced JavaScript</li>
                            <li className="p-2 bg-indigo-50 rounded-lg">Course 3: UI/UX Design</li>
                        </ul>
                        <button className="mt-2 text-indigo-600 hover:underline">View All Courses</button>
                    </div>

                    {/* Statistics Section */}
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Course Statistics</h2>
                        <p className="text-lg text-gray-700">
                            Number of Courses: <span className="font-bold">12</span>
                        </p>
                        <p className="text-lg text-gray-700">
                            Total Learning Hours: <span className="font-bold">45h</span>
                        </p>
                        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-indigo-600 rounded-full"></div>
                        </div>
                        <p className="mt-1 text-gray-500">75% Complete</p>
                    </div>

                    {/* Progress Section */}
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Learning Progress</h2>
                        <p className="text-lg text-gray-700">
                            Completed Courses: <span className="font-bold">8</span>
                        </p>
                        <p className="text-lg text-gray-700">
                            In Progress: <span className="font-bold">4</span>
                        </p>
                        <button className="mt-2 text-indigo-600 hover:underline">See More</button>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="mt-4 grid grid-cols-1">
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Profile</h2>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile Avatar"
                                className="w-24 h-24 rounded-full shadow-lg"
                            />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">[Username]</p>
                                <p className="text-gray-500">[Email]</p>
                            </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default ProfileHome