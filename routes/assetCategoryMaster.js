// routes/employee.js
const express = require('express');
const router = express.Router();
const assetCategoryMasterController = require('../controllers/assetCategoryMasterController');

router.get('/asset_category_master-dashboard', assetCategoryMasterController.renderAssetCategoryMasterDashboard);

module.exports = router;
