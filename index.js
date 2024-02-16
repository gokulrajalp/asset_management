const express = require('express');
const { Pool } = require('pg');
const dbConfig = require('./config');

const app = express();
const port = 3000;

const pool = new Pool(dbConfig);

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Hello, Asset Management Project!']);
    const { message } = result.rows[0];
    res.send(message);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
