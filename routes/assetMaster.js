const express = require('express');
const router = express.Router();
const assetMasterController = require('../controllers/assetMasterController');
const authMiddleware = require('../middleware/authMiddleware');

const setRoleMiddleware = (req, res, next) => {
    req.role = 'asset_master'; 
    next();
  }; 

router.get('/asset_master', setRoleMiddleware, authMiddleware, assetMasterController.renderAssetMasterDashboard);
router.get('/asset/add', setRoleMiddleware, authMiddleware, assetMasterController.renderAddAsset);
router.post('/asset/add', setRoleMiddleware, authMiddleware, assetMasterController.handleAddAsset);
router.get('/asset/:id/edit', setRoleMiddleware, authMiddleware, assetMasterController.renderEditAsset);
router.post('/asset/:id/edit', setRoleMiddleware, authMiddleware, assetMasterController.handleEditAsset);
router.get('/asset/:id/issue', setRoleMiddleware, authMiddleware, assetMasterController.renderIssueAsset);
router.post('/asset/:id/issue', setRoleMiddleware, authMiddleware, assetMasterController.handleIssueAsset);
router.post('/asset/:id/return', setRoleMiddleware, authMiddleware, assetMasterController.handleReturnAsset);
router.get('/asset/:id/return', setRoleMiddleware, authMiddleware, assetMasterController.renderReturnAsset);
router.get('/asset/:id/scrap', setRoleMiddleware, authMiddleware, assetMasterController.renderScrapAsset);
router.post('/asset/:id/scrap', setRoleMiddleware, authMiddleware, assetMasterController.handleScrapAsset);
router.get('/asset/:id/history', setRoleMiddleware, authMiddleware, assetMasterController.renderAssetHistory);

module.exports = router;