const express = require('express');
const router = express.Router();
const assetCategoryMasterController = require('../controllers/assetCategoryMasterController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/asset_category_master', authMiddleware, assetCategoryMasterController.renderAssetCategoryMasterDashboard);


router.get('/asset_category/add', authMiddleware, assetCategoryMasterController.renderAddAssetCategory);

router.post('/asset_category/add', authMiddleware, assetCategoryMasterController.handleAddAssetCategory);

router.get('/asset_category/:id/edit', authMiddleware, assetCategoryMasterController.renderEditAssetCategory);

router.post('/asset_category/:id/edit', authMiddleware, assetCategoryMasterController.handleEditAssetCategory);



module.exports = router;
