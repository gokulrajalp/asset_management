// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.renderLogin);
router.post('/login', authController.login);

module.exports = router;
