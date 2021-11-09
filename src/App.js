import './App.css';
import Students from './components/Students';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import AdminPage from './components/AdminPage';
import StudentPage from './components/StudentPage';
import {Helmet} from "react-helmet"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Footer from './components/Footer';
import Arnold from './components/StudentComponents/Arnold';
import Allana from './components/StudentComponents/Allana';
import Ringo from './components/StudentComponents/Ringo';
import Daniel from './components/StudentComponents/Daniel';
import Betty from './components/StudentComponents/Betty';
import Harvey from './components/StudentComponents/Harvey';
import Patrick from './components/StudentComponents/Patrick';
import Jessie from './components/StudentComponents/Jessie';
function App() {
    return (
        <div className="App" style = {{position : "relative" , minHeight : "100vh"}}>
            <div style = {{paddingBottom : "5rem"}}>
            <Helmet>
                <title>Code with Care</title>
            </Helmet>
        
            {/*If you want to add any more pages, add the js file in the components directory and link them to the router as such, must also
        be added to the navbar in ./components/navbar.js */}

            <Router>

                <Navbar className="navbarFull"/>
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Redirect to = "/students"/>
                    </Route>
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
                    <Route path="/Arnold">
                        <Arnold/>
                    </Route>
                    <Route path="/Allana">
                        <Allana/>
                    </Route>
                    <Route path="/Ringo">
                        <Ringo/>
                    </Route>
                    <Route path="/Carson">
                        <Daniel/>
                    </Route>
                    <Route path="/Betty">
                        <Betty/>
                    </Route>
                    <Route path="/Harvey">
                        <Harvey/>
                    </Route>
                    <Route path="/Patrick">
                        <Patrick/>
                    </Route>
                    <Route path="/Jessie">
                        <Jessie/>
                    </Route>
                    <Route path="/Daniel">
                        <Daniel/>
                    </Route>


                </Switch>
            </Router>
            </div>

           <div style = {{position : "absolute" , bottom : "0" , width : "100%"}}><Footer/></div>

        </div>
    );
}

export default App;
