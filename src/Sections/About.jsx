import React from "react";

const About = () => {
  const features = [
    {
      id: 1,
      title: "WHY DISTANCE DUNIYA",
      description:
        "Distance Duniya, one can enroll in any skill-oriented course without having to worry about the admission year. Plus, the courses are accessible worldwide 24/7, meaning if you are in a  9-5 corporate job, you can still learn and update yourself.",
      icon: "https://cdn.pixabay.com/photo/2022/08/30/18/14/school-7421663_1280.png",
    },
    {
      id: 2,
      title: "HERE WE ARE",
      description:
        "Distance Duniya makes sure that its students get the best package, learning, and placement. We care for you like your parents do when it comes to education and learning.",
      icon: "https://www.svgrepo.com/show/503138/webpack.svg",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full mx-auto max-w-screen-lg mt-28 px-4 sm:px-6 lg:px-8">
          <div className="group grid w-full grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="relative flex items-end flex-col pl-4 md:pl-16 before:block before:absolute before:h-1/6 before:w-2 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-11/12 sm:w-4/6 bg-gray-500 px-6 sm:px-12 py-8 sm:py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all">
                <span className="block mb-6 sm:mb-10 font-bold text-2xl sm:text-4xl text-white text-center">
                  About Us
                </span>
                <h2 className="text-white font-bold text-lg sm:text-3xl text-center">
                  Our Company History, Mission, Team, Vision.
                </h2>
              </div>
              <div className="rounded-xl overflow-hidden w-full mt-8">
                <img
                  className="w-full h-auto"
                  src="https://cdn.pixabay.com/photo/2022/02/14/08/13/to-learn-7012679_1280.jpg"
                  alt="Company Vision"
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="pl-4 md:pl-12">
              <p className="mb-6 text-gray-700">
                It’s 2024, and yet most of the population believes that learning happens inside a
                classroom. This might have been true in the 1800s, but we are no longer living in that era.
                Everything has changed, and so has the model of learning, teaching, and education. The
                Distance Duniya story started in 2021 in the pandemic when everyone was doing their
                graduation and schooling on Teams. I was one of them. I really enjoyed the feeling that I
                could hear my teacher face to face, which made me concentrate better.
              </p>
              <p className="mb-6 text-gray-700">
                It was like a one-on-one class. After graduation, I invested in getting an AI-certified course
                from an online institute. I was so passionate about getting started that I paid them upfront.
                That was my mistake; I didn’t do any background check. Two weeks passed, no teacher
                was assigned, and no class started. I was waiting, hoping to get a teacher, but unfortunately,
                they never provided one. They did return the money after my constant pressure.
              </p>
              <h3 className="mb-4 font-semibold text-xl text-gray-700">Our Team:</h3>
              <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
                <li>Mohammad Rizwan, CEO and Co-founder of Distance Duniya</li>
                <li>Saad, Co-founder of Distance Duniya</li>
                <li>Jyoti K., Content Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 text-orange-800 px-4 py-2 dm:text-center md:w-64 md:mx-auto text-xl font-semibold tracking-widest uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-900 sm:text-4xl">
              We provide you with expert teachers who believe in the Harkness method of learning.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto text-center">
              Online education seems like a scam because there’s no actual feeling of sitting at a desk, the
              vibe of the classroom is missing, and it’s all virtual. That is true. But we are forgetting the sole
              concept of education and learning.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={feature.icon} alt={`${feature.title} icon`} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
