import '../App.css';
import { Route, Switch } from "react-router-dom";
import ParksContainer from "./ParksContainer"
import NavBar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/exploretheparks">
          <NavBar/>
          <ParksContainer/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
