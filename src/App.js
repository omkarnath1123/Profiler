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
            <Route path="/Profiler" exact component={MainPage} />
            <Route path="/Profiler/cv" exact component={Cv} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
