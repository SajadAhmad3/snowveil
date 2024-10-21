import Image from "next/image";
import Link from "next/link";

const ActivityCard = ({ url, alt, activityName, href }: any) => {
  return (
    <Link href={`${href}`}>
      <div className="relative h-[380px] w-full rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300">
        {/* Background image */}
        <Image
          src={url}
          alt={alt}
          fill
          priority
          className="object-cover w-full h-full"
        />

        {/* Overlay div with activity name */}
        <div className="absolute bottom-3 left-0 right-0 bg-white p-3 rounded-lg mx-4 shadow-lg hover:bg-yellow-600 transition duration-500">
          <h2 className="text-md text-center font-modicaSemibold">
            {activityName}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
