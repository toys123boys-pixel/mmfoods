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
    title: "5 September To 12 September",
    description: "Special Sale With Mystery Gifts.",
    price: 00,
    items: [
      "All Things",
      "All Things",
      "All things",
    ],
    popular: true,
    image: "https://drive.google.com/file/d/1os2sSOBuANJdMuxu6KNkcr6LbUPCOK2u/view?usp=sharing", 
  },
   {
    id: 2,
    title: "5 September To 12 September",
    description: "Special Sale With Mystery Gifts.",
    price: 00,
    items: [
      "All Things",
      "All Things",
      "All things",
    ],
    popular: true,
    image: "https://drive.google.com/file/d/1os2sSOBuANJdMuxu6KNkcr6LbUPCOK2u/view?usp=sharing", 
  },
     {
    id: 3,
    title: "5 September To 12 September",
    description: "Special Sale With Mystery Gifts.",
    price: 00,
    items: [
      "All Things",
      "All Things",
      "All things",
    ],
    popular: true,
    image: "https://drive.google.com/file/d/1os2sSOBuANJdMuxu6KNkcr6LbUPCOK2u/view?usp=sharing", 
  },
];
export default offersData;
