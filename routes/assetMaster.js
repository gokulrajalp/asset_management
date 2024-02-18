// routes/employee.js
const express = require('express');
const router = express.Router();
const assetMasterController = require('../controllers/assetMasterController');

router.get('/asset_master-dashboard', assetMasterController.renderAssetMasterDashboard);

module.exports = router;
