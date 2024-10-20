import {
  Book,
  Hotel,
  Map,
  Compass,
  HandCoinsIcon,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyUS = () => {
  return (
    <div className="relative max-w-[1300px] mx-auto pt-28 pb-20 ">
      <div className=" grid grid-cols-2">
        <div className="relative h-[550px]">
          <div className=" absolute w-[380px] h-[520px] rounded-xl overflow-hidden transition duration-500 hover:scale-105">
            <Image
              src={"/images/banner7.jpg"}
              alt="Loading..."
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-20 left-52 w-[375px] h-[280px] rounded-xl overflow-hidden transition duration-500 hover:scale-105">
            <Image
              src={"/images/banner6.jpg"}
              alt="Loading..."
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-28 right-8 w-[400px] h-[250px] rounded-xl overflow-hidden -z-10">
            <Image
              src={"/images/sun.svg"}
              alt="sun"
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="relative flex-grow w-[170px] h-10 ml-14">
              <Image
                src={"/images/whyustag.svg"}
                alt={"tour"}
                fill
                priority
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white font-modicaMedium">
              Why Choose Us
            </h2>
            <p className="text-gray-300 text-lg leading-8 font-sfproLight">
              With Every Step, We’re by Your Side: Offering Unmatched Expertise,
              Personal Care, and Memorable Experiences Tailored Just for You.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-10 pb-10 text-center">
            <div className="flex  items-center gap-4 p-4 bg-[#E0F7FA] rounded-lg transiton duration-300 hover:-translate-y-1">
              <HandCoinsIcon className="text-black  focus:outline-none w-20 h-20" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-modicaMedium">
                  Competitive Pricing
                </h3>
                <p className=" text-sm font-sfproLight">
                  Enjoy unbeatable value with transparent pricing and no hidden
                  fees.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#FFAB91] rounded-lg transiton duration-300 hover:-translate-y-1">
              <HandCoinsIcon className="text-black  focus:outline-none w-20 h-20" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-modicaMedium">
                  Locally Based Guides
                </h3>
                <p className=" text-sm font-sfproLight">
                  Experience authentic adventures with guides who know the area
                  best.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#FFF9C4] rounded-lg transiton duration-300 hover:-translate-y-1">
              <HandCoinsIcon className="text-black  focus:outline-none w-20 h-20" />
              <div className="felx flex-col">
                <h3 className="text-lg font-semibold font-modicaMedium">
                  Fast Booking
                </h3>
                <p className=" text-sm font-sfproLight">
                  Quick and easy reservations to get you on your way without
                  delay.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#E1BEE7] rounded-lg transiton duration-300 hover:-translate-y-1">
              <HandCoinsIcon className="text-black focus:outline-none w-20 h-20" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-modicaMedium">
                  Best Support 24/7
                </h3>
                <p className=" text-sm font-sfproLight">
                  Reach out anytime for assistance; we’re here to help you
                  always.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-14">
            <button className="bg-yellow-600 text-md font-bold text-white px-4 py-2  hover:bg-yellow-700 transition duration-300">
              Discover More
            </button>

            <Link href={""} className="flex items-center gap-4">
              <PhoneCall size={30} className="text-green-500" />
              <div>
                <p className="text-md text-white">To More Inquiry</p>
                <p className="text-sm text-green-500">+916006089901</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
