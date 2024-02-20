const express = require('express');
const router = express.Router();
const employeeMasterController = require('../controllers/employeeMasterController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/employee_master', authMiddleware, employeeMasterController.renderEmployeeMasterDashboard);
router.get('/employee/:id/edit', authMiddleware, employeeMasterController.renderEditEmployee);
router.post('/employee/:id/edit', authMiddleware, employeeMasterController.handleEditEmployee);
router.get('/employee/add', authMiddleware, employeeMasterController.renderAddEmployee);
router.post('/employee/add', authMiddleware, employeeMasterController.handleAddEmployee);

module.exports = router;
