import React, { useRef, useEffect, useState } from "react";
import "./HeroStyle.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const moveSlider = (direction) => {
    const sliderList = sliderRef.current.querySelector(".list");
    const thumbnail = sliderRef.current.querySelector(".thumbnail");
    const sliderItems = sliderList.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      sliderRef.current.classList.add("next");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length); // Update index on 'next'
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      sliderRef.current.classList.add("prev");
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length
      ); // Update index on 'prev'
    }

    sliderRef.current.addEventListener(
      "animationend",
      () => {
        if (direction === "next") {
          sliderRef.current.classList.remove("next");
        } else {
          sliderRef.current.classList.remove("prev");
        }
      },
      { once: true }
    );
  };

  // Autoscroll every 7 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      moveSlider("next");
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const images = [
    "https://amity.edu/Aips/ppshh/images/banner3.jpg",
    "https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/manipal-uni.jpg",
    "https://engg.dypvp.edu.in/amiiuac2020/images/institute-of-engineering-and-technology.jpg",
    "https://hitlerrr.wordpress.com/wp-content/uploads/2018/04/lpu_b.jpg",
    "https://vit.ac.in/sites/all/themes/vittheme/images/about_banner.jpg",
    "https://smu.edu.in/content/dam/manipal/smu/images/background-images/aa.jpg",
    "https://shooliniuniversity.com/media/1687521331-Shoolini%20THE%20Asia%20Rankings%202023.png",
    "https://www.jainuniversity.ac.in/crfm/assets/img/banner2.png",
    "https://images.collegedunia.com/public/college_data/images/campusimage/1418297770we_affrim_banner.jpg?mode=stretch",
    "https://siuk-europe.s3.eu-west-2.amazonaws.com/static/original_images/banner_university_desktop_london_metropolitan_1_hmEyPsQ.webp",
  ];

  const contentData = [
    {
      title: "AMITY UNIVERSITY",
      type: "ONLINE",
      description:
        "Amity university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "MANIPAL UNIVERSITY",
      type: "ONLINE",
      description:
        "Manipal university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "DPU-DY PATIL PUNE",
      type: "ONLINE",
      description:
        "DPU-DY patil is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "LP UNIVERSITY",
      type: "ONLINE",
      description:
        "Lovely professional university  is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "VG UNIVERSITY",
      type: "ONLINE",
      description:
        "Vivekananda global university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "SIKKIM MANIPAL UNIVERSITY",
      type: "ONLINE",
      description:
        "Sikkim manipal university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "SHOOLINI UNIVERSITY",
      type: "ONLINE",
      description:
        "Shoolini university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "JAIN UNIVERSITY",
      type: "ONLINE",
      description:
        "Jain university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "LM UNIVERSITY",
      type: "ONLINE",
      description:
        "Ludwig Maximilian university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
    {
      title: "UTTARANCHAL UNIVERSITY",
      type: "ONLINE",
      description:
        "Uttaranchal university is a private research university in India with multiple campuses and programs.",
      buttonLabel: "APPLY NOW",
    },
  ];

  return (
    <div className="slider h-screen mt-0 overflow-hidden" ref={sliderRef}>
      <div className="list">
        {images.map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt="" className="w-full h-full   object-cover" />
            {index === currentIndex && ( // Show content only for the current index
              <div className="overlay absolute top-[0%] pt-[10rem] dm:pl-[1rem] ms:pl-[1rem] w-[100%] inset-0  drop-shadow-lg left-1/2 pl-[12rem] transform  bg-black opacity-60 -translate-x-1/2 pr-[30%] box-border text-white text-shadow-lg">
                <div className="title text-[5em] font-sanss dm:text-[3em] ms:text-[3em] font-bold">
                  {contentData[currentIndex].title}
                </div>
                <div className="type text-[5em] font-sanss dm:text-[3em] ms:text-[3em] font-bold text-[#14ff72cb]">
                  {contentData[currentIndex].type}
                </div>
                <div className="description font-sans w-[40%] dm:w-full">
                  {contentData[currentIndex].description}
                </div>
                <div className="button grid grid-cols-2 gap-5 mt-5">
                  
                  <button className="border-none font-sans bg-white text-black font-medium transition-all hover:letter-spacing-[3px]">
                  <Link to='/contact'>
                    {contentData[currentIndex].buttonLabel}
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="thumbnail absolute bottom-[50px] left-[88rem] flex gap-5 transform -translate-x-1/2 z-10">
        {images.map((img, index) => (
          <div className="item" key={index}>
            <img
              src={img}
              alt=""
              className="w-[150px] h-[220px] object-cover rounded-[20px] shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows absolute top-[80%] right-1/2 transform translate-x-1/2 flex gap-2">
        <button
          className="prev w-10 h-10 rounded-full bg-[#14ff72cb] text-white font-bold transition hover:bg-white hover:text-black"
          onClick={() => moveSlider("prev")}
        >
          {"<"}
        </button>
        <button
          className="next w-10 h-10 rounded-full bg-[#14ff72cb] text-white font-bold transition hover:bg-white hover:text-black"
          onClick={() => moveSlider("next")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
