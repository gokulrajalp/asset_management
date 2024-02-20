const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.renderLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/', (req, res) => {
    return res.redirect('/login');
});

module.exports = router;
