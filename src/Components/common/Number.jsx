import React from 'react';

const Number = () => {
    return (
        <div className='flex items-center justify-center bg-gray-100 px-4 py-12 md:px-24'>
            <div className='w-full'>
                <div className="flex justify-center items-center">
                    <h2 className="text-4xl font-bold mb-4 text-center">Numbers</h2>
                </div>
                <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" id="frameworks-integration">
                    <a className="no-underline grid w-full min-w-[6rem] transform place-items-center rounded-xl border border-blue-100 bg-white shadow-md px-4 py-5 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50" href="#">
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">100+</h3>
                        <p className="text-center text-gray-700 font-medium text-sm">Courses Offered</p>
                    </a>
                    <a className="no-underline grid w-full min-w-[6rem] transform place-items-center rounded-xl border border-blue-100 bg-white shadow-md px-4 py-5 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50" href="#">
                        <h3 className="text-4xl font-bold text-green-600 mb-1">200+</h3>
                        <p className="text-center text-gray-700 font-medium text-sm">Certified Instructors</p>
                    </a>
                    <a className="no-underline grid w-full min-w-[6rem] transform place-items-center rounded-xl border border-blue-100 bg-white shadow-md px-4 py-5 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50" href="#">
                        <h3 className="text-4xl font-bold text-purple-600 mb-1">50K+</h3>
                        <p className="text-center text-gray-700 font-medium text-sm">Students Enrolled</p>
                    </a>
                    <a className="no-underline grid w-full min-w-[6rem] transform place-items-center rounded-xl border border-blue-100 bg-white shadow-md px-4 py-5 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50" href="#">
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">10+</h3>
                        <p className="text-center text-gray-700 font-medium text-sm">Years of Experience</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Number;