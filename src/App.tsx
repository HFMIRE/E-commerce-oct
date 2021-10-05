import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import ProductCard from "./component/ProductCard";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product" component={ProductCard} />
          <Route path="/allproducts" component={LandingPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
