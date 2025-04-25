import React, { useState } from "react";
import { IoMdClose, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TbSettings2, TbSquareKey } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineLiveHelp, MdOutlineAccountBalanceWallet } from "react-icons/md";
import profilepic from "../assets/images/profilepic.png";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <TbSquareKey />, label: "Dashboard" },
    { icon: <IoCubeOutline />, label: "Product" },
    { icon: <CgProfile />, label: "Customer" },
    { icon: <MdOutlineAccountBalanceWallet />, label: "Income" },
    { icon: <RiDiscountPercentLine />, label: "Promote" },
    { icon: <MdOutlineLiveHelp />, label: "Help" },
  ];

  return (
    <div className="" >
      {/* Fixed Mini Sidebar */}
      <div className="fixed justify-between top-0 left-0 w-24 h-full bg-white shadow-md flex flex-col items-center py-3 md:py-6  ms-0 md:ms-14 z-50">
      <div className="justify-center items-center flex flex-col gap-12">
      <TbSettings2 className="text-4xl" />
      
      <div className="flex flex-col items-center ">
  {navItems.map(({ icon }, idx) => (
    <span
      key={idx}
      className="text-gray-600 hover:text-white  hover:bg-[#5932EA] px-3 py-2 rounded-lg transform transition-transform duration-300 ease-in-out "
      onMouseEnter={() => setIsOpen(true)}

    >
     <span className="text-2xl "> {icon}</span>
    </span>
  ))}
</div>
      </div>
         <div className="">
         <img className="w-10 h-10 rounded-full mb-6" src={profilepic} alt="profile" />
         </div>
      </div>

      {/* Offcanvas Sidebar */}
      <div className={`fixed py:0 md:py-2 top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
  <div className="flex flex-col  justify-between h-full py-6 px-4">

    {/* Top: Settings Icon */}
    <div>
      <div className="flex justify-between items-center mb-10">
        <TbSettings2 className="text-3xl" />
        <h5 className="text-xl font-semibold">
          Dashboard <span className="text-xs text-[#ACACAC]">v.01</span>
        </h5>
        <button className="text-gray-600"  onMouseLeave={() => setIsOpen(false)}>
          <IoMdClose size={24} />
        </button>
      </div>

      {/* Middle: Navigation */}
      <div className="">
        <ul className="space-y-2 list-none p-0 m-0">
          {navItems.map(({ icon, label }) => (
            <li
              key={label}
              className="flex justify-between no-underline items-center  hover:text-white hover:bg-[#5932EA] px-3 py-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex items-center gap-2 text-2xl">
                {icon}
                <a
                  href="#"
                  className="block text-sm text-black no-underline "
                >
                 <span className="text-gray-700 hover:text-white "> {label}</span>
                </a>
              </div>
              <IoIosArrowForward className="text-sm" />
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom: Profile Section */}
    <div className="flex items-center gap-3 mt-8 md:mt-0">
      <img className="w-10 h-10 rounded-full" src={profilepic} alt="profile" />
      <div className="flex-1">
        <span className="text-base font-medium text-gray-800">Kamei</span>
        <p className="text-sm text-[#ACACAC]">Project Manager</p>
      </div>
      <IoIosArrowDown className="text-gray-500 text-xl" />
    </div>
  </div>
</div>




      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
