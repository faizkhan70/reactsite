import React from "react";

const Blogpage = () => {
  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto  pt-28 bg-white">
        <div className="flex flex-wrap justify-between">
          {/* Blog Post */}
          <div className="w-full md:w-8/12 px-4 mb-8 ">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Featured Image"
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-4xl font-bold mt-4 mb-2">What course should I opt for after
            graduation in 2024?</h2>
            <p className="text-gray-700 mb-4">
            Wouldn't it be easy if one could start earning just after graduation? But this is 2024, and
       the competition is fierce. We know it, employers know it, and even the candidate—i.e.,
         you—should know this. Companies and employers nowadays look for dynamic qualities,
        skill sets, and leadership qualities when it comes to job positions and roles.
            </p>
            <p className="text-gray-700 mb-4">
            A degree
won't be enough to leave an impression; you have to show that you are the 'one' they have
been searching for. You can become an expert in a field after your graduation, as
skill-oriented jobs are in demand. That's good news, meaning you can master a skill, get
certification, and then directly go for a job interview. A certification tag will uplift your
CV, highlight your learned skills, and show that the candidate is keen to learn and upskill
whenever required.

            </p>
            <p className="text-gray-700 mb-4">
            what course should one opt for after graduation based on their bachelor's degree, interests,
and dream job? Don’t worry, we’ve got you covered. After thorough research, we have
shortlisted the top 10 courses that are trendy in the market, meaning companies actively hire for
these positions every quarter. We have included all the background information you need to
enroll in these particular courses.
            </p>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Courses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <p className="text-center text-white">Copyright 2023</p>
      </footer>
    </div>
  );
};

export default Blogpage;
