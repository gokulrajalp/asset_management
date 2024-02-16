// // index.js

// const express = require('express');
// const { Pool } = require('pg');
// const sequelize = require('./models');
// const dbConfig = require('./config');
// const path = require('path');
// const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const session = require('express-session');
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'postgres', // or the database dialect you are using
//   });

// // const createDefaultUser = require('./create_default_user'); // Import the script

// const app = express();
// const port = 3000;
// // const pool = new Pool(dbConfig);

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//   }));

//   sequelize.sync({ force: true }) // Set force to true to drop and recreate tables (in development)
//   .then(() => {
//     console.log('Database synchronized.');
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });

// // Check if default users exist, if not, create them
// // createDefaultUser(pool);


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


// app.use('/', authRoutes);
// app.use('/', dashboardRoutes);

// // app.get('/', async (req, res) => {
// //   try {
// //     const client = await pool.connect();
// //     const result = await client.query('SELECT $1::text as message', ['Hello, user exists!']);
// //     const { message } = result.rows[0];
// //     res.send(message);
// //     client.release();
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });





// index.js or app.js

const express = require('express');
const session = require('express-session');
const { Sequelize } = require('sequelize');
const path = require('path'); 

const app = express();

// Set up sessions
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

// Set up Sequelize
const db = new Sequelize('asset_management', 'admin', 'system', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define your models and associations here

// Sync the database
db.sync({ force: true }) // Set force to true to drop and recreate tables (in development)
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Define your routes and other application logic here

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const authRoutes = require('./routes/authRoutes');
// const dashboardRoutes = require('./routes/dashboardRoutes');
// const createUserRoute = require('./routes/createUserRoute');



app.use('/', authRoutes);
// app.use('/dashboard', dashboardRoutes);
// app.use('/create_user', createUserRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
