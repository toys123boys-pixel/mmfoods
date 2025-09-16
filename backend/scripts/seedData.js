import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";
import Product from "../models/Product.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});

    // Create admin user
    const adminUser = new User({
      email: "admin@mmfoods.com",
      password: "admin123", // pre-save hook will hash it
      isAdmin: true,
    });

    await adminUser.save();

    await adminUser.save();
    console.log("Admin user created");

    // Create sample products
    const products = [
      {
        name: "Premium Cocoa Powder",
        description:
          "Rich, dark cocoa powder perfect for baking and hot chocolate. Made from finest quality cocoa beans.",
        price: 299,
        image:
          "https://images.pexels.com/photos/6419744/pexels-photo-6419744.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Cocoa Powder",
        stock: 50,
      },
      {
        name: "Dark Chocolate Chips",
        description:
          "Premium dark chocolate chips with 70% cocoa content. Perfect for cookies and baking.",
        price: 199,
        image:
          "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Chocolate Chips",
        stock: 100,
      },
      {
        name: "Milk Chocolate Chips",
        description:
          "Creamy milk chocolate chips that melt beautifully in your favorite recipes.",
        price: 179,
        image:
          "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Chocolate Chips",
        stock: 75,
      },
      {
        name: "Rainbow Sprinkles",
        description:
          "Colorful rainbow sprinkles to add fun and decoration to your desserts.",
        price: 149,
        image:
          "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Sprinkles",
        stock: 60,
      },
      {
        name: "Chocolate Sprinkles",
        description:
          "Classic chocolate sprinkles for traditional cake and ice cream decoration.",
        price: 139,
        image:
          "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Sprinkles",
        stock: 45,
      },
      {
        name: "Rich Chocolate Milk",
        description:
          "Creamy chocolate milk made with real cocoa and fresh milk. Ready to drink.",
        price: 89,
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Chocolate Milk",
        stock: 80,
      },
      {
        name: "Baking Chocolate Bar",
        description:
          "Unsweetened baking chocolate perfect for all your baking and cooking needs.",
        price: 249,
        image:
          "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Baking Chocolate",
        stock: 40,
      },
      {
        name: "White Chocolate Chips",
        description:
          "Smooth white chocolate chips that add sweetness and richness to any recipe.",
        price: 189,
        image:
          "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Chocolate Chips",
        stock: 55,
      },
      {
        name: "Dutch Process Cocoa",
        description:
          "Premium Dutch-processed cocoa powder with smooth texture and rich flavor.",
        price: 349,
        image:
          "https://images.pexels.com/photos/6419744/pexels-photo-6419744.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Cocoa Powder",
        stock: 30,
      },
      {
        name: "Mini Chocolate Chips",
        description:
          "Tiny chocolate chips perfect for muffins, pancakes, and small baked goods.",
        price: 169,
        image:
          "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Chocolate Chips",
        stock: 65,
      },
    ];

    await Product.insertMany(products);
    console.log("Sample products created");

    console.log("Database seeded successfully!");
    console.log("Admin credentials:");
    console.log("Email: admin@mmfoods.com");
    console.log("Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
