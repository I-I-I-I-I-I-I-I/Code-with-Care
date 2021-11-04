import './App.css';
import Students from './components/Students';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import AdminPage from './components/AdminPage';
import StudentPage from './components/StudentPage';
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
            <Route path="/AdminPage" component={AdminPage}>
              <AdminPage/>
            </Route>
            <Route path="/studentPage" component={StudentPage}>
              <StudentPage/>
            </Route>
          </Switch>
    </Router>

    </div>
  );
}

export default App;
