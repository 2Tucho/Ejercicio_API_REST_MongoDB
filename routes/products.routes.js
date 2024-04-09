const productsController = require('../controllers/products.controllers');
const router = require('express').Router();

// GET http://localhost:3000/api/products
router.get("/", productsController.getAllProducts);

// POST http://localhost:3000/api/products
router.post("/", productsController.createProduct);

// PUT http://localhost:3000/api/products
//router.put("/", productsController.updateProduct);

// PUT http://localhost:3000/api/products
//router.delete("/", productsController.deleteProduct);

module.exports = router;