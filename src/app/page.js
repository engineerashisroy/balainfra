import HeroSlider from "@/components/HeroSlider";
import HomeCart from "@/components/HomeCart";
import ServiceCart from "@/components/ServiceCart";

export default function Home() {
  return (
    <div>
      {/* <HeroSlider></HeroSlider> */}
      {/* <HeroCaousul></HeroCaousul> */}
      <div>
        <HeroSlider></HeroSlider>
      </div>
      <div className="">
        <HomeCart></HomeCart>
      </div>
      <div className="">
        <ServiceCart></ServiceCart>{" "}
      </div>
    </div>
  );
}
