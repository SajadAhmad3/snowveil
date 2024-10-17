"use client";

import BannerImg2 from "../../../public/images/banner7.jpg";
import { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={BannerImg2}
        alt="Banner"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4 gap-2">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold leading-17 uppercase max-w-[500px]">
          Let's journey and discover a place.
        </h1>
        <p className="font-medium_1 max-w-[1000px] px-10 text-[14px] lg:text-[18px]">
          Life is unpredictable, and we understand that plans might change.
          Enjoy flexible booking options, so you can reschedule or modify your
          trip with ease.
        </p>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-4 rounded-full lg:text-md md:text-sm text-xs transition duration-300 font-bold"
          onClick={openModal}
        >
          Book A Trip
        </button>
      </div>
    </div>
  );
};

export default Banner;
