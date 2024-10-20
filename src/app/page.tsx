import Banner from "@/components/Banner/page";
import Destinations from "@/components/Destinations/page";
import Packages from "@/components/Packages/page";
import WhyUS from "@/components/WhyUs/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyUS />
      <Destinations />
      <Packages />
    </div>
  );
}
