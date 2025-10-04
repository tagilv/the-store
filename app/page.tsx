import { FeaturedArt } from "@/components/featured-art";
import { StoreIntro } from "@/components/store-intro";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StoreIntro />
      <FeaturedArt />
      {/* <WhyChooseUs /> */}
    </main>
  );
}
