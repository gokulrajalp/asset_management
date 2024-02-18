// routes/employee.js
const express = require('express');
const router = express.Router();
const employeeMasterController = require('../controllers/employeeMasterController');

router.get('/employee_master', employeeMasterController.renderEmployeeMasterDashboard);
router.get('/employee/:id/edit', employeeMasterController.renderEditEmployee);
router.post('/employee/:id/edit', employeeMasterController.handleEditEmployee);
router.get('/employee/add', employeeMasterController.renderAddEmployee);
router.post('/employee/add', employeeMasterController.handleAddEmployee);

module.exports = router;
