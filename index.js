const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models'); // Import Sequelize instance

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug'); // Set your view engine here

app.use('/', routes);

const PORT = process.env.PORT || 3000;

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
