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
    <div className=" py-20">
      <div className="max-w-[1300px] px-4 mx-auto">
        <div className="flex items-center justify-between pb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white font-modicaMedium">
              Leading Tour Location
            </h2>
            <p className="text-gray-300 max-w-[700px] text-lg leading-8 font-sfproLight">
              Explore Top Destinations Curated for Unforgettable Adventures and
              Unique Experiences. Immerse Yourself in Local Cultures and Create
              Lasting Memories on Every Journey.
            </p>
          </div>

          <button className="bg-green-500 text-md font-bold text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            All Destinations
          </button>
        </div>

        {/* First Row */}
        <div className="flex gap-4">
          <div className="relative overflow-hidden rounded-lg w-[25%] h-72">
            <Image
              src={destinations[0].image}
              alt={destinations[0].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[0].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg w-[45%] h-72">
            <Image
              src={destinations[1].image}
              alt={destinations[1].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[1].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg w-[30%] h-72">
            <Image
              src={destinations[2].image}
              alt={destinations[2].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[2].title}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-4 mt-4">
          <div className="relative overflow-hidden rounded-lg w-[45%] h-72">
            <Image
              src={destinations[3].image}
              alt={destinations[3].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[3].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg w-[25%] h-72">
            <Image
              src={destinations[4].image}
              alt={destinations[4].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[4].title}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg w-[30%] h-72">
            <Image
              src={destinations[5].image}
              alt={destinations[5].title}
              layout="fill"
              priority
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute rounded-full  bottom-2 left-2 bg-black bg-opacity-50 text-white text-center py-2 px-8">
              {destinations[5].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;