const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

// initial endpoint
app.get('/', (req, res) => {
  res.json('hi from your server :D');
});

// fetches all user data from users table
app.get('/api/users', async (req, res) => {
  try {
    const { rows: users } = await db.query('SELECT * FROM users');
    res.send(users);
  } catch (error) {
    console.error( {error} );
  }
})

// fetches all entries data from entries table
app.get('/api/entries', async (req, res) => {
  try {
    const { rows: entries } = await db.query('SELECT * FROM entries');
    res.send(entries);
  } catch (error) {
    console.error( {error} );
  }
})

// post request to create new entry
app.post('/api/entries', async (req, res) => {
  try {
    const {title, content, author_username, tags} = req.body;
    const result = await db.query(
    'INSERT INTO entries (title, content, author_username, tags) VALUES ($1, $2, $3, $4)', [title, content, author_username, tags]);
    console.log(`New post by ${author_username} has been added to the database`);
    res.json(result.rows[0]);

  } catch (error) {
    console.log('Error creating new entry: ', error);
  }
});

app.listen(PORT, () => {
  console.log(`hi :D your server is on http://localhost:${PORT}`);
});