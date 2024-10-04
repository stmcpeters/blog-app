# Pawesome Pets

## Overview
Pawesome Pets is a blog where only members (for now) can post their favorite things or thoughts about their pets! This project was created for week 12's Techtonica program assignment. The system uses a React frontend and a Node.js backend to create an interactive UI.

## Demo
![Demo](client/src/assets/demo.gif)

## Features
- View a list of blog entries
- Add new post
- View additional details for an entry
- View a list of active users
- Responsive design built with React
- Real-time data synchronization between frontend and backend

## Technologies
### Frontend
- React: JavaScript library for building responsive user interfaces
- React Bootstrap: Styling and layout of the app
- Fetch API: Makes HTTP requests to the backend <br>
### Backend
- Express.js: A Node.js framework for setting up the server and handling HTTP requests
- Node.js: JavaScript environment used to run the Express server
- Cors: Middleware to handle Cross-Origin Resource Sharing
- Dotenv: Hides sensitive environment variables
- PostgreSQL: Database management system

## Installation
### Pre Requisites 
- Node.js (which includes npm): [Download Node.js](https://nodejs.org/en/download/package-manager)
- Git (for cloning the repository): [Download Git](https://git-scm.com/downloads)

1. Clone the repo <br>
`git clone https://github.com/stmcpeters/blog-app`<br>
`cd blog-app` 
2. Set up the backend
- Navigate to the `server` folder
- Install backend dependencies: `npm install`
- Create a `.env` file in the server directory and add your environment variables (see `.env-sample` for example)
- Import and configure `dotenv` in your `server.js` file: <br>
`import dotenv from 'dotenv';` <br>
`dotenv.config();` <br>
3. There are two ways to restore the DB dump file the project already contains: 

A- If you have postgres set up postgres with an User:  
 * just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask for your password. 

B- If your initial configuration of postgres doesn't require a User:
* just run the command `psql -f db.sql`

7. Inside your server folder, open the file `.env.example` and copy the correct option for your configuation found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URI="postgresql://localhost/blog"
``` 
For this template, the name of your db should be `blog`.

⚠️ If you don't see a `blog` db, you can create one. From the terminal, navigate to the psql command line with `psql` and type `create database blog;` - don't forget the semicolon!! ⚠️

- Start the server using: `npm start`

4. Set up the frontend:
- Navigate to the `client` folder
- Install dependencies: `npm install`
- Start the React development server using `npm run dev`

## API Endpoints
- GET `/api/users`: Fetches all users
- GET `/api/entries`: Fetches all entries
- POST `/api/users`: Creates a new user
- POST `/api/entries`: Creates a new entry
- GET `/api/entries/:id`: Get entry by id
- DELETE `/api/entries/:id`: Deletes a entry by id
- PUT `/api/entries/:id`: Updates an entry

## Stretch Goals/Help Wanted
- Implement an AI feature
- Field to create a new user
- Filter/search entries by tag
- Hide tags field from entry details if user does not assign tag to entry

## Contributing
Contributions are welcomed to this project! If you have an idea for a new feature or a bug fix, please open an issue or a pull request.

## License
This project is licensed under the MIT License.
