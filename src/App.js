import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Topbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
        <Router>
          <Topbar />
          <Switch>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
