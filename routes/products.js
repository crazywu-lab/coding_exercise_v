const express = require("express");
const Products = require("../models/Products");
const router = express.Router();

router.get("/", (req, res) => {
  const products = Products.findAll();
  res.status(200).json(products).end();
});

router.get("/search/:keyword?", (req, res) => {
  const products = Products.loadSearch(req.params.keyword);
  res.status(200).json(products).end();
});

module.exports = router;
