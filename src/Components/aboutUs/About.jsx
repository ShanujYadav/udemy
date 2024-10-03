import React from 'react'
import Topbar from '../common/Topbar'
import Testimonials from '../testimonials/Testimonials'
import Number from '../common/Number'

const About = () => {
    return (
        <div>
            <Topbar
                title='About US'
                from='Home'
                to='about us'
            />
            <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-10">
                    <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <img alt="..." class="w-full rounded-lg shadow-lg " src='https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </div>
                    <div class="w-full md:w-1/2 px-10">
                        <div class="mb-10">
                            <h1 class="font-bold  text-3xl mb-4 font-serif">Empowering Lifelong Learning</h1>
                            <p class="text-base font-serif text-justify">
                                We don't just teach subjects — we nurture skills for life. Whether you're looking to ace your exams, upskill for a career, or simply learn something new, our platform is designed to support you every step of the way. We combine deep insights into learning behaviors with cutting-edge technology to create a dynamic, effective educational experience.
                            </p>
                        </div>
                        <div className='text-end'>
                            <button
                                className="inline-flex items-center py-2 px-3 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >Explore Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Number />
            <Testimonials />
        </div>
    )
}

export default About