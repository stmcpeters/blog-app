import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/NavBar'
import ListEntries from './components/ListEntries';
import pets from './assets/group-of-pets.png';
import ListUsers from './components/ListUsers';

function App() {

  return (
    <>
      <MyNavbar />
      <img className="container-div" src={pets} alt="picture of different kinds of pets" />
      <ListEntries />
      <ListUsers />
    </>
  )
}

export default App
