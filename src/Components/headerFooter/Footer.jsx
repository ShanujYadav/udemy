import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gradient-to-r from-purple-700 to-purple-800 pb-6 pt-12 dark:bg-dark lg:pb-10 lg:pt-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 p-4 lg:grid-cols-4">

                    {/* Left Column with Logo and Description */}
                    <div className="mb-8">
                        <a href="/#" className="mb-4 inline-block max-w-[160px]">
                            <img
                                className="h-6"
                                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                                alt="Udemy"
                            />
                        </a>
                        <p className="mb-5 text-base text-white">
                            Top companies choose{" "}
                            <span className="text-purple-300 hover:underline cursor-pointer">
                                Udemy Business
                            </span>{" "}
                            to build in-demand career skills.
                        </p>
                    </div>

                    {/* Navigation Links Columns */}
                    <div className="flex flex-col">
                        <h4 className="mb-2 text-lg font-semibold text-white">Resources</h4>
                        <div className="space-y-1 text-white flex flex-col">
                            <a href='/about' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                About us</a>
                            <a href='/contact' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Contact us</a>
                            <a href='/resources' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Resources</a>
                            <a href='/business' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Udemy Business</a>
                            <a href='/teach' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Teach on Udemy</a>
                            <a href='/app' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Get the app</a>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <h4 className="mb-2 text-lg font-semibold text-white">Company</h4>
                        <div className="space-y-1 text-white flex flex-col">
                            <a href='/about' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Careers</a>
                            <a href='/contact' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Blog</a>
                            <a href='/resources' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Help and support</a>
                            <a href='/business' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                cnkmknk</a>
                            <a href='/teach' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Investors</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="mb-2 text-lg font-semibold text-white">Quick Links</h4>
                        <div className="space-y-1 text-white flex flex-col">
                            <a href='/about' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Terms</a>
                            <a href='/contact' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Privacy policy</a>
                            <a href='/resources' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Cookie settings</a>
                            <a href='/business' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Sitemap</a>
                            <a href='/teach' rel="noopener noreferrer" className="text-white no-underline hover:underline">
                                Accessibility statement</a>
                        </div>
                    </div>
                </div>

                {/* Logos Section */}
                <div className="container mx-auto mt-4 flex justify-between items-center">
                    <div className="text-white lg:ml-4">
                        <p>© 2024 All rights reserved</p>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-4 lg:mr-36">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <GrInstagram className="h-6 lg:h-8 text-black" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="h-6 lg:h-8 text-black" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="h-6 lg:h-8 text-black" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="h-6 lg:h-8 text-black" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <RiTwitterXFill className="h-6 lg:h-8 text-black" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer