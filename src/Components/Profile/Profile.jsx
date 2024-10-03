import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProfileContextProvider } from "./ProfileContext"
import Sidebar from "./Sidebar";
import ProfileHome from "./pages/ProfileHome";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Notifications from "./pages/Notifications";
import Wishlist from "./pages/Wishlist";



const Profile = () => {


  const navigate = useNavigate()
  const [currentTab, setCurrentTab] = useState('Dashboard')
  return (
    <ProfileContextProvider>
      <div className="min-h-screen flex flex-row antialiased bg-stone-100 dark:bg-gray-700 text-black dark:text-white">
        <Sidebar />
        <div className="flex-auto ml-14 mt-6 mb-10 md:ml-64">
          <Routes>
            <Route path="/" element={<ProfileHome />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/history" element={<History />} />
            <Route path="/notification" element={<Notifications />} />
          </Routes>
        </div>
      </div>

    </ProfileContextProvider>
  )
}
export default Profile











// import React from 'react'
// import "./ProfileBar.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LaunchIcon from '@mui/icons-material/Launch';
// import LanguageIcon from '@mui/icons-material/Language';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



// export const Profile = () => {
//   return (
//     <div className='profileBox grey'>
//       <div className='flex'>
//         <img src="https://www.udemy.com/user/edit-profile/" alt="" />
//         <AccountCircleIcon className='profileIcon' />
//         <div className='ProfileName'>
//           <h3 className='colorChange'>{"Piyush"}</h3>
//           <p>{"email@gmail.com"}</p></div>
//       </div>

//       <hr className=' hrs' />

//       <p className='colorChange'>My learning</p>
//       <p className='colorChange'>My cart</p>
//       <div className='flex'>
//         <p className='colorChange'>wishlist</p>
//         {<AddCircleOutlineIcon className='purpal wishicon' />}
//       </div>
//       <p className='colorChange'>Teach on Udemy</p>

//       <hr className=' hrs' />

//       <p className='colorChange'>Notifications</p>
//       <p className='colorChange'>Messages</p>

//       <hr className=' hrs' />

//       <p className='colorChange'>Account settings</p>
//       <p className='colorChange'>Payment methods</p>
//       <p className='colorChange'>Udemy credits</p>
//       <p className='colorChange'>Purchase history</p>

//       <hr className=' hrs' />

//       <div className='flex'>
//         <span><p className='colorChange leftPicon'>language</p></span>
//         <p>English</p>
//         <LanguageIcon className='icons' />
//       </div>

//       <hr className=' hrs' />

//       <p className='colorChange'>Public prifile</p>
//       <p className='colorChange'>Edit profile</p>

//       <hr className=' hrs' />

//       <p className='colorChange'>Help</p>
//       <p className='colorChange'>Log out</p>

//       <hr className=' hrs' />

//       <div className='flex'>
//         <span><h4 className='colorChange leftPicon'>Udemy Business</h4></span>
//         <LaunchIcon className='icons2' />
//       </div>
//       <p>Bring learning to your company</p>

//     </div>
//   )
// }


