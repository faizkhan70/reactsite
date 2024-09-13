import React from "react";
import Transition from "../Transition";

const Universitypage10 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">
          UTTARANCHAL UNIVERSITY
          </h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1X-Dqq7_EZ7uEo-dnZ4FZjPFgeek8FX4Vw&s"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
                Uttaranchal University
              </h2>
              <p className="text-gray-700 mb-4">
                Uttaranchal University, located in Dehradun, Uttarakhand, is a
                well-regarded private university established in 20131. It offers
                a variety of undergraduate, postgraduate, and doctoral programs
                across disciplines such as engineering, management, law,
                pharmacy, and applied sciences12.{" "}
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">
                Here are some key highlights:
              </h3>
              <p className="text-gray-700 mb-4">
                Accreditation and Recognition: The university is accredited by
                the University Grants Commission (UGC) and has received several
                accolades for its academic excellence1.
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">
                Courses and Programs :
              </h3>
              <p className="text-gray-700 mb-4">
                Uttaranchal University provides a wide range of programs,
                including B.Tech, MBA, LLB, and more2.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">
                Campus and Facilities:
              </h3>
              <p className="text-gray-700 mb-4">
                The university boasts modern infrastructure, well-equipped
                laboratories, libraries, and hostels.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">
                Placements:
              </h3>
              <p className="text-gray-700 mb-4">
                It has a strong placement cell with numerous top companies
                visiting the campus for recruitment.
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

export default Universitypage10;
