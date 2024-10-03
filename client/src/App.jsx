import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/NavBar'
import ListEntries from './components/ListEntries';
import pets from '/src/assets/pets-group.webp';
import ListUsers from './components/ListUsers';
import EntryForm from './components/EntryForm';

function App() {

  const [users, setUsers] = useState([]);
  const [entries, setEntries] = useState([]);

  const loadUsers = () => {
    fetch("http://localhost:5001/api/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }

  useEffect(() => {
    loadUsers();
  }, [users]);

  const loadEntries = () => {
    fetch("http://localhost:5001/api/entries")
      .then((response) => response.json())
      .then((entries) => {
        setEntries(entries);
    });
  }

  useEffect(() => {
    loadEntries();
  }, [entries]);

  return (
    <>
      <MyNavbar />
      <img className="container-div" src={pets} alt="picture of different kinds of pets" />
      <ListEntries entries={entries}/>
      <ListUsers users={users} />
      <EntryForm />
    </>
  )
}

export default App
