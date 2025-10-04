"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Item } from "@/lib/data";

interface ArtworkModalProps {
  artwork: Item;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="h-6 w-6" />
      </Button>

      <div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[3/4] bg-muted rounded-sm overflow-hidden">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={`${artwork.title} - ${artwork.medium} artwork from ${artwork.year}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="text-white space-y-6">
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-2">
              {artwork.title}
            </h2>
            <p className="text-white/60 text-lg">{artwork.year}</p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-white/60 mb-1">Medium</p>
              <p className="text-lg">{artwork.medium}</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Dimensions</p>
              <p className="text-lg">{artwork.dimensions}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-white/60 mb-2">About this piece</p>
            <p className="text-white/80 leading-relaxed">
              {artwork.description}
            </p>
          </div>

          <Button
            variant="outline"
            className="bg-white text-black hover:bg-white/90"
          >
            Inquire About This Piece
          </Button>
        </div>
      </div>
    </div>
  );
}
