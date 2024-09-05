import React from "react";

// Reusable CourseCard Component
const CourseCard = ({ image, title, description, duration }) => (
  <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-[#f9fafbd6] rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <img src={image} alt={title} className="w-full mb-3" />
    <div className="p-4 pt-2">
      <div className="mb-12">
        <p className="text-sm text-black flex items-center">
          <svg
            className="fill-current text-black w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          <button
            type="button"
            className="px-10 py-3 font-sans font-semibold rounded-full bg-transparent border-2 text-black hover:bg-blue-500 hover:text-white"
          >
            Enroll Now
          </button>
        </p>
        <a
          href="#"
          className="text-black font-sanss font-bold text-lg mb-2 mt-5 hover:text-indigo-600 inline-block"
        >
          {title}
        </a>
        <p className="text-black text-sm">
          {description} <br />
          Duration: {duration}
        </p>
      </div>
    </div>
  </div>
);

// Main Courses Component
const Courses = () => {
  // Sample Data
  const coursesData = [
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)",
      // description: "Craft beautiful and interactive web experiences.",
      duration: "3 Months",
    },
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Bachelor of Technology (B.Tech) in Information Technology (IT)",
      // description: "Master the art of server-side programming and databases.",
      duration: "4 Months",
    },
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Bachelor of Computer Applications (BCA)",
      // description: "Become a versatile developer with front-to-backend skills.",
      duration: "6 Months",
    },
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Master of Science (M.Sc) in Information Technology",
      // description: "Turn data into actionable insights and drive decisions.",
      duration: "6 Months",
    },
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "M.Tech in Software Engineering",
      // description: "Dive into the future with AI and machine learning.",
      duration: "8 Months",
    },
    {
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "M.Tech in Artificial Intelligence and Machine Learning",
      // description: "Unlock the power of data to solve real-world problems.",
      duration: "8 Months",
    },
  ];

  return (
    <section
      id="courses"
      className="max-w-screen-full h-screen mx-auto p-5 sm:p-10 md:p-16 bg-[#f9fafbd6] grid-flow-col-dense mb-[35rem] ms:mt-[20rem] dm:mt-[12rem] ms:mb-[152rem] dm:mb-[148rem]"
    >
      <h2 className="text-3xl font-sanss md:text-6xl font-bold text-center text-gray-700 mb-14">
       ALL COURSES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            duration={course.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
