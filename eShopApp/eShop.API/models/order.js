const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

exports.Order = mongoose.model("Order", OrderSchema);
