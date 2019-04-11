import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cv from "./components/Cv";
import MainPage from "./components/Main-page";
import ErrorPage from "./components/404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/cv" exact component={Cv} />
            <Route component={MainPage} />
            {/* <Route component={ErrorPage} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
