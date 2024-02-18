// routes/employee.js
const express = require('express');
const router = express.Router();
const assetCategoryMasterController = require('../controllers/assetCategoryMasterController');

router.get('/asset_category_master', assetCategoryMasterController.renderAssetCategoryMasterDashboard);


// Render Add Asset Category Form
router.get('/asset_category/add', assetCategoryMasterController.renderAddAssetCategory);

// Handle Add Asset Category Form Submission
router.post('/asset_category/add', assetCategoryMasterController.handleAddAssetCategory);

// Render Edit Asset Category Form
router.get('/asset_category/:id/edit', assetCategoryMasterController.renderEditAssetCategory);

// Handle Edit Asset Category Form Submission
router.post('/asset_category/:id/edit', assetCategoryMasterController.handleEditAssetCategory);



module.exports = router;
