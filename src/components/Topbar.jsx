import React from "react";

function Topbar({ setIsOpen }) {
  return (
    <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <a href="#" className="text-lg font-semibold">Dashboard</a>
      <button onClick={() => setIsOpen(true)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Topbar;
