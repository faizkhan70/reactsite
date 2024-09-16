import React from 'react';
import Transition from '../Transition';

const Universitypage = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">AMITY UNIVERSITY</h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://amity.edu/Aips/ppshh/images/banner3.jpg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">Amity University</h2>
              <p className="text-gray-700 mb-4">
              is a prominent private university in India, known for its extensive range of programs and high academic standards. Established in 2005 by an Act of the State Legislature of Uttar Pradesh, it has grown to become one of the leading educational institutions in the country              </p>
              <h2 className="text-xl md:text-2xl font-bold mt-4 mb-2">Key Highlights:</h2>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Campuses</h3>
              <p className="text-gray-700 mb-4">
              Amity has multiple campuses across India, including Noida, Lucknow, Jaipur, Gurgaon, Gwalior, Mumbai, Greater Noida, Raipur, Ranchi, Patna, and Kolkata  </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Programs</h3>
              <p className="text-gray-700 mb-4">
              : The university offers over 300 programs across various disciplines, including undergraduate, postgraduate, and doctoral degrees
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Research and Innovation</h3>
              <p className="text-gray-700 mb-4">
              Amity is known for its strong emphasis on research, with over 2,100 patents filed by its faculty¹. It also has numerous government-funded research projects and collaborations with global universities¹.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Accreditations and Rankings</h3>
              <p className="text-gray-700 mb-4">
              Amity is ranked among the top 3% of universities globally and is the only Indian university with the highest US and UK accreditations¹. It is also recognized by the University Grants Commission (UGC) and accredited by the Western Association of Schools and Colleges (WASC), US³.
</p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Student Life</h3>
              <p className="text-gray-700 mb-4">
              he university provides a vibrant campus life with various facilities for learning, sports, and extracurricular activities. It also offers substantial scholarship opportunities and has a strong placement record¹.

Amity University aims to groom professionals who are not only skilled in their fields but also possess strong ethical values. It continues to set benchmarks in global education with its innovative teaching methods and comprehensive curriculum.
              </p>
            </div>

            {/* Apply Button */}
            <div className="w-full text-center mb-8">
              <a
                href="/contact"
                className="inline-block border px-8 py-2 border-black rounded-full hover:bg-white hover:text-black bg-black text-white transition-colors duration-200"
              >
                APPLY
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Universitypage;
