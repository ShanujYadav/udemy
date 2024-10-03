import React from 'react'
const Hero = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md">
                <div className="flex-1 mb-6 md:mb-0">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Dream Big</h1>
                    <p className="text-lg text-gray-600 mb-5">
                        Level up your skills with courses made for curious minds!! Your next move starts from now.                    </p>
                    <a href='/course' className="no-underline mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        Explore Courses
                    </a>
                </div>
                <div className="flex-1 h-80 md:h-92">
                    <img
                        className="w-full h-full object-contain rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                        src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
                        alt="Instructor Image"
                    />
                </div>
            </div>
        </section>
    )
}
export default Hero