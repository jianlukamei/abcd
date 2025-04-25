import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import desktop from "../assets/images/desktop.png";
import Members from "../assets/images/members.png";
import totalcustomer from "../assets/images/totalcustomer.png";

export default function Counter() {
  return (
    <div className="bg-white mx-12 p-6 rounded-lg shadow-sm mt-10">
      {/* grid: 1 column on mobile, 3 columns on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="flex items-center space-x-4 border-b lg:border-b-0 lg:border-r border-[#F0F0F0] pb-4 lg:pb-0 lg:pr-6">
          <div className="bg-green-100 rounded-full ">
            <img src={totalcustomer} alt="total customers" className="w-20 h-20" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#ACACAC]">Total Customers</p>
            <span className="text-base font-semibold text-gray-900">5,423</span>
            <div className="flex items-center text-xs">
              <span className="flex items-center text-green-400 mr-1">
                <FaArrowUp className="mr-1 text-[10px]" /> 16%
              </span>
              <span className="text-gray-500">this month</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center space-x-4 border-b lg:border-b-0 lg:border-r border-[#F0F0F0] pb-4 lg:pb-0 lg:pr-6">
          <div className="bg-green-100 rounded-full ">
            <img src={Members} alt="members" className="w-20 h-20" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#ACACAC]">Members</p>
            <span className="text-base font-semibold text-gray-900">1,893</span>
            <div className="flex items-center text-xs">
              <span className="flex items-center text-red-400 mr-1">
                <FaArrowDown className="mr-1 text-[10px]" /> 1%
              </span>
              <span className="text-gray-500">this month</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 rounded-full ">
            <img src={desktop} alt="active now" className="w-20 h-20" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#ACACAC]">Active Now</p>
            <span className="text-base font-semibold text-gray-900">189</span>
            <div className="flex -space-x-2 mt-1">
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=4" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
