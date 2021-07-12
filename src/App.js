import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
// import MlemCards from "./components/MlemCards";
// import SwipeButtons from "./components/SwipeButtons";
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      <Router>
        <Switch>

          <Route path="/chat">

            {/* Chats Screen */}

            {/* Individual Chats Screen */}

          </Route>

          <Route path="/">

            {/* MlemCards */}
            {/* <MlemCards /> */}

            {/* SwipeButtons */}
            {/* <SwipeButtons /> */}

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
