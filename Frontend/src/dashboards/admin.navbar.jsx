/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      const element = document.documentElement;
        useEffect(() => {
            if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
            }
        }, [theme]);
        const [sticky, setSticky] = useState(false);
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 0) {
              setSticky(true);
            } else {
              setSticky(false);
            }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
    const navItems = (
        <>
            <li>
                <a href="/">
                    Home
                </a>
            </li>
            <li>
                <a href="/admin-dashboard/manage-users">
                    Manage Users
                </a>
            </li>
            <li>
                <a href="/admin-dashboard/manage-trips">
                    Manage Trips
                </a>
            </li>
            <li>
                <a href="/admin-dashboard/manage-questions">
                    Manage Questions
                </a>
            </li>
        </>
    )

  return (
    <>
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
            sticky
              ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
              : ""
          }`}
      >
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M4 6h16M4 12h8m-8 6h16" 
                            />
                            </svg>
                    </div>
                    <ul 
                        tabIndex={0} 
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <a className=" text-2xl font-bold cursor-pointer">Travel World</a>
            </div>
            <div className="navbar-end space-x-3">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                
                <div className="navbar-end">
                <a
                    className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                    Logout
                </a>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Logout</h3>
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                        <button className="btn" onClick={handleLogout}>Yes</button>
                        <button className="btn" onClick={() => document.getElementById("my_modal_3").close()}>No</button>
                    </div>
                    </div>
                </dialog>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
