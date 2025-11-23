"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Item } from "@/lib/types/common";

interface ItemModalProps {
  item: Item;
  basePath: string;
}

export function ItemModal({ item, basePath }: ItemModalProps) {
  const router = useRouter();
  const pathname = usePathname();

  const shouldShowModal = pathname !== `/${basePath}`;

  const handleClose = () => {
    // For featured items, navigate to home page since they're displayed there
    // For other collections, navigate to their collection page
    if (basePath === "featured") {
      router.push("/");
    } else {
      router.push(`/${basePath}`);
    }
  };

  useEffect(() => {
 
    if (!shouldShowModal) {
      document.body.style.overflow = "unset";
      return;
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleClose, shouldShowModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  if (!shouldShowModal) {
    return null;
  }

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
          onClick={handleClose}
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
              priority
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