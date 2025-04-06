/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
    const{
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) =>{
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:5000/user/signup", userInfo)
        .then((res) => {
            console.log(res.data);
            if(res.data){
                alert("Signup successful");
            }
        }).catch((err) => {
            console.log(err);
            alert("Signup failed. Error: " + err.response.data.message+ " Please try again");
        });
    };

  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </Link>
                <h3 className="font-bold text-lg">Signup</h3>

                <div className="mt-4 space-y-2">
                    <span>Name</span>
                    <br/>
                    <input 
                        type="text"
                        placeholder="Enter your fullname"
                        className="w-80 px-3 py-1 border rounded-md outline-none"
                        {...register("fullname", { required: true })}
                    />
                    <br/>
                    {errors.fullname && 
                    <span className="text-sm text-red-500">
                        This field is required
                    </span>}
                </div>

                <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br/>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        className="w-80 px-3 py-1 border rounded-md outline-none"
                        {...register("email", { required: true })}
                        />
                        <br/>
                        {errors.email && 
                        <span className="text-sm text-red-500">
                            This field is required
                        </span>}
                </div>

                <div className="mt-4 space-y-2">
                    <span>Password</span>
                    <br/>
                    <input 
                        type="password"
                        placeholder="Enter your password"
                        className="w-80 px-3 py-1 border rounded-md outline-none"
                        {...register("password", { required: true })}
                    />
                    <br/>
                    {errors.password && 
                    <span className="text-sm text-red-500">
                        This field is required
                        </span>}
                </div>

                <div className="flex justify-around mt-6">
              <button className="bg-[#ff9412] text-white rounded-md px-3 py-1 hover:bg--[#ff9425] duration-200">
                Signup
              </button>
              <p className="text-xl">
                Already have an account?{" "}
                    <Link
                        to="/login"
                        className="underline text-[#ff9412] cursor-pointer"
                    >
                        Login
                    </Link>{" "}
                </p>
            </div>
            </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default Signup;
