import React from "react";
import { Link } from "react-router-dom";
import Transition from "../Transition";

const ProgramCard = ({ image, badgeText, title, duration, link }) => {
  return (
    <Link to={link} className="w-full sm:w-72">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-slate-800 shadow-lg">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <span className="absolute top-2 left-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded">
            {badgeText}
          </span>
        </div>
        <div className="p-4 bg-blue-300 h-[9rem] text-black flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <div className="flex items-center text-sm">
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
        </div>
      </div>
    </Link>
  );
};

const Programs = () => {
  const programs = [
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "Bachelor of Technology (B.Tech) in Information Technology (IT)",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "Bachelor of Computer Applications (BCA)",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "Bachelor of Science (B.Sc) in Information Technology",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "B.Tech in Software Engineering",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "B.Tech in Artificial Intelligence and Machine Learning",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "B.Tech in Data Science",
      duration: "03",
      link: "/contact",
    },
    {
      image:
        "https://amityonline.com/_next/image?url=https%3A%2F%2Famityonline.com%2F_s%2FFrame_1000001991_e9e9335b8e_c74eeb0643.webp&w=384&q=75",
      badgeText: "UG PROGRAM",
      title: "B.Tech in Cyber Security",
      duration: "03",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="bg-black h-[400px] flex items-center justify-center">
        <h1 className="font-bold text-center text-white text-3xl md:text-5xl lg:text-8xl">
          UNDERGRADUATE COURSES
        </h1>
      </div>
      <div className="py-16 px-4">
        <Transition />
        <div className="flex flex-wrap gap-6 justify-center">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
