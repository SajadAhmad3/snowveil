import Image from "next/image";

const OfferCard = () => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center bg-[#F9F4F0] mt-20 px-4">
      <Image
        src={"/images/banner3.jpg"}
        alt={"tour"}
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute mx-4 flex flex-col items-center justify-center text-center z-1 p-10  max-w-[700px] backdrop-blur bg-[#00000042] rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-modicaSemibold">
          Exclusive Winter Offer
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-modicaSemibold text-yellow-500 mb-2">
          50% off
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-[400px] md:max-w-[500px]">
          Enjoy up to 50% off on all winter activities. Don't miss out on
          skiing, snowboarding, and more!
        </p>
        <button className="bg-green-600 text-white px-4 sm:px-6 py-2 text-sm sm:text-lg font-bold rounded-md hover:bg-green-700 transition duration-300 w-fit">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
