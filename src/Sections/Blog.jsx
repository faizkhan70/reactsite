import React from 'react'

const Blog = () => {
    const blogPosts = [
        {
          id: 1,
          imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
          formattedDate: "Oct 11, 2024",
          title: "What course should I opt for after graduation in 2024?",
          link: "/blogpage"
        },
        {
          id: 2,
          imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
          formattedDate: "Sept 25, 2024",
          title: "The Importance of Continuous Learning in this Digital Era",
          link: "/blogpage1"
        },
        {
          id: 3,
          imageUrl: "https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080",
          formattedDate: "Sept 24, 2023",
          title: "Advantages of online education or certification?",
          link: "/blogpage2"
        },
        // Add more blog posts as needed
     
     
      ];
      
  return (

    <div>
<section className="w-full dark:bg-gray-800">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 mb-6">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From The Blog</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Dive into the latest in technology with our insightful blog posts.
      </p>
    </div>

    <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {blogPosts.map((post) => (
        <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time dateTime={post.date} className="mr-8">{post.formattedDate}</time>
            <div className="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="flex gap-x-2.5">
                <img
                  src={post.authorImageUrl}
                  alt={post.authorName}
                  className="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                {post.authorName}
              </div>
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href={post.link}>
              <span className="absolute inset-0"></span>{post.title}
            </a>
          </h3>
        </article>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Blog;
