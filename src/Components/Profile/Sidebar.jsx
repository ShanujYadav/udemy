import React, { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import Modal from 'react-modal';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";


const Sidebar = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    useEffect(() => {

    }, [])

    const [activeTab, setActiveTab] = useState('/profile')
    const onClickTab = (path) => {
        setActiveTab(path)
        navigate(path)
    }

    return (
        <div class="flex flex-col min-h-screen top-10 left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul class="flex flex-col py-4 space-y-1">
                    <li>
                        <a
                            onClick={() => onClickTab('/profile')}
                            class={`${activeTab == '/profile' ? 'bg-blue-200' : ''} no-underline  relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-2`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <GoHome size={20} color='black' />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Home</span>
                        </a>
                    </li>

                    <li>
                        <a
                            onClick={() => onClickTab('cart')}
                            class={`${activeTab == 'cart' ? 'bg-blue-200' : ''} no-underline relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                < IoCartOutline size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Cart</span>
                        </a>
                    </li>


                    <li>
                        <a
                            onClick={() => onClickTab('wishlist')}
                            class={`${activeTab == 'wishlist' ? 'bg-blue-200' : ''} no-underline relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                < IoMdHeartEmpty size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Wishlist</span>
                        </a>
                    </li>

                    <li>
                        <a
                            onClick={() => onClickTab('history')}
                            class={`${activeTab == 'history' ? 'bg-blue-200' : ''} no-underline relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <MdHistory size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">History</span>
                        </a>
                    </li>

                    <li>
                        <a
                            onClick={() => onClickTab('notification')}
                            class={`${activeTab == 'notification' ? 'bg-blue-200' : ''} no-underline relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <IoMdNotifications size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Notification</span>
                        </a>
                    </li>

                    <li>
                        <a
                            onClick={() => setOpenModal(true)}
                            class={`${activeTab == '/logout' ? 'bg-blue-200' : ''} no-underline  relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <AiOutlineLogout size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

            <Modal
                isOpen={openModal}
                onRequestClose={setOpenModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div class="border p-8 rounded-lg text-center">
                    <div class="text-yellow-500 text-6xl mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <h2 class="text-xl font-semibold mb-2">Are You Want To Logout !</h2>
                    {/* <p class="text-gray-600">You will accept the user if you click on Yes</p> */}
                    <div class="mt-8 flex justify-center space-x-4">
                        <button
                            onClick={() => setOpenModal(false)}
                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">No
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Yes
                        </button>

                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default Sidebar