import React, { Component } from "react";

import "./App.css";
import Simple from "./components/simple/simple";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import Scientific from "./components/scientific/scientific";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="center">
          <nav>
            <div className="nav-wrapper">
              <ul className="left">
                <li>
                  <NavLink to="/">Simple Calculator</NavLink>
                </li>
                <li>
                  <NavLink to="/scientific">Scientific Calculator</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="inputcontainer z-depth-3">
            <Switch>
              <Route exact path="/" component={Simple} />
              <Route path="/scientific" component={Scientific} />
            </Switch>
            <br />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
