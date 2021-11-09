import React from 'react';
import {BrowserRouter as Route, } from "react-router-dom";

function RouteStudent({names}) {
    console.log("hi")
  return(
      <div>
    <Route path="/students">     
    </Route>
    <Route path="/Adminlogin">     
    </Route>
    <Route path="/AdminPage">     
    </Route>
    <Route path="/studentPage">    
    </Route>
    <Route path="/AdminHandler">     
    </Route>
</div>
  );
}
export default RouteStudent;