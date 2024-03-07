const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const setRoleMiddleware = (req, res, next) => {
    req.role = 'employee'; 
    next();
  };


router.get('/employee', setRoleMiddleware, authMiddleware, employeeController.renderEmployeeDashboard);

module.exports = router;
