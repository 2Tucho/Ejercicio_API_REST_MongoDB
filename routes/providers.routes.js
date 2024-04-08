const providerController = require('../controllers/provider.controllers');
const router = require('express').Router();

// http://localhost:3000/api/providers
router.get("/", providerController.getAllProviders);

module.exports = router;