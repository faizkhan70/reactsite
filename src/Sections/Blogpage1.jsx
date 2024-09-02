import React from 'react'

const Blogpage1 = () => {
  return (
    <div>

    {/* Main Content */}
    <main className="container mx-auto  pt-28 bg-white">
      <div className="flex flex-wrap justify-between">
        {/* Blog Post */}
        <div className="w-full md:w-8/12 px-4 mb-8 ">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Featured Image"
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-4xl font-bold mt-4 mb-2">The Importance of Continuous Learning in
          this Digital Era</h2>
          <p className="text-gray-700 mb-4">
          In this squiggly fast world, change is the only constant. Job sectors are changing,
education is changing, technologies are changing, and the systems are too, my
dear, changing. Everything we know now and then has been evolving.
          </p>
          <p className="text-gray-700 mb-4">
          In this blog, we will delve into the importance of continuous learning, the impact it can have on
our personal and professional development, and, more importantly, how it can lead to a surge in
career advancement. We will also highlight how one can use available viable resources like
online courses, books, podcasts, etc. to incorporate continuous learning into their daily life
routines.
   </p>
          <p className="text-gray-700 mb-4">
          The Importance of Continuous Learning in this Digital Era
Reid Hoffman, the founder of LinkedIn, said that when assessing potential assets per se
founders, he particularly looks for individuals who have an infinite learning curve, and a dying
passion for constantly learning, and adapting. It’s like our parents say: when you learn new
things, you acquire not only knowledge but also an asset that can’t be taken away from you. It
can be used to open a doorway to new opportunities.

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

export default Blogpage1;
