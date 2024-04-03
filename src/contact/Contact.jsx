import React from "react";

const Contact = () => {
  return (
    <div className="contact-content flex flex-col ">
      <div className="heading">
        <p className="mb-[10px] font-semibold text-blue-500 text-xl ">
          CONTACT
        </p>
        <h3 className="max-lg:text-2xl text-3xl font-bold ">
          Don't be shy! Hit me up! 👇
        </h3>
      </div>
      <div className="icons mt-[60px] flex max-lg:flex-col max-lg:gap-[3rem] gap-[8rem]">
        <div className="icon1 flex max-lg:flex-col items-center align-center gap-5">
          <span className="svg flex justify-center text-blue-500 h-[50px] w-[50px] rounded-full shadow-lg items-center ">
            <svg
              className="h-[30px] w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentcolor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-map-search"
            >
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M20.2 20.2l1.8 1.8"></path>
            </svg>
          </span>
          <div className="location flex flex-col gap-1">
            <h3 className="text-xl font-bold max-lg:text-center">Location</h3>
            <p className="cursor-pointer text-lg text-gray-600 hover:text-blue-500 transition-all font-medium duration-800 max-lg:text-center">
              Delhi, India
            </p>
          </div>
        </div>
        <div className="icon1 flex max-lg:flex-col items-center gap-5">
          <span className="svg flex justify-center text-blue-500 h-[50px] w-[50px] rounded-full shadow-lg items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-mail"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </span>
          <div className="location flex flex-col gap-1">
            <h3 className="text-xl font-bold max-lg:text-center">Mail</h3>
            <a
              className="cursor-pointer text-lg text-gray-600 hover:text-blue-500 transition-all font-medium duration-800 max-lg:text-center"
              href="mailto:panshulsingh2005@gmail.com"
            >
              panshulsingh2005@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
