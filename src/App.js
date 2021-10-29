import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Students from './components/Students';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/*If you want to add any more pages, add the js file in the components directory and link them to the router as such, must also
        be added to the navbar in ./components/navbar.js */}

        <Router>
          <Navbar/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/students" component={Students}>
              <Students/>
            </Route>
            <Route path="/Adminlogin" component={Adminlogin}>
              <Adminlogin/>
            </Route>
          </Switch>
    </Router>

    </div>
  );
}

export default App;
