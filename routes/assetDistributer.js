const express = require('express');
const router = express.Router();
const assetDistributorController = require('../controllers/assetDistributorController');
const authMiddleware = require('../middleware/authMiddleware');


const setRoleMiddleware = (req, res, next) => {
    req.role = 'asset_distributor'; 
    next();
  };



router.get('/asset_distributor',setRoleMiddleware, authMiddleware, assetDistributorController.renderassetDistributorDashboard);

module.exports = router;