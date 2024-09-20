import React, { useState } from "react";
import { ColorButton } from "../ProdCard/popperprodcard";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [userdata, setUser] = useState({ email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };

  if (user.token !== undefined) {
    console.log(user._id);
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="w-[350px] p-6 bg-white border rounded-lg shadow-lg">
        <h4 className="text-xl font-bold text-center mb-4">
          Log In to Your Udemy Account!
        </h4>
        <hr className="mb-6" />

        <div className="space-y-4">
          {error && (
            <Alert className="mb-4" severity="error">
              <p>There was a problem logging in.</p>
              <p>Check your email and password or create an account.</p>
            </Alert>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex justify-center">
            <ColorButton
              onClick={() => {
                const URL = "https://udemy-vr4p.onrender.com/join/login-popup";
                dispatch(authFunction(userdata, URL));
              }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              {loading ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Log in"
              )}
            </ColorButton>
          </div>

        </div>

        <div className="text-center mt-4">
          <span>or </span>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password
          </a>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Log in to a different account
          </a>
        </div>

        <div className="text-center mt-6">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Log in with your organization
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
