import React from 'react'
import Hero from "../common/Hero";
import Partner from "../common/Partner";
import Plans from '../common/Plans';
import Testimonials from '../testimonials/Testimonials';
import Tranding from '../tranding/Tranding';
import CourseComponent from '../course/CourseComponent';
import Topbar from '../common/Topbar';

export const LandigPage = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <Hero />
        <section className="py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              A broad selection of courses
            </h2>
            <p className="text-lg text-gray-600">
              Choose from 183,000 online video courses with new additions published every month
            </p>
          </div>
        </section>
        <CourseComponent />
        <Tranding />
        <Partner />
        <Plans />
        <Testimonials />
        <Topbar/>
      </div>
    </>
  )
}