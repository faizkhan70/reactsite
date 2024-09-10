import React from "react";
import Transition from "../Transition";

const University = () => {
  const universityPosts = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIzguHdKxWfgwCEQHt7eVmNYCkX4Cahqb9g&s",
      title: "AMITY",
      link: "/universitypage1",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdo5CGeY7fSaXxLQrcxONIpQnn9zyxs9eAw&s",
      title: "MANIPAL",
      link: "/universitypage2",
    },
    {
      id: 3,
      imageUrl: "https://dpu.edu.in/img/compression/medical-clg.jpg",
      title: "DPU-DY PATIL PUNE",
      link: "/universitypage3",
    },
    {
      id: 4,
      imageUrl: "https://i.ytimg.com/vi/U40sGneJwRQ/maxresdefault.jpg",
      title: "LP",
      link: "/universitypage4",
    },
    {
      id: 5,
      imageUrl:
        "https://images.shiksha.com/mediadata/images/1573113703phpv24G2q.jpeg",
      title: "VG",
      link: "/universitypage5",
    },
  ];

  return (
    <div className="pb-20">
      <Transition />
      <div className="bg-black h-[400px]">
        <h1 className="font-bold pt-40 text-center dm:pt-48 dm:mb-3 dm:text-5xl text-8xl text-white">
          UNIVERSITY
        </h1>
      </div>
      <section className="w-full dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 mb-6">
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {universityPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray00 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
                  <h3 className="text-2xl font-semibold leading-6   text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
                  <a  href={post.link}>
                    <span>{post.title}</span>
                    <span className="block">UNIVERSITY</span>
                  </a>
                </h3>
                <div className="absolute inset-0 -z-10 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-400/10"></div>
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.date} className="mr-8">
                    {post.formattedDate}
                  </time>
                </div>
              
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default University;
