import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg p-4 fixed w-full h-15 z-[999]">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-black text-lg font-bold ml-5 mr-[-50px]">
          <div className="animated-text">
            <img src='https://i.ibb.co/47NBDPg/Site.png' className='w-8 relative ' />
          </div>
        </div>
        <div className="hidden md:flex space-x-4 items-center text-sm gap-5 ml-[100px]">
          <a href="#hero" className="text-black hover:text-gray-400 font-sans">HOME</a>
          <a href="#meeting" className="text-black hover:text-gray-400">MEETING</a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="text-black hover:text-gray-400"
            >
              <a href='#courses'>COURSES</a>
            </button>
          
          </div>
          <a href="#apply" className="text-black hover:text-gray-400">APPLY</a>
          <a href="#contact" className="text-black hover:text-gray-400">CONTACT</a>
        </div>
        <div className="hidden md:flex space-x-4 items-center text-sm gap-2 mr-5">
          <a href="https://www.facebook.com/digiminnion" className="text-black"><FaFacebookF size={18} /></a>
          <a href="https://www.instagram.com/digiminnionofficial" className="text-black"><FaInstagram  size={23} /></a>
          <a href="https://x.com/digiminnion" className="text-black"><FaTwitter size={24}/></a>
          <a href="https://www.linkedin.com/company/digiminnion/" className="text-black"><FaLinkedinIn size={23}/></a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden mt-12 mb-5">
          <a href="/" className="block px-4 py-2 text-black hover:bg-gray-200">HOME</a>
          <a href="#meeting" className="block px-4 py-2 text-black hover:bg-gray-200">MEETING</a>
          <button
            // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            // onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            className="block px-4 py-2 text-black hover:bg-gray-200 focus:outline-none w-full text-left"
          >
           <a href='#courses'>COURSES</a>
          </button>
          {/* {isDropdownOpen && ( */}
       
          {/* )} */}
          <a href="#apply" className="block px-4 py-2 text-black hover:bg-gray-200">APPLY</a>
          <a href="#contact" className="block px-4 py-2 text-black hover:bg-gray-200 mb-5">CONTACT</a>
        </div>
        
      </Transition>
    </nav>
  );
};

export default Navbar;