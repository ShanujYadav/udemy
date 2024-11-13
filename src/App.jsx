import About from "./Components/aboutUs/About";
import { Cart, CartPage } from "./Components/Cart/Cart";
import NotFound from "./Components/common/NotFound";
import ContactUs from "./Components/contact/ContactUs";
import Courses from "./Components/course/allCourse/Courses";
import Faqs from "./Components/common/Faqs";
import Footer from "./Components/headerFooter/Footer";
import { Header } from "./Components/headerFooter/Header";
import { LandigPage } from "./Components/Landing/LandigPage";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import Payment from "./Components/Payment/Payment";
import Wishlist from "./Components/Wishlist/Wishlist"
import { Route, Routes } from "react-router-dom"
import Profile from "./Components/Profile/Profile";
import CourseDetails from "./Components/course/allCourse/CourseDetails";
import Help from "./Components/help/Help";
import Careers from "./Components/common/Careers"
import Terms from "./Components/policy/Terms"
import PrivacyPolicy from "./Components/policy/PrivacyPolicy";
import Blogs from "./Components/blog/Blogs";
import CookieSetting from "./Components/policy/CookieSetting";
import VideoUpload from "./Components/VideoUpload/VideoUpload";
import MyCourse from "./Components/myCourse/MyCourse";


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandigPage />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/details" element={<CourseDetails />}></Route>

        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/payment" element={<Payment />}></Route> */}
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/my-course" element={<MyCourse />}></Route>
        <Route path="/teach" element={<VideoUpload />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/cookie-settings" element={<CookieSetting />}></Route>
        <Route path="/video-upload" element={<VideoUpload />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes >
      <Footer />
    </>
  );
};
