const express = require('express');
const router = express.Router();
const assetCategoryMasterController = require('../controllers/assetCategoryMasterController');
const authMiddleware = require('../middleware/authMiddleware');


const setRoleMiddleware = (req, res, next) => {
    req.role = 'asset_category_master'; 
    next();
  };


router.get('/asset_category_master', setRoleMiddleware, authMiddleware, assetCategoryMasterController.renderAssetCategoryMasterDashboard);
router.get('/asset_category/add', setRoleMiddleware, authMiddleware, assetCategoryMasterController.renderAddAssetCategory);
router.post('/asset_category/add', setRoleMiddleware, authMiddleware, assetCategoryMasterController.handleAddAssetCategory);
router.get('/asset_category/:id/edit', setRoleMiddleware, authMiddleware, assetCategoryMasterController.renderEditAssetCategory);
router.post('/asset_category/:id/edit', setRoleMiddleware, authMiddleware, assetCategoryMasterController.handleEditAssetCategory);



module.exports = router;
