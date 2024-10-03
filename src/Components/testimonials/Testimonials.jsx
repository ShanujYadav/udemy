import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStar } from 'react-icons/md';
import { testimonials } from './testimonialData';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <IoIosArrowForward color='black' size={50} />,
        prevArrow: <IoIosArrowBack color='black' size={50} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div className="container mx-auto px-4 py-6 ">
            <h2 className="text-4xl font-bold mb-4 flex justify-center">Testimonials</h2>
            <Slider {...settings} className="mx-[-0.5px]">
                {testimonials.map((data, index) => {
                    return (
                        <TestimonialCard key={index} data={data} />
                    )
                })}
            </Slider>
        </div>
    );
};

export default Testimonials;