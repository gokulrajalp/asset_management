const express = require('express');
const router = express.Router();
const assetMasterController = require('../controllers/assetMasterController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/asset_master', authMiddleware, assetMasterController.renderAssetMasterDashboard);


router.get('/asset/add', authMiddleware, assetMasterController.renderAddAsset);

router.post('/asset/add', authMiddleware, assetMasterController.handleAddAsset);

router.get('/asset/:id/edit', authMiddleware, assetMasterController.renderEditAsset);

router.post('/asset/:id/edit', authMiddleware, assetMasterController.handleEditAsset);


router.get('/asset/:id/issue', authMiddleware, assetMasterController.renderIssueAsset);
router.post('/asset/:id/issue', authMiddleware, assetMasterController.handleIssueAsset);


router.post('/asset/:id/return', authMiddleware, assetMasterController.handleReturnAsset);
router.get('/asset/:id/return', authMiddleware, assetMasterController.renderReturnAsset);

router.get('/asset/:id/scrap', authMiddleware, assetMasterController.renderScrapAsset);

router.post('/asset/:id/scrap', authMiddleware, assetMasterController.handleScrapAsset);


router.get('/asset/:id/history', authMiddleware, assetMasterController.renderAssetHistory);


module.exports = router;
