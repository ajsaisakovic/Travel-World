/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";


function Destination() {
    const[destination, setDestination] = useState([]);
    useEffect(() => {
        const getDestination = async () => {
            try{
                const res = await axios.get("http://localhost:5000/destination");
                console.log(res.data);
                setDestination(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getDestination();
    }, []);
  return (
    <>
        <div 
            className= "max-w-screen-2xl container mx-auto md:px-20 px-4"
        >
            <div
                className="mt-28 items-center justify-center text-center"
            >
                <h1 className="text-2xl  md:text-4xl">
                    Start{" "}
                    <span className="text-[#ff9412]"> here!</span>
                </h1>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                {
                    destination.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>

            <Link to="/">
                    <button 
                        className="mt-6 bg-[#ff9412] text-white px-4 py-2 rounded-md hover:bg-[#ff9425]duration-300"
                    >
                        Go back to HomePage
                    </button>
            </Link>
        </div>
    </>
  );
}

export default Destination;