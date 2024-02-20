const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/employee', authMiddleware, employeeController.renderEmployeeDashboard);

module.exports = router;
