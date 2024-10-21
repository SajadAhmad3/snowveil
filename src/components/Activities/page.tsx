import Image from "next/image";
import ActivityCard from "./ActivityCard.tsx/page";

const activityData = [
  {
    url: "/images/banner1.jpg",
    alt: "Skiing",
    title: "Skiing",
  },
  {
    url: "/images/banner2.jpg",
    alt: "Shikara Ride",
    title: "Shikara Ride",
  },
  {
    url: "/images/banner3.jpg",
    alt: "Trekking",
    title: "Trekking",
  },
  {
    url: "/images/banner4.jpg",
    alt: "Biking",
    title: "Biking",
  },
  {
    url: "/images/banner5.jpg",
    alt: "Rafting",
    title: "Rafting",
  },
  {
    url: "/images/banner6.jpg",
    alt: "Camping",
    title: "Camping",
  },
  {
    url: "/images/banner7.jpg",
    alt: "Horse Riding",
    title: "Horse Riding",
  },
  {
    url: "/images/banner1.jpg",
    alt: "Snowboarding",
    title: "Snowboarding",
  },
];

const Activities = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-10 lg:py-20 px-4">
      <div className="flex flex-col w-full items-center text-center pb-10">
        <div className="relative flex-grow w-[170px] h-10">
          <Image
            src={"/images/activitiestag.svg"}
            alt={"tour"}
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xxl md:text-xxxl lg:text-4xl font-bold mb-4 text-white font-modicaMedium">
          Our Tour Activities
        </h2>
        <p className="text-gray-300 max-w-[700px] text-md lg:text-lg lg:leading-8 font-sfproLight">
          Discover a wide range of exciting tour activities designed to offer
          thrilling experiences and unforgettable memories. Whether you're
          seeking adventure or relaxation, our activities cater to every
          traveler's dream.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {activityData.slice(0, 8).map((activity, index) => (
          <ActivityCard
            key={index}
            url={activity.url}
            alt={activity.alt}
            activityName={activity.title}
          />
        ))}
      </div>
      <div className="flex w-full justify-center pt-10">
        <button className="bg-yellow-600 text-md font-bold text-white px-4 py-2 hover:bg-yellow-700 transition duration-300">
          View All Activities
        </button>
      </div>
    </div>
  );
};

export default Activities;
