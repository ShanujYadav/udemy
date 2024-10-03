import React from 'react'

const Plans = () => {
    return (
        <>
            {/* <div class="w-full max-w-7xl py-10 bg-gray-100">
                <h2 class="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
                        <h3 class="text-xl font-semibold mb-4">Basic</h3>
                        <p class="text-gray-600 mb-4">For individuals just getting started</p>
                        <p class="text-4xl font-bold mb-6">$9<span class="text-xl font-normal text-gray-600">/month</span></p>
                        <ul class="mb-6 flex-grow">
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                1 User
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                5GB Storage
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Basic Support
                            </li>
                        </ul>
                        <button class="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Choose Plan</button>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1 border-2 border-blue-600">
                        <h3 class="text-xl font-semibold mb-4">Pro</h3>
                        <p class="text-gray-600 mb-4">For growing businesses</p>
                        <p class="text-4xl font-bold mb-6">$29<span class="text-xl font-normal text-gray-600">/month</span></p>
                        <ul class="mb-6 flex-grow">
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                5 Users
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                50GB Storage
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Priority Support
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Advanced Features
                            </li>
                        </ul>
                        <button class="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Choose Plan</button>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
                        <h3 class="text-xl font-semibold mb-4">Enterprise</h3>
                        <p class="text-gray-600 mb-4">For large-scale operations</p>
                        <p class="text-4xl font-bold mb-6">$99<span class="text-xl font-normal text-gray-600">/month</span></p>
                        <ul class="mb-6 flex-grow">
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Unlimited Users
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                500GB Storage
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                24/7 Dedicated Support
                            </li>
                            <li class="flex items-center mb-2">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Custom Solutions
                            </li>
                        </ul>
                        <button class="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Contact Sales</button>
                    </div>
                </div>
            </div> */}

            <section class="bg-gradient-to-r from-purple-900 to-indigo-900 py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
                            Choose Your Plan
                        </h2>
                        <p class="mt-4 text-xl text-purple-200">
                            Unlock the power of decentralized finance with our cutting-edge solutions.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div class="absolute top-0 right-0 m-4">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                    Basic
                                </span>
                            </div>
                            <div class="mb-8">
                                <h3 class="text-2xl font-semibold text-white">Starter Pack</h3>
                                <p class="mt-4 text-purple-200">Perfect for individuals and small teams.</p>
                            </div>
                            <div class="mb-8">
                                <span class="text-5xl font-extrabold text-white">$49</span>
                                <span class="text-xl font-medium text-purple-200">/mo</span>
                            </div>
                            <ul class="mb-8 space-y-4 text-purple-200">
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>10 user accounts</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>100 transactions per month</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Basic reporting</span>
                                </li>
                            </ul>
                            <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                                Get Started
                            </a>
                        </div>

                        <div class="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div class="absolute top-0 right-0 m-4">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    Pro
                                </span>
                            </div>
                            <div class="mb-8">
                                <h3 class="text-2xl font-semibold text-white">Growth Pack</h3>
                                <p class="mt-4 text-purple-200">Ideal for growing businesses and enterprises.</p>
                            </div>
                            <div class="mb-8">
                                <span class="text-5xl font-extrabold text-white">$199</span>
                                <span class="text-xl font-medium text-purple-200">/mo</span>
                            </div>
                            <ul class="mb-8 space-y-4 text-purple-200">
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Unlimited user accounts</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Unlimited transactions</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Advanced analytics</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Priority support</span>
                                </li>
                            </ul>
                            <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                                Get Started
                            </a>
                        </div>

                        <div class="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div class="absolute top-0 right-0 m-4">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                    Enterprise
                                </span>
                            </div>
                            <div class="mb-8">
                                <h3 class="text-2xl font-semibold text-white">Scale Pack</h3>
                                <p class="mt-4 text-purple-200">Tailored for large-scale deployments and custom needs.</p>
                            </div>
                            <div class="mb-8">
                                <span class="text-5xl font-extrabold text-white">Custom</span>
                            </div>
                            <ul class="mb-8 space-y-4 text-purple-200">
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Dedicated infrastructure</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Dedicated support team</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Premium SLAs</span>
                                </li>
                            </ul>
                            <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Plans