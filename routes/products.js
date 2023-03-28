const router = require("express").Router();
const products = require("../data/products");

const productsController = require("../controllers/products");

router.get("/products", productsController.list);

router.get("/products/:id", productsController.show);

router.post("/products", productsController.create);

module.exports = router;
