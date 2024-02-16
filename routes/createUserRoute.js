const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Assuming you have a User model

// Render the page to create a new user
// router.get('/create_user', (req, res) => {
//   res.render('createUser');
// });

// Handle the form submission to create a new user
// router.post('/create_user', async (req, res) => {
//   try {
//     const { role, username, password } = req.body;

//     // Perform any validation you need here

//     // Create the user in the database
//     const newUser = await User.create({
//       role,
//       username,
//       password,
//     });

//     // You can customize the response or redirect as needed
//     res.redirect('/login');
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = router;
