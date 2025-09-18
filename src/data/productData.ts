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
    name: "SprinKles",
    description: "Sprinkles 100g and 1Kg.",
    category: "Sprinkles",
    price: 150,
    image: "https://drive.google.com/file/d/1XekO-0zNmk1wT0PZUa6rHzjCT8rv4-yJ/view?usp=sharing",
    stock: 120,
  },
  {
    _id: "2",
    name: "Non Pearls",
    description: "Non Pearls 100g",
    category: "Non Pearls",
    price: 150,
    image: "https://drive.google.com/file/d/1-BDf8ms8iKgw8hyT5WK1bStr34f9uAoZ/view?usp=sharing",
    stock: 120,
  },
  {
    _id: "3",
    name: "Evaporated Milk",
    description: "Badshah Evaporated Milk 390 Grams Product of Malaysia.",
    category: "Evaporated Milk",
    price: 600,
    image: "https://drive.google.com/file/d/1pcYUd3IAtSb8fyDYR2gH9-OfLEXhL4yv/view?usp=sharing",
    stock: 200,
  },
  {
    _id: "4",
    name: "Condensed Milk",
    description: "POLAC Condensed Milk 1kg Product of Malaysia.",
    category: "Condensed Milk",
    price: 570,
    image: "https://drive.google.com/file/d/1JwSmtNho4RBLliShQB0PuK-HNdLiY0Sn/view?usp=sharing",
    stock: 199,
  },
  {
    _id: "5",
    name: "Cocoa Powder",
    description: "POLAC Cocoa Powder 25Kg .",
    category: "Cocoa Powder",
    price: 27500,
    image: "https://drive.google.com/file/d/10B1WMroKpDHDXJ0lJY9mEKQ9J4toVD4Q/view?usp=sharing",
    stock: 300,
  },
  {
    _id: "6",
    name: "White Chocolate Cookies",
    description: "Crispy cookies with chunks of creamy white chocolate.",
    category: "Cookies",
    price: 6,
    image: "https://drive.google.com/file/d/1XEg0H8plRHIr4eeOVjrO3vQUk_TDsHA4/view?usp=sharing",
    stock: 95,
  },
  {                                                                     
    _id: "7",
    name: "Chocolate Slab",
    description: "Bona Slab 1Kg and 2Kg.",
    category: "Chocolate Slab",
    price: 580,
    image: "https://drive.google.com/file/d/1d9Cck_z7g-IF02Avf_DWUbsOj2hnWI-p/view?usp=sharing",
    stock: 100,   
  },
  
];
export default productData;
