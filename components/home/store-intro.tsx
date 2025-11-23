import Link from "next/link";
import { Button } from "@/components/ui/button";
export function StoreIntro() {
  return (
    <section className="px-6 py-20 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-6">
            Curated Art from the Netherlands
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            An independent art collector and seller bringing exceptional
            contemporary and classic pieces to discerning collectors. Based in
            the heart of the Netherlands, we source unique artworks that tell
            stories and transform spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
