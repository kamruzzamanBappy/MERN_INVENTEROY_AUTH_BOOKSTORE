import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/*left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>

          {/*search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/*right-side */}
        <div>
          <FaRegUser className="size-6" />
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-[#FFCE1A] p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            <span>0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
