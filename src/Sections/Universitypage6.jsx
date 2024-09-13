import React from "react";
import Transition from "../Transition";

const Universitypage6 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">
          SIKKIM MANIPAL UNIVERSITY (SMU)
          </h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://i.ytimg.com/vi/ZrDKa7_WnhE/maxresdefault.jpg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
                Sikkim Manipal University (SMU)
              </h2>
              <p className="text-gray-700 mb-4">
                Sikkim Manipal University (SMU) is a prominent institution
                established in 1995 through a unique partnership between the
                Government of Sikkim and Manipal Education. It is the first
                Public Private Partnership (PPP) in India for higher education
                and healthcare servicesAd12. SMU offers a wide range of courses
                across various disciplines, including medical sciences,
                technology, physiotherapy, and nursingAd1. The university is
                recognized by the University Grants Commission (UGC) and
                approved by the Government of IndiaAd1. It aims to provide
                quality education and healthcare facilities, particularly to
                students from the North and North Eastern parts of India.{" "}
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

export default Universitypage6;
