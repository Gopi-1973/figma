import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import hero from "../assets/hero.png";
import { IoIosFlash } from "react-icons/io";
import { PiToolboxFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="w-full mt-10 py-30">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <div className="flex flex-col ">
            <div className="w-[700px] flex flex-col gap-6">
              <h1 className="text-[50px] font-bold text-gray-700 leading-15">
                Nepal Association of{" "}
                <span className="text-blue-600">Foriegn Employment</span>
                Agencies
              </h1>
              <p className="leading-8 text-gray-700 text-lg font-semibold">
                Find You New Job Today! New Job Postings Everyday just for
                you,browse <br /> the job you want and apply wherever you want
              </p>
              <div className="text-md text-gray-600">
                Trending Jobs keyword :
              </div>
            </div>
            <div className="flex gap-3 py-5">
              <button className="bg-white border border-gray-400 shadow rounded-full text-lg text-cyan-500 px-12 py-3 font-medium">
                Electrician General
              </button>
              <button className="px-10 border border-gray-400 shadow rounded-full text-lg text-cyan-500 font-medium">
                Plumber
              </button>
              <button className="px-10 border border-gray-400 shadow rounded-full text-lg text-cyan-500 font-medium">
                Labor/Cleaner
              </button>
            </div>
            <div className="w-[700px] py-5 flex justify-start items-center  bg-blue-50 rounded-full relative mt-6">
              <div className="flex justify-center gap-6 items-center">
                <SlMagnifier className="absolute top-6 left-5 size-7 text-gray-400 texd" />
                <p className="text-gray-400 text-[18px] pl-14">
                  Job title or keyword
                </p>
                <div className="text-gray-500">|</div>

                <div className="flex gap-2 text-xl items-center text-gray-500">
                  <p className="text-2xl">
                    <CiLocationOn />
                  </p>
                  <p className="text-[16px]">Sharjah,UAE</p>
                </div>
              </div>
            </div>
            <button className="absolute bottom-155   bg-blue-500 px-12 py-3  rounded-full text-white text-2xl left-290">
              search
            </button>
          </div>

          <div className="relative z-10 text-center w-full h-[600px] flex items-center justify-center bg-white overflow-hidden">
            <svg
        className="absolute top-10 -right-40 w-full h-full rotate-[-70deg]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        fill="none"
        stroke="#3B82F6" // Tailwind blue-500
        strokeWidth="1"
      >
        <path d="M0 50 Q 200 0 400 50 T 800 50" />
        <path d="M0 100 Q 200 50 400 100 T 800 100" />
        <path d="M0 150 Q 200 100 400 150 T 800 150" />
        <path d="M0 200 Q 200 150 400 200 T 800 200" />
        <path d="M0 250 Q 200 200 400 250 T 800 250" />
        <path d="M0 300 Q 200 250 400 300 T 800 300" />
      </svg>
            <div className="relative w-140 h-140 bg-blue-500 rounded-full mt-8">
              <img
                src={hero}
                alt="heroimg"
                className=" absolutew-140 h-140 rounded-full "
              />
              <div className="absolute bottom-20  opacity-90 bg-gray-100  shadow-xl w-30 h-28 rounded-lg flex items-end justify-center">
                <IoIosFlash className="absolute top-5 left-8 text-3xl text-blue-700" />
                <p className="mb-2">
                  It only takes <br /> a few seconds
                </p>
              </div>
              <div className="absolute flex-col top-20 -right-8 opacity-90 bg-gray-100 shadow-xl w-30 h-28 rounded-lg">
                <PiToolboxFill className="text-4xl text-blue-700" />
                <p className="font-bold text-center  ">10.5k</p>
                <p className=" text-center ">Job Vaccancy</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full h-[60px] bg-blue-50 py-18">
         <div className="flex justify-evenly">
            <div>
                <p className="text-blue-600 text-xl font-bold text-center">500+</p>
                <p className="text-gray-500">Members Agencies</p>
            </div>
            <div>
                <p className="text-blue-600 text-xl font-bold text-center">15+</p>
                <p className="text-gray-500">Years of Service</p>
            </div>
            <div>
                <p className="text-blue-600 text-xl font-bold text-center">50+</p>
                <p className="text-gray-500">Partner Countries</p>
            </div>
            <div>
                <p className="text-blue-600 text-xl font-bold text-center">100K+</p>
                <p className="text-gray-500">Workers Placed</p>
            </div>
         </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
