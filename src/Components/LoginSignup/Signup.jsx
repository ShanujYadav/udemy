import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

let baseUrl = process.env.REACT_APP_BASEURL;


const Signup = () => {
  const [userdata, setUser] = useState({ name: "", email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth)

  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  }

  if (user.token !== undefined) {
    return <Navigate to={"/"} />;
  }

  const onClickSignUP = () => {
    let URL = `${baseUrl}/auth/register`
    console.log('baseUrl---', URL)

    dispatch(authFunction(userdata, URL))
  }

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100 pt-5 ">
      <div className="w-[400px] p-6 bg-white border rounded-lg shadow-lg">
        <h4 className="text-2xl font-bold text-center mb-4">
          Sign up Start Learning!
        </h4>
        <hr className="mb-6" />

        <div className="space-y-4">
          {error && (
            <Alert severity="error" className="flex justify-center items-center">
              <p>There was a problem creating your account.</p>
              <p>Check that your email address is spelled correctly.</p>
            </Alert>
          )}

          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
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

            <button
              onClick={onClickSignUP}
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700">
              {loading ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Sign up"
              )}
            </button>

          </div>
          <p className="text-center text-sm">
            By signing up you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <hr className="mt-4 mb-4" />

          <div className="text-center">
            Already have an account?{" "}
            <a href="login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Signup;
