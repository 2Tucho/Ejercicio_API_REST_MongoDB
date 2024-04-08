const providerController = require('../controllers/provider.controllers');
const router = require('express').Router();

// GET http://localhost:3000/api/providers
router.get("/", providerController.getAllProviders);

// POST http://localhost:3000/api/providers
router.post("/", providerController.createProvider);

module.exports = router;