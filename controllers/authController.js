// controllers/authController.js
const { User } = require('../models');

const authController = {
  renderLogin: (req, res) => {
    res.render('login', { error: null });
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({
        where: { username, password },
      });

      if (user) {
        switch (user.role) {
          case 'employee_master':
            res.redirect('/employee_master-dashboard');
            break;
          case 'asset_master':
                res.redirect('/asset_master-dashboard');
                break;
          case 'asset_category_master':
                  res.redirect('/asset_category_master-dashboard');
                  break;
          case 'asset_distributor':
                      res.redirect('/asset_distributor-dashboard');
                      break;
          case 'employee':
                res.redirect('/employee-dashboard');
                break;
          default:
            res.redirect('/');
            break;
        }
      } else {
        res.render('login', { error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Additional authentication-related functions if needed
};

module.exports = authController;
