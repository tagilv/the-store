"use client";

import { useState } from "react";
import Image from "next/image";
import { ItemModal } from "./item-modal";
import { Item } from "@/lib/types/common";

interface ItemGridClientProps {
  items: Item[];
}

export function ItemGridClient({ items }: ItemGridClientProps) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="group relative aspect-[3/4] bg-muted rounded-sm overflow-hidden"
          >
            <button
              onClick={() => handleItemClick(item)}
              className="w-full h-full cursor-pointer"
              aria-label={`View details for ${item.title}`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} - ${item.medium} from ${item.year}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-sans text-xl font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {item.medium}, {item.year}
                  </p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
}
