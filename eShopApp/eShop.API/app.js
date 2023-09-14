const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

const API = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

// http://localhost:3000/api/v1/products
app.get(`${API}/products`, async (req, res) => {
  const productList = await Product.find();

  if (!productList) {
    res.status(500).json({ success: false });
  }

  res.send(productList);
});

app.post(`${API}/product`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });

  // res.send(newProduct);
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connection is Ready...");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is running at http://localhost:3000");
});
