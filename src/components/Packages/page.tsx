import Image from "next/image";
import PackageCard from "./PackageCrad/page";

const packageData = [
  {
    url: "/images/banner6.jpg",
    alt: "Package 1",
    title: "Luxury Beach Resort",
    details:
      "Enjoy a luxurious stay at a private beach resort with all amenities.",
    price: "1,500",
    duration: "7 days",
  },
  {
    url: "/images/banner3.jpg",
    alt: "Package 2",
    title: "Mountain Adventure",
    details: "Experience the thrill of hiking and mountain climbing.",
    price: "1,200",
    duration: "5 days",
  },
  {
    url: "/images/banner4.jpg",
    alt: "Package 3",
    title: "City Escape",
    details: "A relaxing city escape in a metropolitan area with guided tours.",
    price: "900",
    duration: "3 days",
  },
  {
    url: "/images/banner6.jpg",
    alt: "Package 1",
    title: "Luxury Beach Resort",
    details:
      "Enjoy a luxurious stay at a private beach resort with all amenities.",
    price: "1,500",
    duration: "7 days",
  },
  {
    url: "/images/banner3.jpg",
    alt: "Package 2",
    title: "Mountain Adventure",
    details: "Experience the thrill of hiking and mountain climbing.",
    price: "1,200",
    duration: "5 days",
  },
  {
    url: "/images/banner4.jpg",
    alt: "Package 3",
    title: "City Escape",
    details: "A relaxing city escape in a metropolitan area with guided tours.",
    price: "900",
    duration: "3 days",
  },
];

const Packages = () => {
  return (
    <div className="relative bg-muted-900 py-20">
      <div className="flex flex-col w-full items-center text-center pb-10">
        <div className="relative flex-grow w-[170px] h-10">
          <Image
            src={"/images/tourtag.svg"}
            alt={"tour"}
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white font-modicaMedium">
          Thrilling Tour Plans
        </h2>
        <p className="text-gray-300 max-w-[700px] text-lg leading-8 font-sfproLight">
          Explore Top Destinations Curated for Unforgettable Adventures and
          Unique Experiences. Immerse Yourself in Local Cultures and Create
          Lasting Memories on Every Journey.
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-4">
        {packageData.map((pkg, index) => (
          <PackageCard
            key={index}
            url={pkg.url}
            alt={pkg.alt}
            title={pkg.title}
            details={pkg.details}
            price={pkg.price}
            duration={pkg.duration}
          />
        ))}
      </div>
      <div className="flex w-full justify-center pt-10">
        <button className="bg-yellow-600 text-md font-bold text-white px-4 py-2 hover:bg-yellow-700 transition duration-300">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default Packages;
