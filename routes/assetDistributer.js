const express = require('express');
const router = express.Router();
const assetDistributorController = require('../controllers/assetDistributorController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/asset_distributor', authMiddleware, assetDistributorController.renderassetDistributorDashboard);

module.exports = router;