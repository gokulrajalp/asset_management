const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const authMiddleware = require('./middleware/authMiddleware');
const { sequelize } = require('./models'); 

const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug'); 

app.use((req, res, next) => {
  if (req.path === '/login') {
    return next(); 
  }
  authMiddleware(req, res, next);
});

app.use('/', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
