import React from 'react';

const Hero = ({ children }) => {
  return (
    <main>
      <div className="dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
          <div className="z-30 relative lg:w-1/2">
            <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div className="w-full lg:w-auto lg:-mr-32">
                <img
                  src="./LogoRound.png"
                  alt="image with decent chairs"
                  className="w-full relative z-30 lg:pl-20 px-6 py-14"
                />
              </div>
            </div>
            <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
              <img
                src="./LogoRound.png"
                className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
              />
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                MyTinerary
              </h1>
              <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                Find your perfect trip, designed by insiders who know and love their cities
              </p>
              {children}
              <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                Visit Cities
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
