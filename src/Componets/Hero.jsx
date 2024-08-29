import React from 'react';


const Hero = () => {
  return (
    <>
    <section className="relative bg-[#0a0a1a] text-white py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-xl font-bold text-purple-500 uppercase mb-4">
            Hello Students
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-200">
            Welcome to Education Meeting
          </h1>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            {/* Button 1 */}
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg font-medium border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Upcoming Meetings
            </a>
            {/* Button 2 */}
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg font-medium border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img
            src="	https://education-meet.netlify.app/assets/teachers-more1-D5eHIh8w.png"  // Replace with your image URL
            alt="Smiling Woman"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
   
 </>
  );
};

export default Hero;
