import React, { useRef, useEffect, useState } from "react";
import "./HeroStyle.css";

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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIzguHdKxWfgwCEQHt7eVmNYCkX4Cahqb9g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdo5CGeY7fSaXxLQrcxONIpQnn9zyxs9eAw&s",
    "https://dpu.edu.in/img/compression/medical-clg.jpg",
    "https://i.ytimg.com/vi/U40sGneJwRQ/maxresdefault.jpg",
    "https://images.shiksha.com/mediadata/images/1573113703phpv24G2q.jpeg",
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
  ];

  return (
    <div className="slider h-screen mt-0 overflow-hidden" ref={sliderRef}>
      <div className="list">
        {images.map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt="" className="w-full h-full   object-cover" />
            {index === currentIndex && ( // Show content only for the current index
              <div className="overlay absolute top-[0%] pt-[10rem] dm:pl-[1rem] ms:pl-[1rem] w-[100%] inset-0  drop-shadow-lg left-1/2 pl-[12rem] transform  bg-black opacity-60 -translate-x-1/2 pr-[30%] box-border text-white text-shadow-lg">
                <div className="title text-[5em] font-sanss dm:text-[4em] ms:text-[3em] font-bold">
                  {contentData[currentIndex].title}
                </div>
                <div className="type text-[5em] font-sanss dm:text-[4em] ms:text-[3em] font-bold text-[#14ff72cb]">
                  {contentData[currentIndex].type}
                </div>
                <div className="description font-sans w-[60%] dm:w-full">
                  {contentData[currentIndex].description}
                </div>
                <div className="button grid grid-cols-2 gap-5 mt-5">
                  <button className="border-none font-sans bg-white text-black font-medium transition-all hover:letter-spacing-[3px]">
                    {contentData[currentIndex].buttonLabel}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="thumbnail absolute bottom-[50px] left-[80rem] flex gap-5 transform -translate-x-1/2 z-10">
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
