import React from 'react';
import Transition from '../Transition';

const Universitypage5 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">VGU UNIVERSITY</h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://vit.ac.in/sites/all/themes/vittheme/images/about_banner.jpg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">Vivekananda Global University </h2>
              <p className="text-gray-700 mb-4">
              Vivekananda Global University (VGU) in Jaipur, Rajasthan. VGU is a prominent private university known for its innovative teaching methods, strong industry connections, and diverse academic programs. Here are some highlights:


</p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Established
              </h3>
              <p className="text-gray-700 mb-4">
              2012
  </p>

           
            
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Accreditation:
              </h3>
              <p className="text-gray-700 mb-4">
              NAAC ‘A+’ Grade

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Rankings:</h3>
              <p className="text-gray-700 mb-4">
              Ranked 33rd among the best young universities in India by Career3601.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Programs: :</h3>
              <p className="text-gray-700 mb-4">
              Offers a wide range of undergraduate, postgraduate, and diploma programs in fields like Engineering, Management, Law, Hotel Management, Pharmacy, and more2.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Placements: </h3>
              <p className="text-gray-700 mb-4">
              The university has a strong placement record with top recruiters like TCS, Wipro, Samsung, and BYJU’s              </p>
          
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

export default Universitypage5;

