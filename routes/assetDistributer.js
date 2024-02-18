// routes/employee.js
const express = require('express');
const router = express.Router();
const assetDistributorController = require('../controllers/assetDistributorController');

router.get('/asset_distributor', assetDistributorController.renderassetDistributorDashboard);

module.exports = router;