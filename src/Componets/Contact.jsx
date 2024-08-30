import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container h-auto  my-12 mx-auto px-2 ">
    <section className="mb-32 mt-10">
      <div className="flex justify-center mt-14">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="mb-12 px-6 text-3xl md:text-5xl mt-20 font-bold text-gray-700">Contact us</h2>
        </div>
      </div>
  
      <div className="flex flex-wrap">
        <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-black" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="px-2 py-2 border w-full outline-none rounded-md"
              id="name"
              placeholder="Name"
            />
          </div>
  
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-black" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="px-2 py-2 border w-full outline-none rounded-md"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
  
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-black" htmlFor="message">
              Message
            </label>
            <textarea
              className="px-2 py-2 border rounded-[5px] w-full outline-none"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
  
          <button
            type="button"
            className="mb-6 inline-block w-full rounded bg-transparent border-2 px-6 py-2.5 font-medium uppercase leading-normal text-black hover:shadow-md hover:bg-blue-700 hover:text-white"
          >
            Send
          </button>
        </form>
  
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Phone</p>
                  <p className="text-neutral-500">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <img src="https://cdn.icon-icons.com/icons2/1222/PNG/512/1492616972-16-gmail-email-mail-communication-message-service_83395.png" alt="" srcset="" className="w-8" />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Gmail</p>
                  <p className="text-neutral-500">weare@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Message</p>
                  <p className="text-neutral-500">leave message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Contact;
