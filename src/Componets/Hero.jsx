import React from 'react';

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 h-screen"
      >
        <div className="relative z-10 mt-16 dm:w-[50rem]">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-start overflow-hidden">
            {/* Image with Overlay for Opacity Effect */}
            <img
              src="src/assets/Copy of Banner (1).png"
              alt=""
              className="h-screen w-full mt-96 object-cover"
            />
            <div className="absolute inset-0 bg- bg-opacity-60"></div> {/* Overlay */}
          </div>
        </div>
        <div className="relative z-20 max-w-full px-8 lg:px-8 mt-28 dm:mt-60 ms:mt-32">
          <div className="text-left">
            {/* Increased text shadow intensity */}
            <h1
              className="text-4xl font-bold tracking-tight text-black sm:text-4xl"
              style={{ textShadow: "4px 4px 10px rgba(107, 114, 128, 0.9)" }}
            >
              HELLO STUDENTS
            </h1>
            <h1
              className="text-4xl font-bold tracking-tight text-black sm:text-5xl mt-3"
              style={{ textShadow: "4px 4px 10px rgba(107, 114, 128, 0.9)" }}
            >
              WELCOME TO EDUCATION MEETING
            </h1>
            <div className="mt-10 flex items-start justify-start gap-x-4 dm:flex-col">
              <button className="text-lg md:text-xl bg-transparent border rounded-xl border-black text-black py-2 px-4 hover:bg-blue-600 hover:text-white shadow-lg shadow-gray-500">
                Upcoming Meetings
              </button>
              <button className="text-lg md:text-xl dm:mt-4 bg-transparent border rounded-xl border-black text-black py-2 px-4 hover:bg-blue-600 hover:text-white shadow-lg shadow-gray-500">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
