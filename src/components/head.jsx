import React from 'react';
import { CiSearch } from "react-icons/ci";

function Head() {
    return (
        <div className="px-12 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                    <h3 className="text-xl sm:text-2xl font-medium">
                        Hello kamei <span>👋🏼</span>,
                    </h3>
                </div>

                <div className="flex items-center bg-white rounded-md px-3 py-2 gap-2 w-full sm:w-64">
                    <CiSearch className="text-gray-500 text-2xl" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full outline-none text-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default Head;
