import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React Icons

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <nav className="relative bg-[#FFF4E3] py-[32px] px-[16px] md:px-[120px] flex justify-between items-center">
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="Pawwelfare Logo"
          className="sm:w-[220px] w-[165px] h-auto object-cover"
        />
      </div>
      
      <div className="md:hidden flex items-center">
        <button onClick={toggleDrawer} className="text-black text-2xl">
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Drawer for mobile menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#FFF4E3] transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} className="text-black text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4 text-[16px]">
          <a href="/" className="text-black hover:text-orange-600 font-semibold" onClick={toggleDrawer}>Home</a>
          <a href="#" className="text-black hover:text-orange-600 font-semibold" onClick={toggleDrawer}>About</a>
          <a href="/pets" className="text-black hover:text-orange-600 font-semibold" onClick={toggleDrawer}>Pet Adoption</a>
          <a href="/contact" className="text-black hover:text-orange-600 font-semibold" onClick={toggleDrawer}>Contact</a>
          <a href="/login" className="text-black hover:text-orange-600 font-semibold" onClick={toggleDrawer}>Login</a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-[16px]">
        <a href="/" className="text-black hover:text-orange-600 font-semibold">Home</a>
        <a href="#" className="text-black hover:text-orange-600 font-semibold">About</a>
        <a href="/pets" className="text-black hover:text-orange-600 font-semibold">Pet Adoption</a>
        <a href="/contact" className="text-black hover:text-orange-600 font-semibold">Contact</a>
        <a href="/login" className="text-black hover:text-orange-600 font-semibold">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
