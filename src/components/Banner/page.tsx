"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/banner7.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4 gap-2">
        <h1 className="text-white font-modicaSemibold text-2xl md:text-3xl lg:text-5xl font-extrabold leading-17 uppercase max-w-[600px]">
          Let's journey and discover a place.
        </h1>
        <p className="max-w-[1000px] px-10 text-[24px] font-sfproLight text-white">
          Life is unpredictable, and we understand that plans might change.
          Enjoy flexible booking options, so you can reschedule or modify your
          trip with ease.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-4 rounded-full lg:text-md md:text-sm text-xs transition duration-300 font-bold">
          Book A Trip
        </button>
      </div>
    </div>
  );
};

export default Banner;
