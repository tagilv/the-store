"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border z-50 md:hidden shadow-lg">
            <div className="mx-auto max-w-7xl px-6 py-6 space-y-4">
              <Link
                href="/art"
                className="block text-sm hover:text-foreground/80 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Art
              </Link>
              <Link
                href="/glassware"
                className="block text-sm hover:text-foreground/80 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Glassware
              </Link>
              <Link
                href="/furniture"
                className="block text-sm hover:text-foreground/80 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Furniture
              </Link>
              <Link
                href="/about"
                className="block text-sm hover:text-foreground/80 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm hover:text-foreground/80 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
