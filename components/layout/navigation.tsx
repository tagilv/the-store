import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-sans text-xl font-medium tracking-tight"
          >
            De Boerderij
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/art"
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Art
            </Link>
            <Link
              href="/glassware"
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Glassware
            </Link>
            <Link
              href="/furniture"
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Furniture
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Contact
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
