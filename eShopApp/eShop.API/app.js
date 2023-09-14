const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const productsRouter = require("./routers/products");
const ordersRouter = require("./routers/orders");
const categoriesRouter = require("./routers/categories");
const usersRouter = require("./routers/users");

require("dotenv/config");

// CONST
const API = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

// Routers
app.use(`${API}/products`, productsRouter);
app.use(`${API}/orders`, ordersRouter);
app.use(`${API}/categories`, categoriesRouter);
app.use(`${API}/users`, usersRouter);

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
