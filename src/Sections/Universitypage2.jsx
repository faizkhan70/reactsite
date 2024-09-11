import React from 'react';
import Transition from '../Transition';

const Universitypage2 = () => {
  return (
    <>
      <div>
        <Transition />
        {/* Main Content */}
        <div className="bg-black h-[300px] md:h-[400px] flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl text-white">MANIPAL UNIVERSITY</h1>
        </div>
        <main className="container mx-auto pt-16 md:pt-28 bg-white px-4">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Blog Post */}
            <div className="w-full mx-40 dm:mx-0 px-4 mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdo5CGeY7fSaXxLQrcxONIpQnn9zyxs9eAw&s"

                alt="Featured Image"
                className="w-full h-48 md:h-64 object-cover rounded"
              />
              <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">ManipalUniversity</h2>
              <p className="text-gray-700 mb-4">
              Online offers a variety of online degree programs and certifications through its platforms, including Manipal Academy of Higher Education (MAHE), Manipal University Jaipur (MUJ), and Sikkim Manipal University (SMU). Here are some key highlights:</p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Programs Offered:
              </h3>
              <p className="text-gray-700 mb-4">
              Undergraduate Degrees: BBA, BCA, BA, and more.
Postgraduate Degrees: MBA, MCA, MA, and specialized programs like PGCP in Entrepreneurship & Innovation.
Professional Certifications: Various short-term courses and certifications to enhance specific skillsAd1.
  </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Features:
              </h3>
              <p className="text-gray-700 mb-4">
              Accreditation: All programs are UGC-entitled and AICTE approved, ensuring they are recognized at par with conventional on-campus degreesAd1.
Flexibility: The online format allows students to learn at their own pace, making it easier to balance education with other commitmentsAd1.

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Global Reach</h3>
              <p className="text-gray-700 mb-4">
              With over 70,000 online learners from more than 60 nationalities, Manipal University Online has a significant global presenceAd1.
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Support and Resources:</h3>
              <p className="text-gray-700 mb-4">
              Students have access to e-learning materials, weekly webinars with industry leaders, and exclusive access to over 10,000 courses and certifications from top global universities through platforms like CourseraAd1.
             </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Placement Assistance:</h3>
              <p className="text-gray-700 mb-4">
              he university provides 100% placement assistance, helping students prepare for interviews and improve their employabilityAd1.
Additional Benefits:

              </p>

              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Scholarships:</h3>
              <p className="text-gray-700 mb-4">
              Up to 30% scholarships are available under various categories such as merit, defense, and alumniAd1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Alumni Network: </h3>
              <p className="text-gray-700 mb-4">
              Graduates become part of a global network of over 150,000 Manipal alumniAd1.
              </p>
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">Campus Immersion:  </h3>
              <p className="text-gray-700 mb-4">
              Opportunities for in-person meetups at the campus with batchmates and facultyAd1.
              Manipal University Online aims to provide a comprehensive and flexible learning experience, making quality education accessible to a broader audience.
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

export default Universitypage2;
