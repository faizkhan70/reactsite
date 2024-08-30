import React from 'react';

const meetingsData = [
  {
    date: 'August 10, 2024, 10:00 AM',
    title: 'Introduction to React',
    description: 'Focus: Introduction to React and its basic concepts.',
    image: 'https://education-meet.netlify.app/assets/teacher-main-nobg-DDkaAdqK.png',
  },
  {
    date: 'August 15, 2024, 2:00 PM',
    title: 'Advanced CSS Techniques',
    description: 'Focus: Exploring advanced CSS techniques and tips.',
    image: 'https://education-meet.netlify.app/assets/teacher-main-nobg-DDkaAdqK.png',
  },
  {
    date: 'August 20, 2024, 11:00 AM',
    title: 'JavaScript Deep Dive',
    description: 'Focus: In-depth analysis of JavaScript concepts and practices.',
    image: 'https://education-meet.netlify.app/assets/teacher-main-nobg-DDkaAdqK.png',
  },
  {
    date: 'August 25, 2024, 3:00 PM',
    title: 'Web Accessibility',
    description: 'Focus: Understanding and implementing web accessibility standards.',
    image: 'https://education-meet.netlify.app/assets/teacher-main-nobg-DDkaAdqK.png',
  },
];

const Meetings = () => {
  return (
    <section id='meeting' className="bg-[#f9fafbf3] h-screen text-gray-900 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-700 mb-20">
          Upcoming Meetings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meetingsData.map((meeting, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="flex-shrink-0 mr-6">
                <img
                  src={meeting.image}
                  alt={meeting.title}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div>
                <p className="text-sm text-gray-500 mb-2">{meeting.date}</p>
                <h3 className="text-lg font-semibold text-black mb-2">{meeting.title}</h3>
                <p className="text-sm text-gray-700">{meeting.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meetings;
