import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/NavBar'
import ListEntries from './components/ListEntries';
import pets from '/src/assets/pets-group.webp';
import ListUsers from './components/ListUsers';
import EntryForm from './components/EntryForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [users, setUsers] = useState([]);
  const [entries, setEntries] = useState([]);

  const onSaveEntry = (newEntry) => {
    setEntries((entry) => [...entry, newEntry]);
  }

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
      <div className='container-fluid p-0'>
        <div className="row flex no-wrap">
          <div className="col-md-7 min-vh-100">
            <ListEntries entries={entries} users={users}/>
          </div>
          <div className="col-md-4 min-vh-100"> 
            <ListUsers users={users} />
            <EntryForm onSaveEntry={onSaveEntry} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
//col py-3