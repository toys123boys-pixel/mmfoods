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
    image: "https://drive.google.com/file/d/1EtbXd--9MKsFO80isJ3S493EOipGkwBC/view?usp=sharing",
    stock: 120,
  },
  {
    _id: "2",
    name: "Non Pearls",
    description: "Non Pearls 100g",
    category: "Non Pearls",
    price: 150,
    image: "https://drive.google.com/file/d/1TC9kOr6HipYbZhflj4VKyrCzw2d6mhLo/view?usp=sharing",
    stock: 120,
  },
  {
    _id: "3",
    name: "Hazelnut Chocolate Spread",
    description: "Smooth spread made with roasted hazelnuts.",
    category: "Spreads",
    price: 8,
    image: "https://drive.google.com/file/d/1n8-ArIUTQbkVPXzeoH6t698kFsDcRtaH/view?usp=sharing",
    stock: 120,
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
    description: "Bona Slab 1Kg and 2Kg.",
    category: "Chocolate Slab",
    price: 580,
    image: "https://drive.google.com/file/d/1-hfv3BaqkkuWi51JAB5aUte0ctUgDu0f/view?usp=sharing",
    stock: 100,   
  },
  
];

export default productData;
