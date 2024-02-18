// controllers/employeeController.js


const { User } = require('../models');


const employeeMasterController = {
  renderEmployeeMasterDashboard: async (req, res) => {
    try {
      const users = await User.findAll({
        where: {
          role: 'employee'
        }
      });
  
      res.render('employee_master', { users });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },



  renderEditEmployee: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).send('User not found');
      }

      res.render('edit_employee', { user });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  handleEditEmployee: async (req, res) => {
    try {
      const userId = req.params.id;
      const { username, email, activityStatus } = req.body;

      // Validate input if needed

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).send('User not found');
      }

      // Update user details
      user.username = username;
      user.email = email;
      user.activityStatus = activityStatus;

      await user.save();

      res.redirect('/employee_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderAddEmployee: (req, res) => {
    res.render('add_employee');
  },

  handleAddEmployee: async (req, res) => {
    try {
      const { username, email, activityStatus } = req.body;

      // Validate input if needed

      // Create a new user
      const newUser = await User.create({
        username,
        email,
        activityStatus,
        role: 'employee'
      });

      res.redirect('/employee_master');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }


  // Additional employee dashboard-related functions if needed
};



module.exports = employeeMasterController;
