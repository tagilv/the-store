import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | De Boerderij",
  description:
    "Learn about our independent art gallery and our passion for curating exceptional pieces",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance">
                Our Story
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg text-pretty">
                <p>
                  Based in the Netherlands, we are an independent art collector
                  and seller with a deep passion for discovering and sharing
                  exceptional artworks.
                </p>
                <p>
                  What started as a personal collection has grown into a curated
                  gallery, connecting art enthusiasts with pieces that inspire,
                  provoke thought, and bring beauty into everyday life.
                </p>
                <p>
                  We specialize in contemporary and classic works from both
                  established and emerging artists, with a particular focus on
                  European talent and unique pieces that tell compelling
                  stories.
                </p>
                <p>
                  Our approach is personal and thoughtful. We take the time to
                  understand what you are looking for and help you find artwork
                  that truly resonates with your vision and space.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-muted rounded-sm overflow-hidden">
              <Image
                src="/artist.png"
                alt="Art gallery space with curated collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
