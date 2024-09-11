import React from 'react';
import Transition from '../Transition';

const Universitypage3 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">DPU UNIVERSITY</h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://dpu.edu.in/img/compression/medical-clg.jpg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">D.Y. Patil University</h2>
              <p className="text-gray-700 mb-4">
              D.Y. Patil University is a well-known private university in India, recognized for its comprehensive educational programs and state-of-the-art facilities. Here are some key highlights:
Overview:
</p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Established
              </h3>
              <p className="text-gray-700 mb-4">
              The university was founded in 1983 by Dr. D.Y. Patil, a renowned educationist and philanthropist1.

  </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Campuses:
              </h3>
              <p className="text-gray-700 mb-4">
              It has multiple campuses, including in Navi Mumbai and Pune, each offering a unique blend of academic rigor and practical experience12.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Academic Programs:
              </h3>
              <p className="text-gray-700 mb-4">
              Undergraduate Programs: Offers a wide range of bachelor’s degrees in fields such as Engineering, Health and Allied Sciences, Business Management, Sports, Biotechnology, Bioinformatics, and Hospitality & Tourism Studies1.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Postgraduate Programs:</h3>
              <p className="text-gray-700 mb-4">
              Includes master’s degrees and specialized programs across various disciplines1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Doctoral Programs:</h3>
              <p className="text-gray-700 mb-4">
              Provides opportunities for advanced research and specialization in multiple fields1.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Certificate and Fellowship Programs</h3>
              <p className="text-gray-700 mb-4">
              Designed to enhance specific skills and provide hands-on experience under the guidance of experienced mentors1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Features:
              </h3>
              <p className="text-gray-700 mb-4">
              Accreditation: The university is accredited by the University Grants Commission (UGC) and has received an A++ grade from NAAC3.
Research and Innovation: Emphasizes research-driven culture with numerous government-funded projects and collaborations with global institutions1.
Global Alumni Network: Boasts over 55,000 alumni worldwide, many of whom hold leadership positions in various industries1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Campus Life:
              </h3>
              <p className="text-gray-700 mb-4">
              Facilities: Equipped with modern infrastructure, including libraries, laboratories, sports complexes, and hostels1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Student Activities:
              </h3>
              <p className="text-gray-700 mb-4">
              Offers a vibrant campus life with numerous clubs, societies, and events to foster holistic development1.
              D.Y. Patil University aims to provide a nurturing environment that promotes academic excellence and prepares students for global challenges              </p>
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

export default Universitypage3;
