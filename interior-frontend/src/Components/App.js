import React, { useEffect } from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { addUsers} from '../Redux/user'
import { allTrips} from '../Redux/trip'
import { addParks} from '../Redux/park'
import ParksContainer from "./ParksContainer"
import NavBar from "./Navbar"
import Dashboard from "./Dashboard"
import HomePage from './pages/HomePage'
import ProfileForm from './ProfileForm'
import UserProfile from './pages/UserProfie'
import TripProfile from './pages/TripProfile'
import ParkPage from './ParkPage';
import RetailPage from './pages/RetailPage';
import Login from './Login'
import Signup from './Signup'


function App() {
  const apiURL = 'https://interiornps.herokuapp.com/'
  const dispatch = useDispatch()
  

  useEffect(() => {
    fetch(`${apiURL}/users`)
      .then(resp => resp.json())
      .then(data => {
        dispatch(addUsers(data))
        console.log(data)
      })
  }, [dispatch])


  useEffect(() => {
    fetch(`${apiURL}/trips`)
      .then(resp => resp.json())
      .then(data => {
        dispatch(allTrips(data))
      })
  }, [dispatch])

  useEffect(()=> {
    fetch(`${apiURL}/parks`)
    .then(r => r.json())
    .then(parksArr => {
        dispatch(addParks(parksArr))
    })
}, [dispatch])

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/exploretheparks">
          <ParksContainer/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/editprofile">
          <ProfileForm/>
      </Route>
      <Route exact path="/users/:id">
          <UserProfile/>
      </Route>
      <Route exact path="/trips/:id">
          <TripProfile/>
      </Route>
      <Route exact path="/parks/:id">
          <ParkPage/>
      </Route>
      <Route exact path="/retail">
          <RetailPage/>
      </Route>
      <Route exact path="/login">
          <Login/>
      </Route>
      <Route exact path="/signup">
          <Signup/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
