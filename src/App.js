import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MlemCards from "./components/MlemCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import './App.css';

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
            {/* Individual Chats Screen */}
          </Route>

          <Route path="/">
            <Header />

            <MlemCards />


            <SwipeButtons />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
