const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const employeeRoutes = require('./employee');
const employeeMasterRoutes = require('./employeeMaster');
const assetMasterRoutes = require('./assetMaster');
const assetCategoryMasterRoutes = require('./assetCategoryMaster');
const assetDistributerRoutes = require('./assetDistributer');

router.use('/', authRoutes);
router.use('/', employeeRoutes);
router.use('/', employeeMasterRoutes);
router.use('/', assetMasterRoutes);
router.use('/', assetCategoryMasterRoutes);
router.use('/', assetDistributerRoutes);

module.exports = router;
