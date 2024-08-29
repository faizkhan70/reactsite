import React from 'react';

const Apply = () => {
  return (
    <section className="bg-[#0A0C1C] text-white py-10 px-6">
      <h2 className="text-center text-4xl font-bold mb-8">
        Explore Our Online Graduation and Post Graduation Courses
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:divide-x md:divide-gray-700">
        {/* Undergraduate Courses */}
        <div className="flex-1 px-4 py-8 md:px-10 md:py-12 text-center">
          <h3 className="text-xl font-bold text-purple-600 mb-4">Undergraduate Courses</h3>
          <p className="mb-6">
            Explore a variety of online undergraduate courses designed to help you gain the foundational knowledge and skills needed for your chosen field.
          </p>
          <button className="mt-4 py-2 px-6 border border-gray-300 rounded text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Postgraduate Courses */}
        <div className="flex-1 px-4 py-8 md:px-10 md:py-12 text-center">
          <h3 className="text-xl font-bold text-purple-600 mb-4">Postgraduate Courses</h3>
          <p className="mb-6">
            Advance your career with our best online specialized postgraduate courses, tailored to provide you in-depth knowledge in your area of expertise.
          </p>
          <button className="mt-4 py-2 px-6 border border-gray-300 rounded text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Apply;
