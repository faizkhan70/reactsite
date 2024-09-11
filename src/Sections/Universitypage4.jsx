import React from 'react';
import Transition from '../Transition';

const Universitypage4 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">LPU UNIVERSITY</h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://i.ytimg.com/vi/U40sGneJwRQ/maxresdefault.jpg"
                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">LPU University</h2>
              <p className="text-gray-700 mb-4">
              Lovely Professional University (LPU) is one of India’s largest and most prestigious private universities, located in Phagwara, Punjab. Here are some key highlights:
Overview:

</p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Established
              </h3>
              <p className="text-gray-700 mb-4">
              LPU was established in 2005 by the Lovely International Trust1.
Campus: The university boasts a sprawling campus spread over 600 acres, equipped with state-of-the-art facilities1.

  </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Academic Programs
              </h3>
             

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Undergraduate Programs:
              </h3>
              <p className="text-gray-700 mb-4">
              Offers a wide range of bachelor’s degrees in fields such as Engineering, Management, Arts, Science, Law, and more1.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Postgraduate Programs:</h3>
              <p className="text-gray-700 mb-4">
              Includes master’s degrees and specialized programs across various disciplines1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Doctoral Programs:</h3>
              <p className="text-gray-700 mb-4">
              Provides opportunities for advanced research and specialization in multiple fields1.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Distance Education: </h3>
              <p className="text-gray-700 mb-4">
              LPU also offers various programs through its distance education wing, making education accessible to a broader audience1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Features
              </h3>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Accreditation:
              </h3>
              <p className="text-gray-700 mb-4">
              LPU is accredited by the University Grants Commission (UGC) and has received an A++ grade from NAAC1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Rankings:
              </h3>
              <p className="text-gray-700 mb-4">
              It is ranked among the top universities in India and has received numerous accolades for its academic excellence and innovative teaching methods1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Global Reach: 
              </h3>
              <p className="text-gray-700 mb-4">
              The university has a diverse student body with over 3,000 international students from more than 50 countries1.
           </p>
           <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Campus Life
              </h3>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Facilities: 
              </h3>
              <p className="text-gray-700 mb-4">
              The university has a diverse student body with over 3,000 international students from more than 50 countries1.
           </p>
           <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Student Activities:
              </h3>
              <p className="text-gray-700 mb-4">
              LPU offers a vibrant campus life with numerous clubs, societies, and events to foster holistic development1.

           </p>
           <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Placements:
              </h3>
              <p className="text-gray-700 mb-4">
              The university has a strong placement record, with students being recruited by top companies globally1.
LPU aims to provide a nurturing environment that promotes academic excellence and prepares students for global challenges.

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

export default Universitypage4;

