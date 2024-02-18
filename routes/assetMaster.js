// routes/employee.js
const express = require('express');
const router = express.Router();
const assetMasterController = require('../controllers/assetMasterController');

router.get('/asset_master', assetMasterController.renderAssetMasterDashboard);


router.get('/asset/add', assetMasterController.renderAddAsset);

// Handle Add Asset Form Submission
router.post('/asset/add', assetMasterController.handleAddAsset);

// Render Edit Asset Form
router.get('/asset/:id/edit', assetMasterController.renderEditAsset);

// Handle Edit Asset Form Submission
router.post('/asset/:id/edit', assetMasterController.handleEditAsset);


router.get('/asset/:id/issue', assetMasterController.renderIssueAsset);
router.post('/asset/:id/issue', assetMasterController.handleIssueAsset);


router.post('/asset/:id/return', assetMasterController.handleReturnAsset);
router.get('/asset/:id/return', assetMasterController.renderReturnAsset);


// Render Scrap Asset Form
router.get('/asset/:id/scrap', assetMasterController.renderScrapAsset);

// Handle Scrap Asset Form Submission
router.post('/asset/:id/scrap', assetMasterController.handleScrapAsset);


router.get('/asset/:id/history', assetMasterController.renderAssetHistory);


module.exports = router;
