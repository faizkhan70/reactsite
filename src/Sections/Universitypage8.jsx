import React from "react";
import Transition from "../Transition";

const Universitypage8 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">
          JAIN UNIVERSITY
          </h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://www.jainuniversity.ac.in/crfm/assets/img/banner2.png"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
                Jain University
              </h2>
              <p className="text-gray-700 mb-4">
                Jain University, officially known as JAIN (Deemed-to-be
                University), is a prominent private university located in
                Bengaluru, India. It was established in 1990 and gained its
                deemed-to-be-university status in 20091. The university offers a
                wide range of undergraduate, postgraduate, and research programs
                across various fields such as engineering, management, arts,
                design, and sciences. Jain University is known for its vibrant
                culture, innovative approach, and strong industry connections.
                It has received several accolades, including an A++ grade from
                NAAC and a notable ranking in the NIRF. The university also
                boasts a strong alumni network and provides students with global
                exposure and industry-oriented courses.{" "}
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

export default Universitypage8;
