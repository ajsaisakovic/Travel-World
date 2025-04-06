/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

function Highlight() {
  const[destination, setDestination] = useState([]);
  useEffect(() => {
      const getDestination = async () => {
          try{
              const res = await axios.get("http://localhost:5000/destination");
              const data = res.data.filter((data) => data.category === "disc");
              console.log(data);
              setDestination(data);
          } catch (error) {
              console.log(error);
          }
      };
      getDestination();
  }, []);


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

    <div className="bg-[#f4f7f7] p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
    <h1 className="font-semibold text-2xl pb-4 text-[#173540] text-center">
        Exclusive Discounts Just for You!
    </h1>
    <p className="text-sm md:text-base text-[#173540] leading-relaxed space-y-3">
        Book now and take advantage of limited-time discounts on select tours and destinations. The more you book, the more you save. Hurry, these deals won’t last long!
        <ul className="list-disc pl-5 mt-3 space-y-2">
            <li className="hover:text-[#ff9412] transition-colors duration-300">
              Up to 30% off on popular destinations</li>
            <li className="hover:text-[#ff9412] transition-colors duration-300">
              Special rates on group bookings</li>
            <li className="hover:text-[#ff9412] transition-colors duration-300">
              Early bird offers for next season’s trips</li>
            <li className="hover:text-[#ff9412] transition-colors duration-300">
              Last-minute deals for spontaneous travelers</li>
            <li className="font-bold text-lg hover:text-[#ff9412] transition-colors duration-300">
              Don’t wait – your next adventure is just a click away!
            </li>
        </ul>
      </p>
    </div>


    <div>
      <Slider {...settings}>
        {destination.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  </div>
  
  </>
  )
}

export default Highlight;