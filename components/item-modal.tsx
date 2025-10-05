"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { Item } from "@/lib/data";

interface ItemModalProps {
  item: Item;
  onClose: () => void;
}

export function ItemModal({ item, onClose }: ItemModalProps) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden"; // ← Prevents scrolling

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // ← Restores scrolling
    };
  }, [handleClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-5xl w-full bg-background rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={handleContentClick}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
          <div className="relative w-full aspect-[3/4] bg-muted rounded-sm overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority // Priority loading since modal content is immediately visible
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2
                id="modal-title"
                className="font-sans text-2xl md:text-3xl font-light tracking-tight mb-2 text-balance"
              >
                {item.title}
              </h2>
              <p className="text-muted-foreground">
                {item.medium} • {item.year}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Dimensions</h3>
                <p className="text-muted-foreground">{item.dimensions}</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.price && (
                <div>
                  <h3 className="font-medium mb-1">Price</h3>
                  <p className="text-muted-foreground">{item.price}</p>
                </div>
              )}
            </div>

            <Button className="w-full">Inquire About This Piece</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
