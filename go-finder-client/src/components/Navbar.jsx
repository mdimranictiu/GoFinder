import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = (
    <>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/">Go Finder</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/About-us">About Us</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/Contact">Contact Us</Link>
      </li>
    </>
  );

  const icons = (
    <>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <IoSearchOutline />
      </li>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <MdOutlineAccountCircle />
      </li>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <FaRegHeart />
      </li>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <BsCart2 />
      </li>
    </>
  );

  return (
    <div className="">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex items-center gap-5">
          <div className="lg:hidden">
            <RiMenu2Fill
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#00BADB]">GoFinder</h2>
        </div>
        <div className="max-sm:hidden">
          <ul className="flex flex-row gap-5 text-xl items-center">{links}</ul>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[white] shadow-lg z-50 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex px-10 py-4  justify-between items-center">
          <h2 className="text-xl font-bold ">GoFinder</h2>
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <ul className="px-10 py-5 space-y-4">{links}</ul>
      </div>

      {/* Overlay */}
    </div>
  );
};

export default Navbar;
