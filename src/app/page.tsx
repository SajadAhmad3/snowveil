import Activities from "@/components/Activities/page";
import Banner from "@/components/Banner/page";
import Destinations from "@/components/Destinations/page";
import Faqs from "@/components/Faqs/page";
import OfferCard from "@/components/Offers/page";
import Packages from "@/components/Packages/page";
import WhyUS from "@/components/WhyUs/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyUS />
      <Destinations />
      <Packages />
      <OfferCard />
      <Activities />
      <Faqs />
    </div>
  );
}
