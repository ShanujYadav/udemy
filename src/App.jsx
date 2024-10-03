import About from "./Components/aboutUs/About";
import { CartPage } from "./Components/Cart/Cart";
import NotFound from "./Components/common/NotFound";
import ContactUs from "./Components/contact/ContactUs";
import Courses from "./Components/course/allCourse/Courses";
import Faqs from "./Components/faq/Faqs";
import Footer from "./Components/headerFooter/Footer";
import { Header } from "./Components/headerFooter/Header";
import { LandigPage } from "./Components/Landing/LandigPage";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import Payment from "./Components/Payment/Payment";
import { Product } from "./Components/Product/Product";
import Wishlist from "./Components/Wishlist/Wishlist"
import { Route, Routes } from "react-router-dom"
import Number from "./Components/common/Number";
import { ProfileContextProvider } from "./Components/Profile/ProfileContext";
import Profile from "./Components/Profile/Profile";


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandigPage />}></Route>
        <Route path="/courses" element={<Product />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/profile/*" element={
          <ProfileContextProvider>
            <Profile />
          </ProfileContextProvider> 
        }> </Route>

        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/num" element={<Number />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes >
      <Footer />
    </>
  );
};
