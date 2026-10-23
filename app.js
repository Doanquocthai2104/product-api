const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Product API is running"
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});