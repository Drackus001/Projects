const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello API");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
