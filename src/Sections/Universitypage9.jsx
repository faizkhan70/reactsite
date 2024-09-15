import React from "react";
import Transition from "../Transition";

const Universitypage9 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">
            LUNDON METROPOLITAN UNIVERSITY
          </h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://images.shiksha.com/mediadata/images/1535019884phpjug2fa.jpeg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
                London Metropolitan University
              </h2>
              <p className="text-gray-700 mb-4">
                London Metropolitan University, often referred to as London Met,
                is a public research university located in London, England. It
                was formed in 2002 through the merger of the University of North
                London and London Guildhall University1. The university has
                campuses in Holloway and Aldgate, offering a wide range of
                undergraduate and postgraduate courses2. London Met is known for
                its commitment to social justice and sustainability. It has been
                recognized for significant reductions in carbon emissions and is
                dedicated to providing high-quality education and student
                support2. The university also boasts advanced facilities,
                including a state-of-the-art Science Centre with one of Europe’s
                most advanced science teaching labs.{" "}
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

export default Universitypage9;
