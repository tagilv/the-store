// import { StoreIntro } from "@/components/store-intro"
// import { FeaturedArt } from "@/components/featured-art"
// import { WhyChooseUs } from "@/components/why-choose-us"

import { StoreIntro } from "@/components/StoreIntro";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StoreIntro />
      {/* <FeaturedArt />
      <WhyChooseUs /> */}
    </main>
  );
}
