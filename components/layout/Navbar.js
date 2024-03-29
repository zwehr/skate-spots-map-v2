import Link from "next/link";
import { useState } from "react";
import { MdOutlineSkateboarding } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  return (
    <nav className="w-full bg-gray-100 shadow-lg z-10">
      <div className="px-1 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <MdOutlineSkateboarding className="text-2xl text-blue-900 mr-1" />
                <span className="font-bold text-xl">SKATE TOURISM</span>
              </Link>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/map-main"
                className="py-4 px-3 text-gray-700 hover:text-black"
              >
                Map
              </Link>
              <Link
                href="/add"
                className="py-4 px-3 text-gray-700 hover:text-black"
              >
                Add to Database
              </Link>
            </div>
          </div>
          {/* seconday nav */}
          <div className="hidden md:flex items-center space-x-1 pr-3">
            <Link
              href="/login"
              className="py-4 px-3 text-gray-700 hover:text-black"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          {/* mobile hamburger button */}
          <div className="md:hidden flex items-center pr-3">
            <button
              onClick={() => setIsMobileMenuHidden((prevBool) => !prevBool)}
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`md:hidden ${isMobileMenuHidden ? "hidden" : ""}`}>
        <Link
          href="/map-main"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Map
        </Link>
        <Link href="/add" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Add to Database
        </Link>
        <Link
          href="/login"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
