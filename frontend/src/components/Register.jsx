import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth();
  console.log(registerUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // register user

  const onSubmit = async (data) => {
    console.log(data);

    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully!");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[calc(100vh-120px)] border border-gray-300 flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-8 text-white rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>

        <p className="aline-baseline font-medium mt-4 text-sm">
          Haven't an account ? Please
          <Link to="/login" className="text-blue-400 hover:text-blue-700 ml-1">
            Login
          </Link>
        </p>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>

        <p className="mt-5 text-center text-gray-500">
          @2025 Book Store. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Register;
