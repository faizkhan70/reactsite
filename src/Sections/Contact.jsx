import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { RxEnvelopeClosed } from "react-icons/rx";

const Contact = () => {
  return (
  <div className="flex flex-col md:flex-row justify-center items-center p-8 md:p-16 bg-white ">
        {/* Form Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 ml-[10rem] mt-20 dm:ml-0">
          <h2 className="text-4xl font-bold mb-4 font-sanss">
            Contact Us
          </h2>

          <form className="space-y-4">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute font-sans text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute font-sans text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="phone"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required

              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute font-sans text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 mt-7 group">
              <textarea
                type="text"
                name="message"
                rows={4}
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute font-sans text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your message (optional)
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-50 hover:text-black focus:outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 space-y-6 dm:space-y-20 text-center md:text-left ml-[10rem] dm:ml-0">
          <div>
            <div className="flex justify-center md:justify-start">
              <div className="bg-indigo-600 p-3 rounded-full">
                <RiCustomerService2Line size={40} color="white" />
              </div>
            </div>
            <p className="mt-2 text-[#333333] font-sans">Call us</p>
            <p className="text-lg font-medium font-sans">+91 81889 88301</p>
            <p className="text-lg font-medium font-sans"></p>
          </div>

          <div>
            <div className="flex justify-center md:justify-start">
              <div className="bg-indigo-600 p-3 rounded-full">
                <RxEnvelopeClosed size={40} color="white" />
              </div>
            </div>
            <p className="mt-2 text-[#333333] font-sans">Mail us</p>
            <a  href="mailto:xyz@gmail.com" >
              <p className="text-lg font-medium font-sans">
                xyz@gmail.com
              </p>
            </a>
            <a  href="mailto:info@digiminnion.com" >
            <p className="text-lg font-medium font-sans">
            
            </p>
            </a>
            
          </div>

          <div>
            <p className="mt-2 text-[#333333] font-sans">Follow us on</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="https://www.facebook.com/digiminnion" className="text-[#333333] hover:text-black">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/digiminnionofficial" className="text-[#333333] hover:text-black">
                <FaInstagram size={23} />
              </a>
              <a href="https://x.com/digiminnion" className="text-[#333333] hover:text-black">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/digiminnion/" className="text-[#333333] hover:text-black">
                <FaLinkedinIn size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default Contact