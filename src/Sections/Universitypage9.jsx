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
          LUDING MAXIMILIAN UNIVERSITY
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
                Shoolini University
              </h2>
              <p className="text-gray-700 mb-4">
                Shoolini University, established in 2009, is a private research
                university located in Solan, Himachal Pradesh, India1. It is
                known for its strong emphasis on research and innovation, with a
                significant number of patents filed1. The university offers a
                wide range of undergraduate, postgraduate, and doctoral programs
                across various fields such as management, biotechnology,
                engineering, sciences, media, communications, liberal arts,
                legal sciences, and design12. Shoolini University is accredited
                by the University Grants Commission (UGC) and has received a B++
                grade from NAAC2. It has also been recognized in various
                national and international rankings, including being ranked
                among the top private universities in India12. The university is
                known for its modern infrastructure, strong industry
                partnerships, and a focus on providing a clean and safe campus
                environment1. It also offers numerous opportunities for students
                to engage in real-world research and placements with top
                companies1.{" "}
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
