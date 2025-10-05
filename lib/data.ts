export interface Item {
  id: string;
  title: string;
  category: "art" | "glassware" | "furniture";
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  image: string;
  price?: string;
}

export const items: Item[] = [
  {
    id: "1",
    title: "Abstract Horizons",
    category: "art",
    medium: "Acrylic on Canvas",
    year: "2024",
    dimensions: '36" × 48"',
    description:
      "An exploration of color and form inspired by coastal landscapes at dawn.",
    image: "/abstract-colorful-painting-horizon.jpg",
  },
  {
    id: "2",
    title: "Urban Reflections",
    category: "art",
    medium: "Mixed Media",
    year: "2024",
    dimensions: '24" × 36"',
    description:
      "A contemporary piece capturing the energy and rhythm of city life.",
    image: "/urban-abstract-art-cityscape.jpg",
  },
  {
    id: "3",
    title: "Ethereal Dreams",
    category: "art",
    medium: "Oil on Canvas",
    year: "2023",
    dimensions: '30" × 40"',
    description:
      "Soft, flowing forms that evoke a sense of tranquility and introspection.",
    image: "/ethereal-soft-abstract-painting.jpg",
  },
  {
    id: "4",
    title: "Geometric Harmony",
    category: "art",
    medium: "Acrylic on Canvas",
    year: "2024",
    dimensions: '32" × 32"',
    description:
      "Bold geometric shapes and vibrant colors create a dynamic visual rhythm.",
    image: "/geometric-abstract-art-colorful.jpg",
  },
  {
    id: "5",
    title: "Nature's Whisper",
    category: "art",
    medium: "Watercolor on Paper",
    year: "2023",
    dimensions: '28" × 36"',
    description:
      "Organic forms and natural tones inspired by forest landscapes.",
    image: "/watercolor-nature-abstract-organic.jpg",
  },
  {
    id: "6",
    title: "Midnight Reverie",
    category: "art",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: '40" × 30"',
    description:
      "A moody, dramatic piece exploring depth and shadow in abstract form.",
    image: "/dark-moody-abstract-painting-dramatic.jpg",
  },
  {
    id: "7",
    title: "Venetian Vase Collection",
    category: "glassware",
    medium: "Hand-blown Glass",
    year: "2023",
    dimensions: '12" × 8"',
    description:
      "Exquisite hand-blown glass vases featuring traditional Venetian techniques.",
    image: "/elegant-venetian-glass-vases-colorful.jpg",
  },
  {
    id: "8",
    title: "Crystal Decanter Set",
    category: "glassware",
    medium: "Cut Crystal",
    year: "2024",
    dimensions: '10" × 6"',
    description:
      "Precision-cut crystal decanter with matching glasses, perfect for collectors.",
    image: "/luxury-crystal-decanter-set-elegant.jpg",
  },
  {
    id: "9",
    title: "Art Deco Glass Bowls",
    category: "glassware",
    medium: "Colored Glass",
    year: "2023",
    dimensions: '8" × 8"',
    description:
      "Stunning Art Deco inspired glass bowls with geometric patterns.",
    image: "/art-deco-glass-bowls-geometric-colorful.jpg",
  },
  {
    id: "10",
    title: "Mid-Century Lounge Chair",
    category: "furniture",
    medium: "Walnut & Leather",
    year: "1960s",
    dimensions: '32" × 30" × 28"',
    description:
      "Iconic mid-century modern lounge chair in excellent restored condition.",
    image: "/mid-century-modern-lounge-chair-walnut-leather.jpg",
  },
  {
    id: "11",
    title: "Danish Teak Sideboard",
    category: "furniture",
    medium: "Teak Wood",
    year: "1970s",
    dimensions: '72" × 18" × 30"',
    description:
      "Classic Danish design sideboard with sliding doors and interior shelving.",
    image: "/danish-teak-sideboard-vintage-modern.jpg",
  },
  {
    id: "12",
    title: "Brass & Marble Console",
    category: "furniture",
    medium: "Brass & Marble",
    year: "2024",
    dimensions: '48" × 14" × 32"',
    description:
      "Contemporary console table featuring brass frame and white marble top.",
    image: "/brass-marble-console-table-modern-elegant.jpg",
  },
];

export function getItemsByCategory(category: Item["category"]): Item[] {
  return items.filter((item) => item.category === category);
}

export function getFeaturedItems(limit = 6): Item[] {
  return items.filter((item) => item.category === "art").slice(0, limit);
}
