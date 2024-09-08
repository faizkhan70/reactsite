import React from 'react';

const Apply = () => {
  return (
    <section id='apply' className="bg-[#f9fafbd6] h-auto mt-10 text-black py-10 px-6">
      <h2 className="text-3xl font-sanss md:text-5xl mt-14 font-bold text-center text-gray-700 mb-14">
    Explore Our Online Graduation and Post Graduation Courses
        </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:divide-x md:divide-gray-700">
        {/* Undergraduate Courses */}
        <div className="flex-1 px-4 py-8 md:px-10 md:py-12 text-center">
          <h3 className="text-3xl md:text-3xl font-bold font-sanss text-black mb-4">Undergraduate Courses</h3>
          <p className="mb-6">
            Explore a variety of online undergraduate courses designed to help you gain the foundational knowledge and skills needed for your chosen field.
          </p>
          <button className="mt-4 py-2 px-6 border border-gray-300 rounded text-black  hover:bg-blue-600 hover:text-white transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Postgraduate Courses */}
        <div className="flex-1 px-4 py-8 md:px-10 md:py-12 text-center">
          <h3 className="text-3xl md:text-3xl font-sanss font-bold text-black mb-4">Postgraduate Courses</h3>
          <p className="mb-6">
            Advance your career with our best online specialized postgraduate courses, tailored to provide you in-depth knowledge in your area of expertise.
          </p>
          <button className="mt-4 py-2 px-6 border border-gray-300 rounded text-black  hover:bg-blue-600 hover:text-white transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Apply;
