import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#0A0C1C] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Mail</h3>
            <p>hello@react.dev</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p>Hello street New York</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+1 234 5678</p>
          </div>
        </div>
        <div>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:border-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
