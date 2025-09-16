import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = new User({
      email: "admin@mmfoods.com",
      password: hashedPassword,
      isAdmin: true
    });

    await admin.save();
    console.log("✅ Admin user created successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1);
  }
};

createAdmin();
