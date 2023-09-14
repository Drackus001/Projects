const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();

// Route: `/categories`
router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }

  res.send(categoryList);
});

router.post("/", async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
    });

    category = await category.save();

    if (!category) {
      res.status(400).send("The Category cannot be created.");
    }
    res.send(category);
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let deletedCategory = await Category.findByIdAndRemove(req.params.id);

    if (!deletedCategory) {
      res.status(404).send("category not found!");
    }
    res.send({ message: `Category deleted!` });
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
});

module.exports = router;
