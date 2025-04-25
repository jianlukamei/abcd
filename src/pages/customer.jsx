// 
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import Table from '../components/table';

export default function Customers() {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Newest', 'Oldest'];

  return (
    <div className=" mx-12 py-6">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        {/* Header + Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          {/* Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">All Customers</h3>
            <span className="text-[#16C098]">Active members</span>
          </div>

          {/* Search & Sort */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5 gap-2 w-full sm:w-64">
              <CiSearch className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            {/* Sort dropdown */}
            <div className="relative w-full sm:w-40">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <span className="font-medium">Sort by:</span>
                <span>{selected || options[0]}</span>
                <FiChevronDown className="text-gray-500 text-sm" />
              </button>
              {isOpen && (
                <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow text-sm z-10">
                  {options.map(option => (
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

        {/* Table wrapper: will scroll on overflow */}
        <div className="">
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
}
