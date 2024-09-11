import React from "react";
import Transition from "../Transition";

const University = () => {
  const universityPosts = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIzguHdKxWfgwCEQHt7eVmNYCkX4Cahqb9g&s",
      title: "AMITY",
      link: "/unversitypage",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdo5CGeY7fSaXxLQrcxONIpQnn9zyxs9eAw&s",
      title: "MANIPAL",
      link: "/unversitypage2",
    },
    {
      id: 3,
      imageUrl: "https://dpu.edu.in/img/compression/medical-clg.jpg",
      title: "DPU-DY PATIL PUNE",
      link: "/unversitypage3",
    },
    {
      id: 4,
      imageUrl: "https://i.ytimg.com/vi/U40sGneJwRQ/maxresdefault.jpg",
      title: "LP",
      link: "/unversitypage4",
    },
    {
      id: 5,
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1573113703phpv24G2q.jpeg",
      title: "VGU",
      link: "/unversitypage5",
    },
  ];

  return (
    <div className="pb-20">
      <Transition />
      <div className="bg-black h-[300px] md:h-[400px]">
        <h1 className="font-bold pt-28 md:pt-40 text-center text-5xl md:text-8xl text-white">
          UNIVERSITY
        </h1>
      </div>
      <section className="w-full dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-20 mb-6">
          {/* Responsive grid with adjusted spacing */}
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-y-12">
            {universityPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-center items-center overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 transition-all duration-500 group h-[300px] md:h-[400px] w-full shadow-lg border border-gray-300 hover:border-gray-500 hover:shadow-2xl"
              >
                {/* Link wrapping the image */}
                <a href={post.link} className="absolute inset-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                </a>

                {/* Black overlay with hover effect */}
                <div className="absolute inset-0 -z-10 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Text in the center of the image */}
                <h3 className="text-3xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                  {post.title}
                  <span className="block">UNIVERSITY</span>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default University;
