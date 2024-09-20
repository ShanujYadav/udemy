import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu"; // For burger menu
import CloseIcon from "@mui/icons-material/Close"; // For closing menu
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Redux/login/action";
import { addToCart } from "../../Redux/cart/action";

export const Header = () => {
  const { cart } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token")) || null;
    if (user.user == null && token != null) {
      dispatch(auth(token));
    }
    if (token != null) {
      axios
        .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
        .then(({ data }) => {
          dispatch(addToCart(data.length));
        });
    }
  }, [dispatch, user.user]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-6">
          <Link to={"/"} className="flex items-center space-x-2">
            <img
              className="h-6"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
            />
          </Link>
          <nav className="hidden md:block">
            <button className="text-sm font-semibold text-gray-700">
              Categories
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4 w-1/2">
          <button className="text-gray-500">
            <SearchIcon />
          </button>
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile Burger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation Links and User Interaction */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to={"#"} className="text-sm text-gray-700">
            Udemy Business
          </Link>
          <Link to={"#"} className="text-sm text-gray-700">
            Teach on Udemy
          </Link>

          {user?.user != null && (
            <Link to={"#"} className="text-sm text-gray-700">
              My learning
            </Link>
          )}

          {user?.user != null && (
            <Link to={"/wishlist"}>
              <button className="relative">
                <FavoriteBorderOutlinedIcon className="text-gray-700" />
              </button>
            </Link>
          )}

          <Link to={"/cart"}>
            <button className="relative">
              <Badge color="secondary" badgeContent={cart}>
                <ShoppingCartOutlinedIcon className="text-gray-700" />
              </Badge>
            </button>
          </Link>

          {user?.user != null && (
            <Link to={"#"}>
              <button className="relative">
                <Badge color="secondary" badgeContent={0}>
                  <NotificationsNoneOutlinedIcon className="text-gray-700" />
                </Badge>
              </button>
            </Link>
          )}

          {user?.user != null && (
            <Link to={"#"}>
              <button className="relative">
                <Badge
                  color="secondary"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {user.user?.name[0].toUpperCase()}
                  </Avatar>
                </Badge>
              </button>
            </Link>
          )}

          {user?.user == null && (
            <>
              <Link to={"/join/login-popup"}>
                <button className="px-2 py-1 text-sm text-gray-700 border border-gray-300 rounded-md">
                  Log in
                </button>
              </Link>
              <Link to={"/join/signup-popup"}>
                <button className="px-2 py-1 bg-black text-white rounded-md">
                  Sign up
                </button>
              </Link>
              <Link to={"#"}>
                <button className="p-1 border border-gray-300 rounded-md">
                  <LanguageIcon className="text-gray-700" />
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white shadow-md">
          <Link to={"#"} className="text-sm text-gray-700">
            Udemy Business
          </Link>
          <Link to={"#"} className="text-sm text-gray-700">
            Teach on Udemy
          </Link>

          {user?.user != null && (
            <Link to={"#"} className="text-sm text-gray-700">
              My learning
            </Link>
          )}

          {user?.user != null && (
            <Link to={"/wishlist"}>
              <button className="relative">
                <FavoriteBorderOutlinedIcon className="text-gray-700" />
              </button>
            </Link>
          )}

          <Link to={"/cart"}>
            <button className="relative">
              <Badge color="secondary" badgeContent={cart}>
                <ShoppingCartOutlinedIcon className="text-gray-700" />
              </Badge>
            </button>
          </Link>

          {user?.user != null && (
            <Link to={"#"}>
              <button className="relative">
                <Badge color="secondary" badgeContent={0}>
                  <NotificationsNoneOutlinedIcon className="text-gray-700" />
                </Badge>
              </button>
            </Link>
          )}

          {user?.user != null && (
            <Link to={"#"}>
              <button className="relative">
                <Badge
                  color="secondary"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {user.user?.name[0].toUpperCase()}
                  </Avatar>
                </Badge>
              </button>
            </Link>
          )}

          {user?.user == null && (
            <>
              <Link to={"/join/login-popup"}>
                <button className="px-2 py-1 text-sm text-gray-700 border border-gray-300 rounded-md">
                  Log in
                </button>
              </Link>
              <Link to={"/join/signup-popup"}>
                <button className="px-2 py-1 bg-black text-white text-sm rounded-md">
                  Sign up
                </button>
              </Link>
              <Link to={"#"}>
                <button className="p-2 border border-gray-300 rounded-md">
                  <LanguageIcon className="text-gray-700" />
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};
