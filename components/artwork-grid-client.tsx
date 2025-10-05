"use client";

import { useState } from "react";
import Image from "next/image";
import { ArtworkModal } from "./artwork-modal";
import { Item } from "@/lib/types/common";

interface ArtworkGridClientProps {
  artworks: Item[];
  featured?: boolean;
}

export function ArtworkGridClient({
  artworks,
  featured = false,
}: ArtworkGridClientProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Item | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork, index) => (
          <article
            key={artwork.id}
            className="group relative aspect-[3/4] bg-muted rounded-sm overflow-hidden"
          >
            <button
              onClick={() => setSelectedArtwork(artwork)}
              className="w-full h-full cursor-pointer"
              aria-label={`View details for ${artwork.title}`}
            >
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={`${artwork.title} - ${artwork.medium} artwork from ${artwork.year}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={featured && index < 3}
                loading={featured && index < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-sans text-xl font-medium mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {artwork.medium}, {artwork.year}
                  </p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </>
  );
}
