// src/data/productData.ts
export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  
}

const productData: Product[] = [
  {
    _id: "1",
    name: "SprinKles",
    description: "Sprinkles 100g and 1Kg.",
    category: "Sprinkles",
    price: 150,
    image: "https://drive.google.com/file/d/1XekO-0zNmk1wT0PZUa6rHzjCT8rv4-yJ/view?usp=sharing",
  },
  {
    _id: "2",
    name: "Non Pearls",
    description: "Non Pearls 100g",
    category: "Non Pearls",
    price: 150,
    image: "https://drive.google.com/file/d/1-BDf8ms8iKgw8hyT5WK1bStr34f9uAoZ/view?usp=sharing",
  },
  {
    _id: "3",
    name: "Evaporated Milk",
    description: "Badshah Evaporated Milk 390 Grams Product of Malaysia.",
    category: "Evaporated Milk",
    price: 600,
    image: "https://drive.google.com/file/d/1pcYUd3IAtSb8fyDYR2gH9-OfLEXhL4yv/view?usp=sharing",   
  },
  {
    _id: "4",
    name: "Condensed Milk",
    description: "POLAC Condensed Milk 1kg Product of Malaysia.",
    category: "Condensed Milk",
    price: 570,
    image: "https://drive.google.com/file/d/1JwSmtNho4RBLliShQB0PuK-HNdLiY0Sn/view?usp=sharing",  
  },
  {
    _id: "5", 
    name: "Cocoa Powder",            
    description: "POLAC Cocoa Powder 25Kg.",
    category: "Cocoa Powder",
    price: 27500,
    image: "https://drive.google.com/file/d/10B1WMroKpDHDXJ0lJY9mEKQ9J4toVD4Q/view?usp=sharing",    
  },                   
  {
    _id: "6",
    name: "Chocolate Slab",        
    description: "Bona Slab 1Kg and 2Kg.",
    category: "Chocolate Slab",
    price: 580,
    image: "https://drive.google.com/file/d/1d9Cck_z7g-IF02Avf_DWUbsOj2hnWI-p/view?usp=sharing"   
  },
  {
 _id: "7",
 name: "Chocolate Slab",
 description: "Good Slab 1Kg and 2Kg.",
 category: "Chocolate Slab",
 price: 580,
 image: "https://drive.google.com/file/d/1zLuQmZ9Vuu8EUKBFonr8xfZvwil1R1-v/view?usp=sharing" 
}, 
{    
_id: "8",
name: "Dream Cake Box",
description: "Dream Cake Box 4.4 Inch and 5.5 Inch.",
category: "Dream Cake Box",
price: 210,
image: "https://drive.google.com/file/d/1iIErn3dxvIq5RbpvMp9BUL-oNahYnsxi/view?usp=sharing"
},
{ 
_id: "9",
name: "Paper Cake Cups",
description: "Paper Cake Cups in Different Colors 1 set of 100 Pcs.",
category: "Paper Cake Cups",
price: 2500,
image: "https://drive.google.com/file/d/1t2iWHOMKFx4aNNvVTpgZQBe05BTtYnbK/view?usp=sharing"
},
{ 
_id: "10",
name: "Cake Gel",
description: "Cake Gel 5Kg Mango and Stroberry.",
category: "Gel",
price: 1350,
image: "https://drive.google.com/file/d/1Zu9ji_GkyH5RBJXfJllUQc0RGVQyi911/view?usp=sharing"  
},
{  
_id: "11",
name: "Chocolate Beans",
description: "Chocolate Beans 1Kg and 100g.",
category: "chocolate Beans",
price: 1200,
image: "https://drive.google.com/file/d/1gy8Fjn8EPjAcR-QJeboiiisoOH2f8WkQ/view?usp=sharing"  
},
{ 
_id: "12", 
name: "Yellow Mustard",  
description: "FRENCHS CLASSIC YELLOW MUSTARD 226 GM.",
category: "Yellow Mustard",
price: 800,
image: "https://drive.google.com/file/d/1HBzMrXlb9r0cuKxpeXHc0BQLdRFbqZJP/view?usp=sharing"  
},
{  
_id: "13", 
name: "Round Kangora Board",  
description: "Round Kangora Board 3Pcs Set.",
category: "Round Kangora Board",
price: 400,
image: "https://drive.google.com/file/d/1bykDgfxjloUJSQxNAjSvwwpuDbPktHpQ/view?usp=sharing"  
},  
{ 
_id: "14", 
name: "Chocolate Wafer Biscuit",  
description: "Chocolate Wafer Biscuit Chocolate and Stroberry.",
category: " Wafer Biscuit",
price: 480,
image: "https://drive.google.com/file/d/1EHy0SL7QVRTCkfJgiuLX9CtfSmRd_TYC/view?usp=sharing"  
},  
{ 
_id: "15", 
name: "Polac Cocktail",  
description: "POLAC PINEAPPLE SLICES IN HEAVY SYRUP TIN 565 GM.",
category: "Polac Cocktail",
price: 500,
image: "https://drive.google.com/file/d/1WJSqgNghQKGDQ5D4-CzWs7C0xGDGgEeJ/view?usp=sharing"  
},  
{  
_id: "16", 
name: "Chocolate Glazing Gel",  
description: "Chocolate Glazing Gel 5Kg.",
category: "Gel",
price: 5600,
image: "https://drive.google.com/file/d/1pu5CkiNCKEhaA2BhrClN_LhvtJ-LHvRe/view?usp=sharing"  
},  
{ 
_id: "17", 
name: "Cheese Cake Filling",  
description: "Cheese Filling 500gm.",
category: "Filling",
price: 2500,
image: "https://drive.google.com/file/d/1S68LnrDeQeJc-GkQU6Vgr1kHtTuYad4s/view?usp=sharing"  
},  
{ 
_id: "18", 
name: "Choco Wafer Creamy",  
description: "Choco Wafer Creamy 500gm.",
category: "Filling",
price: 2450,
image: "https://drive.google.com/file/d/1w1Zfez48OHGUvprnMflfdgBaVO6mUKCn/view?usp=sharing"  
},  
{ 
_id: "19", 
name: "Cake Gel",  
description: "Cake Gel 1Kg .",
category: "Gel",
price: 350,
image: "https://drive.google.com/file/d/1I6bBtJWVg6-kNAWnqu9w7I5L1yo13XTe/view?usp=sharing"  
}, 
  {
    _id: "20",
    name: "Evaporated Milk",
    description: "Badshah Evaporated Milk 390 Grams Product of Malaysia.",
    category: "Evaporated Milk",
    price: 610,
    image: "https://drive.google.com/file/d/1pcYUd3IAtSb8fyDYR2gH9-OfLEXhL4yv/view?usp=sharing",   
  },
  {
  _id:  "21",
  name: "Confecty",
description: "Confecty 1Kg Packing",
 category: "Confecty",
price: 660,
image: "https://drive.google.com/file/d/1xsyq2QKG3aEN5ImSt94VWKXFHM9OxrhC/view?usp=sharing",
  },
  {
   _id: "22",
   name: "Metallic PearL",
   description: "Metallic Pearl 1Kg",
   category: "Metallic Pearl",
   price: 2500,
   image: "https://drive.google.com/file/d/1RZAoHOqrNTcdYNNbDdbBpC3KwC5Kt_SA/view?usp=sharing",
    },
  {
  _id: "23",
  name: "Cocoa Powder",
  description: "Cocoa Powder King 25Kg",
  category: "Cocoa Powder",
  price: 32500,
  image: "https://drive.google.com/file/d/1nuQVU1dOoqK5fs7lp5ZxrC9eGC_QGoxm/view?usp=sharing",
      },
  {
  _id: "24",
  name: "Metallic Pearl",
  description: "Metallic Pearl Colors 1Kg",
  category: "Metallic Pearl",
  price: 2500,
  image: "https://drive.google.com/file/d/1s1qQhnUs8cQR4ocqbc9TJV7aAiDlt_Ka/view?usp=sharing",
  },  
];
export default productData;
