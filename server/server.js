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


// post request to create new user
app.post('/api/users', async (req, res) => {
  try {
    const {username, email} = req.body;
    const result = await db.query(
    'INSERT INTO users (username, email) VALUES ($1, $2)', [username, email]);
    console.log(`New user has been added to the database`);
    res.json(result.rows[0]);

  } catch (error) {
    console.log('Error creating new user: ', error);
  }
});

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

// get entry by id
app.get('/api/entries/:id', async (req, res) => {
  try{
    // initalizes id you're searching for
    const { id } = req.params;
    // query to search for entries matching given id
    const result = await db.query(`SELECT * FROM entries WHERE id = $1`, [id]);
    // return entry data as JSON
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching entries: ', error);
  }
})

// patch - update entry details by ID
app.patch('/api/entries/:id', async (req, res) => {
  try {
    // initalizes id you're searching for
    const { id } = req.params;
    // gets properties to be updated
    const { title, content, author_username, tags } = req.body;
    // query to update entry by specified ID
    const result = await db.query(`UPDATE entries SET title=$1, content=$2, author_username=$3, tags=$4 WHERE id = $5`, [title, content, author_username, tags, id]);
    // message to confirm entry details have been updated
    res.send(`Entry with the id ${id} has been updated in the database`);
  } catch (error) {
      console.log(`Cannot find entry matching id: `, error);
  }
})

// // delete an entry by id
app.delete('/api/entries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(`DELETE FROM entries WHERE id = $1`, [id]);
    res.status(200).send();
    console.log(`Entry with the id: ${id} has been deleted`)
  } catch (error) {
    console.log('Error fetching entries: ', error);
  }
})

app.listen(PORT, () => {
  console.log(`hi :D your server is on http://localhost:${PORT}`);
});

