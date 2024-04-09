const providerController = require('../controllers/provider.controllers');
const router = require('express').Router();

// GET http://localhost:3000/api/providers
router.get("/", providerController.getAllProviders);

// POST http://localhost:3000/api/providers
router.post("/", providerController.createProvider);

// PUT http://localhost:3000/api/providers
router.put("/", providerController.updateProvider);

// PUT http://localhost:3000/api/providers
router.delete("/", providerController.deleteProvider);

module.exports = router;