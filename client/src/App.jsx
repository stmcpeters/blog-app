import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/NavBar'
import ListEntries from './components/ListEntries';
import pets from './assets/group-of-pets.png';

function App() {

  return (
    <>
      <MyNavbar />
      <img className="container-div" src={pets} alt="picture of different kinds of pets" />
      <ListEntries />

    </>
  )
}

export default App
