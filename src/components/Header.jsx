import React from "react";
import logo from "../assets/logo.jpeg";


const Header = () => {
  return (
     <>
    <nav className="w-full bg-white shadow-md py-9 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-3">
            
        <div>
          <img src={logo} alt="logo" className="w-6" />
        </div>
        <div className="flex flex-col w-[320px] text-[12px]">
          <h2 className="text-blue-700">
            Nepal Association of Foriegn Employment Agencies
          </h2>
          <h3 className="text-red-700">नेपाल वैदेशिक रोजगार ब्यवसायिक संघ</h3>
          <h4 className="text-blue-700">NAFEA</h4>
        </div>
        </div>

        <ul className="flex justify-center items-center text-2xl font-medium text-gray-700 gap-10">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Jobs">Jobs</a></li>
            <li><a href="#ResumeMaker">Resume Maker</a></li>
            <li><a href="#Blogs">Blogs</a></li>
        </ul>

        <div className="flex text-gray-700 font-medium gap-8">
            <button className="text-2xl">Login</button>
            <button className="bg-blue-500 px-10 py-4 rounded-full text-lg font-semibold text-white">Sign Up</button>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Header;
