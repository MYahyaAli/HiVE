"use client"

import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const CareerDescription = () => {
  return (
    <div className="max-w-2xl mt-8 mx-auto">
      <div className="container flex flex-col text-gray-700">
        <div className="container mx-auto flex flex-col bg-white text-gray-600 rounded-sm shadow-md p-6 border-b border-gray-200">
          <h1 className="text-md font-semibold">25 JOBS FOUND</h1>
        </div>
        <div className="container mx-auto flex flex-col bg-white rounded-md shadow-sm p-8 border-b border-gray-200">
          <h1 className="text-lg font-semibold mb-4">Job Title</h1>
          <span className="text-gray-500 flex items-center gap-2">
            <FaLocationDot size={20} /> Job Location
          </span>
          <span className="text-gray-500 flex items-center gap-2">
            <IoTime size={20} /> Job Posted Date
          </span>
          <p className="mt-2 text-gray-700">Job ID....</p>
        </div>
        <div className="container mx-auto flex flex-col bg-white rounded-md shadow-sm p-8 border-b border-gray-200">
          <h1 className="text-lg font-semibold mb-4">Job Title</h1>
          <span className="text-gray-500 flex items-center gap-2">
            <FaLocationDot size={20} /> Job Location
          </span>
          <span className="text-gray-500 flex items-center gap-2">
            <IoTime size={20} /> Job Posted Date
          </span>
          <p className="mt-2 text-gray-700">Job ID....</p>
        </div>
        <div className="container mx-auto flex flex-col bg-white rounded-md shadow-sm p-8 border-b border-gray-200">
          <h1 className="text-lg font-semibold mb-4">Job Title</h1>
          <span className="text-gray-500 flex items-center gap-2">
            <FaLocationDot size={20} /> Job Location
          </span>
          <span className="text-gray-500 flex items-center gap-2">
            <IoTime size={20} /> Job Posted Date
          </span>
          <p className="mt-2 text-gray-700">Job ID....</p>
        </div>
        <div className="container mx-auto flex flex-col bg-white rounded-md shadow-sm p-8 border-b border-gray-200 mb-8">
          <h1 className="text-lg font-semibold mb-4">Job Title</h1>
          <span className="text-gray-500 flex items-center gap-2">
            <FaLocationDot size={20} /> Job Location
          </span>
          <span className="text-gray-500 flex items-center gap-2">
            <IoTime size={20} /> Job Posted Date
          </span>
          <p className="mt-2 text-gray-700">Job ID....</p>
        </div>
      </div>
    </div>
  );
};

export default CareerDescription;
