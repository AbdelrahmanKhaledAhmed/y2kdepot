import p1 from "@assets/p1.png";
import p1b from "@assets/p1-2.jpg";
import p2 from "@assets/p2.png";
import p2b from "@assets/p2-2.jpg";
import p3 from "@assets/p3.png";
import p3b from "@assets/p3-2.jpg";
import p4 from "@assets/p4.png";
import p4b from "@assets/p4-2.jpg";
import p5 from "@assets/p5.png";
import p5b from "@assets/p5-2.jpg";

export interface ProductData {
  id: number;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  isNew: boolean;
}

export const SIZES = ['100', '110', '120'];

export const products: ProductData[] = [
  { id: 1, name: "FLAME BUCKLE BELT", price: 450, images: [p1, p1b], sizes: SIZES, isNew: true },
  { id: 2, name: "OVAL SWIRL BELT", price: 450, images: [p2, p2b], sizes: SIZES, isNew: true },
  { id: 3, name: "DRAGON WING BELT", price: 450, images: [p3, p3b], sizes: SIZES, isNew: true },
  { id: 4, name: "TRIBAL WING BELT", price: 450, images: [p4, p4b], sizes: SIZES, isNew: true },
  { id: 5, name: "BLADE BUCKLE BELT", price: 450, images: [p5, p5b], sizes: SIZES, isNew: true },
];

export function getProductById(id: number): ProductData | undefined {
  return products.find((p) => p.id === id);
}
