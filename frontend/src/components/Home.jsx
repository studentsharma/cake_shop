import React, { useEffect, useState } from 'react'
import cake_img from "../assets/cake_img.png"
import Card from './Card'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const navigate = useNavigate();

  const [cakes, setCakes] = useState([]); // Use plural naming for clarity

  useEffect(() => {
    async function getCakes() {
      try {
        const response = await axios.get('http://localhost:3000/'); // Make sure the API endpoint is correct
        setCakes(response.data); // Only store the actual data
        // console.log(response.data); // Log the correct response
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    }

    getCakes(); // Call the function inside useEffect
  }, []); // Empty dependency array to ensure it runs only once

  console.log(cakes)


  return (
    <>
    <div className='flex gap-8'>
        <div className="max-w-3xl text-left mt-40 ml-40">
        {/* Logo Text */}
        <h1 className="text-5xl font-bold">
          <span className="text-black italic">Sweety </span>
          <span className="text-pink-500 italic font-semibold">By You</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg mt-4">
          Unlock the art of cake baking with our step-by-step tutorials and videos, 
          and choose from our store's exquisite selection or customize your perfect cake.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button onClick={() => navigate("/About")} className="bg-pink-500 text-white px-5 py-2 rounded-full text-lg shadow-md hover:bg-pink-600 transition">
            Read More
          </button>
          <button onClick={() => navigate("/Orders")} className="border border-black text-black px-5 py-2 rounded-full text-lg hover:bg-gray-100 transition">
            Order Now
          </button>
        </div>
      </div>

      <div className='m-20 w-2/3 '>
            <img src={cake_img} alt="" />
      </div>
    </div>
 
    <div  className=' flex justify-center '>
        <div className='w-2/3'>
          <Slider {...settings}>
            {cakes.map((cake) => (
              <Card key={cake.cake_id} cake_id={cake.cake_id} price={cake.price} />
            ))}
          </Slider>
        </div>
    </div>
  </>
  )
}

export default Home
