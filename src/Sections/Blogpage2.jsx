import React from 'react'

const Blogpage2 = () => {
  return (
    <div>

    {/* Main Content */}
    <main className="container mx-auto  pt-28 bg-white">
      <div className="flex flex-wrap justify-between">
        {/* Blog Post */}
        <div className="w-full md:w-8/12 px-4 mb-8 ">
          <img
            src="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Featured Image"
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-4xl font-bold mt-4 mb-2">Advantages of online education or certification?</h2>
          <p className="text-gray-700 mb-4">
          Online learning isn't new, and it's no longer in debate. The world knew its intact
powers when the globe was in quarantine. With Teams, Gmeets, Zoom, and other
online platforms, it's easier to get access to expert faculties scattered around the
world. Anyone who wants to learn and master a skill, from college students to
working professionals to a person who wants to do a career shift, can now access a
wide range of subjects through the plethora of digital learning.

          </p>
          <p className="text-gray-700 mb-4">
          The National Centre for Education Statistics states that more than 7 million people have been
engaged in online learning offered through a degree-granting college or university in 2023. No
need to explain that it is popular
   </p>
          <p className="text-gray-700 mb-4">
          There's a course for everyone: beginners, experts, and PhD scholars, and now students who are
keen to learn are enrolling in online courses more than ever. And why wouldn't they? I mean,
you don't have to re attend your college classes to master or update yourself with a certain skill,
make a career shift in your life, learn finance, learn marketing, learn designing, and for god's
sake, even art.


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
  )
}

export default Blogpage2;
