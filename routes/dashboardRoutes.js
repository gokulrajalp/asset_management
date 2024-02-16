// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  // Check if the user is authenticated
  if (!req.session.user) {
    return res.redirect('/login');
  }

  // Render your dashboard page (pug or any other template engine)
  res.render('dashboard', { username: req.session.user.username });
});

module.exports = router;
