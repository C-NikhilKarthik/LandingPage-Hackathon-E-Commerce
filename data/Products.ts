export interface ProductItem {
  src: string;
  name: string;
  price: string;
  actualPrice?: string;
  available?: boolean;
}

export const Products: ProductItem[] = [
  {
    src: "/Products/Image1.png",
    name: "Classic Comfort Chair",
    price: "₹4,499",
  },
  {
    src: "/Products/Image2.png",
    name: "Ceramic Comfort Chair",
    price: "₹5,999",
    actualPrice: "₹6,999",
  },
  {
    src: "/Products/Image3.png",
    name: "Relaxo Armchair",
    price: "₹56,000",
  },
  {
    src: "/Products/Image4.png",
    name: "Relaxo Eco Armchair",
    price: "₹4,499",
    actualPrice: "₹6,999",
  },
  {
    src: "/Products/Image5.png",
    name: "Comfort Legstar",
    price: "₹11,999",
  },
  {
    src: "/Products/Image6.png",
    name: "Classic Comfort Chair",
    price: "₹56,000",
    available: false,
  },
  {
    src: "/Products/Image7.png",
    name: "Ellipsum Classic",
    price: "₹20,000",
    available: false,
  },
  {
    src: "/Products/Image8.png",
    name: "Ellipsum Ottoman",
    price: "₹25,000",
    actualPrice: "₹26,999",
  },
  {
    src: "/Products/Image9.png",
    name: "Tri-set Ellipsum",
    price: "₹36,000",
  },
  {
    src: "/Products/Image4.png",
    name: "Ellipsum Classic",
    price: "₹8,499",
    available: false,
  },
  {
    src: "/Products/Image6.png",
    name: "Classic Comfort Chair",
    price: "₹7,999",
    actualPrice: "₹8,999",
  },
  {
    src: "/Products/Image2.png",
    name: "Comfort Legstar",
    price: "₹4,499",
  },
];
