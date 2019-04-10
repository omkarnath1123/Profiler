import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cv from "./components/Cv";
import MainPage from "./components/Main-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Cv /> */}
        {/* <MainPage /> */}

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/cv" exact component={Cv} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
