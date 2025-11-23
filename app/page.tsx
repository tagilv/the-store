import { FeaturedArt } from "@/components/featured-art";
import { StoreIntro } from "@/components/store-intro";

export const revalidate = 43200;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StoreIntro />
      <FeaturedArt />
    </main>
  );
}
