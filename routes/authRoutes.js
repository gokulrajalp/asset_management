const express = require('express');
const router = express.Router();
const { User } = require('../models');
// Redirect root URL to the login page
router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/create_user', (req, res) => {
  res.render('createUser');
});

router.get('/dashboard', (req, res) => {
  // Check if the user is authenticated
  if (!req.session.user) {
    return res.redirect('/login');
  }

  // Render your dashboard page (pug or any other template engine)
  res.render('dashboard', { username: req.session.user.username });
});

router.post('/create_user', async (req, res) => {
  try {
    console.log("body", req.body)
    // const { designation, username, password } = req.body;
    // Perform any validation you need here

    // Create the user in the database
    // const newUser = await User.create({
    //   username,
    //   password,
    //   designation
    // });

    // You can customize the response or redirect as needed
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/login', async (req, res) => {
  // Implement authentication logic here
  const { username, password } = req.body;

  // Check if the default user exists, create if not
  // ... (your authentication logic)

  // Set user in the session
  req.session.user = { username };

  res.redirect('/dashboard');
});

module.exports = router;
