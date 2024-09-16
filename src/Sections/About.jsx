import React from "react";
import Transition from "../Transition";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Transition />
      <section className="relative flex min-h-screen  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="bg-black h-[400px]">
          <h1 className=" font-bold pt-40 text-center dm:pt-48 dm:mb-3 dm:text-5xl  text-8xl text-white">ABOUT US</h1>
          <p className="text-4xl mb-10 dm:text-xl px-5 text-white text-center max-w-7xl mx-auto leading-relaxed">
            Our Company History, Mission, Team, Vision.
          </p>
        </div>
        <div className="w-full mx-auto dm:-mt-0 max-w-screen-lg mt-28 px-4 sm:px-6 lg:px-8">
          <div className="group grid w-full grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative flex items-end -ml-40 dm:mx-3  flex-col pl-4 md:pl-16 before:block before:absolute before:h-1/6 before:w-2 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl  w-[40rem] dm:w-[25rem] dm:mt-10 ">
                <img
                  className="w-[140rem] h-auto"
                  src="https://img.freepik.com/free-photo/teens-with-drinks-laptop_23-2147659112.jpg?t=st=1725561133~exp=1725564733~hmac=5963fdcd39b07bc4ce1ab09cae35d30256f50ec2ff9fbe6e8a5021a399263376&w=996"
                  alt="Company Vision"
                />
              </div>
            </div>
            <div className="pl-4 md:pl-12">
              <p className="mb-6 -mr-40 dm:mr-0 text-gray-700">
                It’s 2024, and yet most of the population believes that learning
                happens inside a classroom. This might have been true in the
                1800s, but we are no longer living in that era. Everything has
                changed, and so has the model of learning, teaching, and
                education. The Distance Duniya story started in 2021 in the
                pandemic when everyone was doing their graduation and schooling
                on Teams. I was one of them. I really enjoyed the feeling that I
                could hear my teacher face to face, which made me concentrate
                better.
              </p>
              <p className="mb-6 -mr-40 dm:mr-0 text-gray-700">
                It was like a one-on-one class. After graduation, I invested in
                getting an AI-certified course from an online institute. I was
                so passionate about getting started that I paid them upfront.
                That was my mistake; I didn’t do any background check. Two weeks
                passed, no teacher was assigned, and no class started. I was
                waiting, hoping to get a teacher, but unfortunately, they never
                provided one. They did return the money after my constant
                pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-white-100 text-center py-16 z-10 loverflow-hidden will-change-transform relative">
        <div className="container mx-auto px-4 -mb-20" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 dm:text-3xl">
            We provide you with expert teachers{" "}
            <br className="hidden md:block" /> who believe in the Harkness
            method of learning.
          </h1>
          <p className="text-xl mb-10 max-w-7xl mx-auto leading-relaxed">
            Online education seems like a scam because there’s no actual feeling
            of sitting at a desk, the vibe of the classroom is missing, and it’s
            all virtual. That is true. But we are forgetting the sole concept of
            education and learning.
          </p>
        </div>
        <section
          className="flex flex-col items-center md:flex-row md:items-start bg-white-100 p-8 md:p-28 gap-8"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 flex justify-center dm:mt-10 mb-6 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/team-meeting-startups_23-2148898713.jpg?t=st=1725227826~exp=1725231426~hmac=daedc03f7c63480ffd8f57af933dfc9f663eab84471a09968d9f8ebf30912afd&w=996"
              alt="Minion with Social Media Icons"
              className="w-full max-w-xs md:max-w-full"
            />
          </div>
          <div className="mt-10 flex-col mr-[-60rem] text-left w-[60rem] ">
            <div className="space-y-10  md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative dm:ml-[-14rem]">
                <div>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"></div>
                  <p className="font-heading ml-16 text-3xl dm:text-2xl leading-6 font-bold text-gray-700">
                    Diztoversity
                  </p>
                </div>
                <div className="mt-2 ml-16 -mr-36 dm:w-[21rem] text-base text-gray-500">
                  Distance Duniya, one can enroll in any skill-oriented course
                  without having to worry about the admission year. Plus, the
                  courses are accessible worldwide 24/7, meaning if you are in a
                  9-5 corporate job, you can still learn and update yourself.
                </div>
              </div>
            </div>
            <div className="space-y-10 mt-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative dm:ml-[-14rem]">
                <div>
                  <div className="absolute flex  items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"></div>
                  <p className="font-heading ml-16  dm:text-2xl text-3xl leading-6 font-bold text-gray-700">
                    Here we are
                  </p>
                </div>
                <div className="mt-2 ml-16 -mr-36 dm:w-[21rem] text-base text-gray-500">
                  Distance Duniya makes sure that its students get the best
                  package, learning, and placement. We care for you like your
                  parents do when it comes to education and learning.
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
