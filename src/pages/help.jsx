import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CiSearch } from "react-icons/ci";
import Table from '../components/table';
function Help(){
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Newest', 'Oldest'];
    return(
        <div className="bg-white rounded-lg p-4 shadow-sm mt-10 mx-4">
 <div className="px-6 py-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                    <h3 className="text-xl sm:text-2xl font-medium">
                     All Product
                    </h3>
                    <span className="text-[#16C098]">Active members</span>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
      {/* Search Input */}
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5 gap-2 w-44 md:w-56">
        <CiSearch className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center gap-1 text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
        >
          <span className="font-medium">Sort by:</span>
          <span>{selected}</span>
          <FiChevronDown className="text-gray-500 text-sm mt-0.5" />
        </div>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow text-sm">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected === option ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
            </div>
        </div>
        <Table title={"Customers"} /> 
        </div>
    )
}
export default Help;