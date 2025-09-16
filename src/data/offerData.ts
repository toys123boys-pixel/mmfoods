export interface Offer {
  id: number;
  title: string;
  description: string;
  price: number;
  items: string[];
  popular: boolean;
  image: string; // ✅ added image
}

const offersData: Offer[] = [
  {
    id: 1,
    title: "Family Chocolate Pack",
    description: "Perfect for families who love a mix of chocolates.",
    price: 10000,
    items: [
      "5x Dark Chocolate Bars",
      "3x Milk Chocolate Truffles",
      "2x Hazelnut Spreads",
    ],
    popular: true,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing", // ✅ dummy package image
  },
  {
    id: 2,
    title: "Premium Lovers Pack",
    description: "A luxury pack for premium chocolate lovers.",
    price: 15000,
    items: [
      "10x Dark Chocolate Bars",
      "6x Milk Chocolate Truffles",
      "4x Hazelnut Spreads",
    ],
    popular: false,
    image: "/images/offer2.jpg",
  },
  {
    id: 3,
    title: "Mega Chocolate Deal",
    description: "Bulk pack for parties or gifting purposes.",
    price: 20000,
    items: [
      "15x Dark Chocolate Bars",
      "10x Milk Chocolate Truffles",
      "8x Hazelnut Spreads",
    ],
    popular: true,
    image: "/images/offer3.jpg",
  },
];

export default offersData;
