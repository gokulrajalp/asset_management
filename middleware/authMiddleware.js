const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).redirect('/login'); 
    }

    const decoded = jwt.verify(token, 'kt-secret'); 

    const user = await User.findByPk(decoded.userId);

    if (!user || !user.token) {
      return res.status(401).redirect('/login'); 
    }

 if(user.role == req.role || user.role == "admin"){
     req.user = user; 
     next();
    } else {
      return res.status(401).redirect('/login');
    }

    

  


   
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = authMiddleware;
