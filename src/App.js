import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cv from './components/Cv';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cv/>
        {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact Component={Cv}/>
          <Route path="/dad" exact Component={Cv}/>
        </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
