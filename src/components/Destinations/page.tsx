import Image from "next/image";
import React from "react";

const destinations = [
  {
    id: 1,
    title: "Bali",
    image: "/images/banner1.jpg",
  },
  {
    id: 2,
    title: "Singapore",
    image: "/images/banner2.jpg",
  },
  {
    id: 3,
    title: "Japan",
    image: "/images/banner3.jpg",
  },
  {
    id: 4,
    title: "Maldives",
    image: "/images/banner4.jpg",
  },
  {
    id: 5,
    title: "Thailand",
    image: "/images/banner5.jpg",
  },
  {
    id: 6,
    title: "Dubai",
    image: "/images/banner6.jpg",
  },
];

const Destinations = () => {
  return (
    <div className=" py-10 lg:py-20">
      <div className="max-w-[1300px] px-4 mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row text-center lg:text-start items-center justify-between pb-8">
          <div>
            <h2 className=" text-xxl md:text-xxxl lg:text-4xl font-bold mb-4 text-white font-modicaMedium">
              Leading Tour Location
            </h2>
            <p className="text-gray-300 max-w-[700px] text-md lg:text-lg lg:leading-8 font-sfproLight">
              Explore Top Destinations Curated for Unforgettable Adventures and
              Unique Experiences. Immerse Yourself in Local Cultures and Create
              Lasting Memories on Every Journey.
            </p>
          </div>

          <button className="bg-yellow-600 text-md font-bold text-white px-4 py-2 hover:bg-yellow-700 transition duration-300">
            All Destinations
          </button>
        </div>

        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative overflow-hidden rounded-lg lg:w-[25%] h-72">
            <Image
              src={destinations[0].image}
              alt={destinations[0].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg ">
              {destinations[0].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg  lg:w-[45%] h-72">
            <Image
              src={destinations[1].image}
              alt={destinations[1].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2  bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg">
              {destinations[1].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg lg:w-[30%] h-72">
            <Image
              src={destinations[2].image}
              alt={destinations[2].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2  bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg">
              {destinations[2].title}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="relative overflow-hidden rounded-lg w-full lg:w-[45%] h-72">
            <Image
              src={destinations[3].image}
              alt={destinations[3].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2  bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg">
              {destinations[3].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg lg:w-[25%] h-72">
            <Image
              src={destinations[4].image}
              alt={destinations[4].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2  bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg">
              {destinations[4].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg lg:w-[30%] h-72">
            <Image
              src={destinations[5].image}
              alt={destinations[5].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2  bg-yellow-500  text-black text-center py-1 px-6 font-sfproRegular font-semibold text-lg">
              {destinations[5].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
