import React from "react";
import Transition from "../Transition";

const University = () => {
  const universityPosts = [
    {
      id: 1,
      imageUrl:
        "https://amity.edu/Aips/ppshh/images/banner3.jpg",
      title: "AMITY",
      link: "/unversitypage",
    },
    {
      id: 2,
      imageUrl:
        "https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/manipal-uni.jpg",
      title: "MANIPAL",
      link: "/unversitypage2",
    },
    {
      id: 3,
      imageUrl: "https://engg.dypvp.edu.in/amiiuac2020/images/institute-of-engineering-and-technology.jpg",
      title: "DPU-DY PATIL PUNE",
      link: "/unversitypage3",
    },
    {
      id: 4,
      imageUrl: "https://hitlerrr.wordpress.com/wp-content/uploads/2018/04/lpu_b.jpg",
      title: "LOVELY PROFESSINAL ",
      link: "/unversitypage4",
    },
    {
      id: 5,
      imageUrl:
        "https://vit.ac.in/sites/all/themes/vittheme/images/about_banner.jpg",
      title: "VIVEKANAND GLOBAL ",
      link: "/unversitypage5",
    },
    {
      id: 6,
      imageUrl:
        "https://smu.edu.in/content/dam/manipal/smu/images/background-images/aa.jpg",
      title: "SIKKIM MANIPAL ",
      link: "/unversitypage6",
    },
    {
      id: 7,
      imageUrl:
        "https://shooliniuniversity.com/media/1687521331-Shoolini%20THE%20Asia%20Rankings%202023.png",
      title: "SHOOLINI ",
      link: "/unversitypage7",
    },
    {
      id: 8,
      imageUrl: "https://www.jainuniversity.ac.in/crfm/assets/img/banner2.png",
      title: "JAIN ",
      link: "/unversitypage8",
    },
    {
      id: 9,
      imageUrl: "https://images.collegedunia.com/public/college_data/images/campusimage/1418297770we_affrim_banner.jpg?mode=stretch",
      title: "LUNDON METROPOLITAN ",
      link: "/unversitypage9",
    },
    {
      id: 10,
      imageUrl:
        "https://siuk-europe.s3.eu-west-2.amazonaws.com/static/original_images/banner_university_desktop_london_metropolitan_1_hmEyPsQ.webp",
      title: "UTTARANCHAL ",
      link: "/unversitypage10",
    },
  ];

  return (
    <div className="pb-20">
      <Transition />
      <div className="bg-black h-[300px] md:h-[400px]">
        <h1 className="font-bold pt-40 dm:pt-44  text-center text-5xl md:text-8xl text-white">
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
