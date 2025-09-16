// src/data/productData.ts
export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  stock: number; // available units
}

const productData: Product[] = [
  {
    _id: "1",
    name: "Dark Chocolate Bar",
    description: "Rich 70% cocoa dark chocolate bar.",
    category: "Bars",
    price: 5,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 120,
  },
  {
    _id: "2",
    name: "Milk Chocolate Truffles",
    description: "Creamy milk chocolate with soft filling.",
    category: "Truffles",
    price: 12,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 75,
  },
  {
    _id: "3",
    name: "Hazelnut Chocolate Spread",
    description: "Smooth spread made with roasted hazelnuts.",
    category: "Spreads",
    price: 8,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 40,
  },
  {
    _id: "4",
    name: "White Chocolate Cookies",
    description: "Crispy cookies with chunks of creamy white chocolate.",
    category: "Cookies",
    price: 6,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 95,
  },
  {
    _id: "5",
    name: "White Chocolate Cookies",
    description: "Crispy cookies with chunks of creamy white chocolate.",
    category: "Cookies",
    price: 6,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 95,
  },
  {
    _id: "6",
    name: "White Chocolate Cookies",
    description: "Crispy cookies with chunks of creamy white chocolate.",
    category: "Cookies",
    price: 6,
    image: "/images/white-chocolate-cookies.jpg",
    stock: 95,
  },
  {                                                                     
    _id: "7",
    name: "Chocolate Slab",
    description: "Bona Slab.",
    category: "Chocolate Slab",
    price: 580,
    image: "https://drive.google.com/file/d/1FsbizR79hOj-iq6qH3yT9nu7uJgPc8xe/view?usp=sharing",
    stock: 100,   
  },
  
];

export default productData;
