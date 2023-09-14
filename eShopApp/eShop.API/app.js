const express = require("express");
const app = express();
const morgan = require("morgan");

require("dotenv/config");

const API = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

// http://localhost:3000/api/v1/products
app.get(`${API}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "Laptop",
    image: "lp.png",
  };
  res.send(product);
});

app.post(`${API}/product`, (req, res) => {
  const newProduct = req.body;
  res.send(newProduct);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
