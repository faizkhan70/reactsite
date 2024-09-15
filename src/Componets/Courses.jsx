import React from "react";
import { Link } from "react-router-dom";
import Transition from "../Transition";

const ProgramCard = ({ image, badgeText, title, duration, semesterFee, totalFee, link }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-slate-800 shadow-lg">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <span className="absolute top-2 left-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded">
            {badgeText}
          </span>
        </div>
        <div className="p-4 bg-blue-300 h-[17rem] text-black flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <div className="flex items-center text-sm mb-2">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm14 0v14H6V4h12zm-7 9a1 1 0 102 0 1 1 0 00-2 0z"
                clipRule="evenodd"
              />
            </svg>
            {duration} YEAR
          </div>
          {/* Fee Section */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-bold">Semester Fee:</p>
              <p>₹{semesterFee}</p>
            </div>
            <div>
              <p className="font-bold">Total Fee:</p>
              <p>₹{totalFee}</p>
            </div>
          </div>
          {/* Apply Now Button */}
          <Link
            to={link}
            className="mt-4 bg-yellow-400 text-center text-blue-900 font-bold py-2 px-4 rounded"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title:
        "Bachelor of Arts (BA)",
      duration: "03",
      semesterFee: "16,500",
      totalFee: "99,000",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: " Bachelor of Arts in Journalism and Mass Communication (BA-JMC)",
      duration: "03",
      semesterFee: "28,000",
      totalFee: "1,70,000",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "Bachelor of Arts (BA-VERNACULAR)",
      duration: "01",
      semesterFee: "60,000",
      totalFee: "60,000",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "PG PROGRAM",
      title: " Master of Arts in Journalism and Mass Communication (MA-JMC)",
      duration: "02",
      semesterFee: "42,500",
      totalFee: "1,70,000",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "PG PROGRAM",
      title: "MA in Public Policy and Governance (MA-PPG)",
      duration: "02",
      semesterFee: "32,500",
      totalFee: "1,30,000",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "PG PROGRAM",
      title: "Master of Business Administration (MBA)",
      duration: "02",
      semesterFee: "49,750",
      totalFee: "1,99,000",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="py-16 px-40 dm:px-4">
        <Transition />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
