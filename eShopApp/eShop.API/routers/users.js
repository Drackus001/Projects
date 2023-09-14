const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

// http://localhost:3000/api/v1/user
router.get(`/`, async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({ success: false });
  }

  res.send(userList);
});

module.exports = router;
