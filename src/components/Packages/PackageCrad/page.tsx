import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PackageCard = ({
  url,
  alt,
  title,
  details,
  price,
  duration,
  href,
}: any) => {
  return (
    <Link
      href={`${href}`}
      className="flex flex-col lg:rounded-lg overflow-hidden bg-[#EDEAEA] p-4"
    >
      {/* Upper half for the image */}
      <div className="relative flex-grow w-full min-h-[250px]">
        <Image
          src={url}
          alt={alt}
          fill
          priority
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Lower half for the text details */}
      <div className="flex flex-col flex-grow justify-between py-4">
        <h2 className="text-[20px] font-bold font-modicaMedium">{title}</h2>
        <p className="text-gray text-md lg:text-lg lg:leading-8 font-sfproLight">
          {details}
        </p>
        <hr className="border-gray-300 my-2 lg:my-4" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm lg:text-md font-bold font-modicaMedium">
              Starting From:
            </p>
            <p className="text-[20px] lg:text-[24px] font-semibold text-green-700">
              ₹{price}{" "}
              <span className="text-[12px] lg:text-[16px] font-medium text-gray-600">
                per person.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="text-yellow-600" />
            <p className="text-3xl font-bold font-sfproLight">{duration}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="bg-green-600 text-sm lg:text-md font-bold text-white px-4 py-2 hover:bg-green-700 transition duration-300">
          Book Now
        </button>

        <button className="bg-yellow-600 text-sm lg:text-md font-bold text-white px-4 py-2 hover:bg-yellow-700 transition duration-300 ml-2">
          Know More
        </button>
      </div>
    </Link>
  );
};

export default PackageCard;
