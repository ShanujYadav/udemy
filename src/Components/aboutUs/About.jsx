import React, { useState } from 'react';
import { FaStar, FaGraduationCap, FaChartBar, FaCog } from 'react-icons/fa'; // Icons for the left section
import Instructor from '../common/Instructor';
import girl from '../../assets/girl.png'
const AboutUs = () => {

    const [activeCard, setActiveCard] = useState(1)

    const handleCardClick = (index) => {
        setActiveCard(index)
    }

    return (
        <div className="max-w-7xl p-5 mx-auto">
            <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div
                        onClick={() => handleCardClick(1)}
                        className={`cursor-pointer p-4 rounded-lg shadow-lg border-2 ${`activeCard === 1 ? 'border-l-4 border-purple-500 border-gray-300' : 'border-gray-300'`}`}
                    >
                        <div className="flex items-start">
                            <FaStar className={`h - 8 w-8 mr-4 ${`activeCard === 1 ? 'text-purple-500' : 'text-gray-500'`}`} />
                            <div>
                                <h3 className="text-xl font-bold">Hands-on training</h3>
                                <p className="text-gray-600">
                                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => handleCardClick(2)}
                        className={`cursor-pointer p-4 rounded-lg shadow-lg border-2 ${activeCard === 2 ? 'border-l-4 border-purple-500 border-gray-300' : 'border-gray-300'
                            }`}
                    >
                        <div className="flex items-start">
                            <FaGraduationCap className={`h - 8 w-8 mr-4 ${`activeCard === 2 ? 'text-purple-500' : 'text-gray-500'`}`} />
                            <div>
                                <h3 className="text-xl font-bold">Certification prep</h3>
                                <p className="text-gray-600">
                                    Prep for industry-recognized certifications by solving real-world challenges and earning badges along the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Insights and Analytics */}
                    <div
                        onClick={() => handleCardClick(3)}
                        className={`cursor-pointer p-4 rounded-lg shadow-lg border-2 ${activeCard === 3 ? 'border-l-4 border-purple-500 border-gray-300' : 'border-gray-300'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex">
                                <FaChartBar className={`h - 8 w-8 mr-4 ${`activeCard === 3 ? 'text-purple-500' : 'text-gray-500'`}`} />
                                <div>
                                    <h3 className="text-xl font-bold">Insights and analytics</h3>
                                    <p className="text-gray-600">
                                        Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
                                    </p>
                                </div>
                            </div>
                            <span className="bg-purple-100 text-purple-600 font-bold px-2 py-1 rounded-lg text-sm ml-4">
                                Enterprise Plan
                            </span>
                        </div>
                        <a href="#" className="text-purple-600 mt-2 inline-block font-bold">
                            Find out more →
                        </a>
                    </div>

                    {/* Card 4 - Customizable Content */}
                    <div
                        onClick={() => handleCardClick(4)}
                        className={`cursor-pointer p-4 rounded-lg shadow-lg border-2 ${activeCard === 4 ? 'border-l-4 border-purple-500 border-gray-300' : 'border-gray-300'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex">
                                <FaCog className={`h - 8 w-8 mr-4 ${`activeCard === 4 ? 'text-purple-500' : 'text-gray-500'`}`} />
                                <div>
                                    <h3 className="text-xl font-bold">Customizable content</h3>
                                    <p className="text-gray-600">
                                        Create tailored learning paths for team and organization goals and even host your own content and resources.
                                    </p>
                                </div>
                            </div>
                            <span className="bg-purple-100 text-purple-600 font-bold px-2 py-1 rounded-lg text-sm ml-4">
                                Enterprise Plan
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src={girl}
                        alt="Quiz Results"
                        className="rounded-lg shadow-lg w-full lg:w-3/4"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12 bg-white">
                <h2 className="text-4xl font-bold text-center mb-2">
                    Unlock Your Child’s Potential with Fun & Personalized Learning
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    The future of learning starts here—watch your child thrive!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <div className="bg-green-100 p-8 rounded-xl shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-10 h-10 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM16 11h-4v-4h-2v4H8v2h2v4h2v-4h4v-2z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-green-900">
                                Smart Curriculum for All-Round Growth
                            </h3>
                        </div>
                        <ul className="text-sm text-green-700 space-y-2">
                            <li>Designed by experts for early childhood development</li>
                            <li>Interactive games and challenges to keep learning fun</li>
                            <li>Builds a strong foundation in logic, problem-solving, and creativity</li>
                        </ul>
                    </div>

                    <div className="bg-orange-100 p-8 rounded-xl shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-10 h-10 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 2a10 10 0 0110 10v5.64l-2.56-2.55A3.997 3.997 0 0016 14h-2a4 4 0 00-8 0H4a4 4 0 00-1.44.09L1 17.64V12A10 10 0 0112 2z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-orange-900">
                                Personalized Learning with Real-Time Feedback
                            </h3>
                        </div>
                        <ul className="text-sm text-orange-700 space-y-2">
                            <li>Tailored learning paths to suit each child’s pace and style</li>
                            <li>Daily progress reports and achievements to celebrate success</li>
                            <li>Real-time feedback to motivate and inspire continued growth</li>
                        </ul>
                    </div>

                    <div className="bg-purple-100 p-8 rounded-xl shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-10 h-10 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.29 4.71a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l4 4a1 1 0 001.42 0l9-9a1 1 0 000-1.42l-4-4z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-purple-900">
                                Gamified Learning Experience
                            </h3>
                        </div>
                        <ul className="text-sm text-purple-700 space-y-2">
                            <li>Engaging games and activities to keep children excited about learning</li>
                            <li>Rewards and badges to recognize achievements and motivate progress</li>
                            <li>Fun challenges that foster teamwork and social skills</li>
                        </ul>
                    </div>

                    <div className="bg-blue-100 p-8 rounded-xl shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-10 h-10 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-blue-900">
                                24/7 Access to Learning Resources
                            </h3>
                        </div>
                        <ul className="text-sm text-blue-700 space-y-2">
                            <li>Anytime, anywhere access to a wide range of resources</li>
                            <li>Interactive lessons that can be revisited as needed</li>
                            <li>Flexible learning that fits into your family’s schedule</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Instructor />
        </div>
    )
}
export default AboutUs;









// import React from 'react'
// import Topbar from '../common/Topbar'
// import Testimonials from '../testimonials/Testimonials'
// import Number from '../common/Number'

// const About = () => {
//     return (
//         <div>
//             <Topbar
//                 title='About US'
//                 from='Home'
//                 to='about us'
//             />
//             <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
//                 <div class="md:flex items-center -mx-10">
//                     <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
//                         <img alt="..." class="w-full rounded-lg shadow-lg " src='https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
//                     </div>
//                     <div class="w-full md:w-1/2 px-10">
//                         <div class="mb-10">
//                             <h1 class="font-bold  text-3xl mb-4 font-serif">Empowering Lifelong Learning</h1>
//                             <p class="text-base font-serif text-justify">
//                                 We don't just teach subjects — we nurture skills for life. Whether you're looking to ace your exams, upskill for a career, or simply learn something new, our platform is designed to support you every step of the way. We combine deep insights into learning behaviors with cutting-edge technology to create a dynamic, effective educational experience.
//                             </p>
//                         </div>
//                         <div className='text-end'>
//                             <button
//                                 className="inline-flex items-center py-2 px-3 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >Explore Courses
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Number />
//             <Testimonials />
//         </div>
//     )
// }

// export default About