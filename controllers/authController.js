const { Asset, Sequelize, User } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');



const authController = {
  renderLogin: (req, res) => {
    res.render('login', { error: null });
  },

 

  renderdashboard: async (req, res) => {

 const employeeCount = await User.count({
    where: { role: 'employee' },
  });

  const inActiveEmployeeCount = await User.count({
    where: { role: 'employee', activityStatus : 'inactive' },
  });

  const activeEmployeeCount = await User.count({
    where: { role: 'employee', activityStatus : 'active' },
  });

  const totalAsset = await Asset.count();

  const assetsInWereHouse = await Asset.count({
    where: { issuedTo: null },
  }); 
  
  const assetsInBranch = await Asset.count({
    where: { issuedTo: {
      [Sequelize.Op.not]: null,
    }, },
  });


  const dashboardInfo = {
    employeeCount : employeeCount,
    inActiveEmployeeCount : inActiveEmployeeCount,
    activeEmployeeCount : activeEmployeeCount,
    totalAsset : totalAsset,
    assetsInWereHouse : assetsInWereHouse,
    assetsInBranch : assetsInBranch,


  }

    res.render('dashboard', {dashboardInfo});
  },



  login: async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({
        where: { username, password },
      });
  
      if (user) {
        const token = jwt.sign({ userId: user.id }, 'kt-secret', { expiresIn: '7d' });
  
        await User.update({ token }, { where: { id: user.id } }); 
  
        res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); 
  
        switch (user.role) {
          case 'admin':
            res.redirect('/dashboard');
            break;
          case 'employee_master':
            res.redirect('/employee_master');
            break;
          case 'asset_master':
            res.redirect('/asset_master');
            break;
          case 'asset_category_master':
            res.redirect('/asset_category_master');
            break;
          case 'asset_distributor':
            res.redirect('/asset_distributor');
            break;
          case 'employee':
            res.redirect('/employee');
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
  
  logout: async (req, res) => {
    try {
      const { user } = req;

      if (user) {
        await User.update({ token: null }, { where: { id: user.id } });

        res.clearCookie('token');

        console.log('Token cleared from the database');

        return res.redirect('/login');
      } else {
        console.log('No user found');
        return res.redirect('/login');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  },


};

module.exports = authController;
