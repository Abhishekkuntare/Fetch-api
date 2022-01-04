import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clients from "./Components/Clients";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Clients />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
