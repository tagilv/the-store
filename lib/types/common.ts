export interface Item {
  id: string;
  title: string;
  handle: string;
  category: "art" | "glassware" | "furniture";
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  image: string;
  price?: string;
}
