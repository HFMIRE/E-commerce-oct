import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage";
import ProductInfo from "./component/ProductInfo";
import WomenCategory from "./component/WomenCategory";
import { CartContext } from "./component/CartContext";

interface CartValueType {
  cartValue: any;
}
function App() {
  const [cartValue, setCartValue] = useState<CartValueType>();
  return (
    <div className="App">
      <CartContext.Provider value={{ cartValue, setCartValue }}>
        <Router>
          <Switch>
            <Route path="/women" component={WomenCategory} />
            <Route path="/product/:id" component={ProductInfo} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
