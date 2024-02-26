const express = require('express');
const router = express.Router();
const employeeMasterController = require('../controllers/employeeMasterController');
const authMiddleware = require('../middleware/authMiddleware');

const setRoleMiddleware = (req, res, next) => {
    req.role = 'employee_master'; 
    next();
  };



router.get('/employee_master',setRoleMiddleware, authMiddleware, employeeMasterController.renderEmployeeMasterDashboard);
router.get('/employee/:id/edit',setRoleMiddleware, authMiddleware, employeeMasterController.renderEditEmployee);
router.post('/employee/:id/edit',setRoleMiddleware, authMiddleware, employeeMasterController.handleEditEmployee);
router.get('/employee/add',setRoleMiddleware, authMiddleware, employeeMasterController.renderAddEmployee);
router.post('/employee/add',setRoleMiddleware, authMiddleware, employeeMasterController.handleAddEmployee);

module.exports = router;
