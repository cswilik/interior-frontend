import React, { useEffect } from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { addUsers} from '../Redux/user'
import { allTrips} from '../Redux/trip'
import ParksContainer from "./ParksContainer"
import NavBar from "./Navbar"
import Dashboard from "./Dashboard"
import HomePage from './pages/HomePage'
import ProfileForm from './ProfileForm'
import UserProfile from './pages/UserProfie'
import TripProfile from './pages/TripProfile'
import ParkPage from './ParkPage';
import RetailPage from './pages/RetailPage';


function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  console.log(users)

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(data => {
        dispatch(addUsers(data))
      })
  }, [dispatch])

  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then(resp => resp.json())
      .then(data => {
        dispatch(allTrips(data))
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

      </Switch>
    </div>
  );
}

export default App;
