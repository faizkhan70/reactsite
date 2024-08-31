import React from 'react';


const Hero = () => {
  return (
    <>
<section id='hero' className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 h-screen ">
    <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"></rect>
            </svg>
        </div>
    </div>
    <div className="relative z-20 mx-auto max-w-8xl px-8 lg:px-8 mt-28 dm:mt-60 ms:mt-32">
        <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl ">
            HELLO STUDENTS
            </h1>
            <h1 className='text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl mt-3'>WELCOME TO EDUCATION MEETING</h1>
            <div className="mt-10 flex items-center justify-center gap-x-20 dm:flex-col">
            <button className="text-lg md:text-xl bg-transparent border rounded-xl border-black text-black py-2 px-4 hover:bg-blue-600 hover:text-white shadow-lg shadow-slate-400">Upcoming Meetings</button>
            <button className="text-lg md:text-xl dm:mt-10 bg-transparent border rounded-xl border-black text-black py-2 px-4 hover:bg-blue-600 hover:text-white  shadow-lg shadow-slate-400">Get In Touch</button>
            </div>
        </div>
     
    </div>
</section>




   
 </>
  );
};

export default Hero;
