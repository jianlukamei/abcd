import React, { useState } from "react";
import Sidebar from './components/sidebar';
import MainContent from './components/main';
import Topbar from './components/Topbar';

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="min-h-screen flex ">
       {/* Sidebar */}
     <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
        <Sidebar setIsOpen={setIsOpen} />
      </div>
      {/* Main Area */}
      <div className="flex-1 flex flex-col  md:mr-44 md:ml-58 md-0 py-0 md:py-10">
        <Topbar setIsOpen={setIsOpen} />
     <MainContent />
      </div> 

      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default DashboardLayout;
