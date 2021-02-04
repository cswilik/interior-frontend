import React, { useEffect } from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { addUsers} from '../Redux/user'
import ParksContainer from "./ParksContainer"
import NavBar from "./Navbar"
import Dashboard from "./Dashboard"
import HomePage from './HomePage'
import ProfileForm from './ProfileForm'

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
        <HomePage/>
      </Route>
      <Route exact path="/editprofile">
          <ProfileForm/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
