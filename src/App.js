import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./shared/components/Navigation/Navigation";
import Hero from "./shared/components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/pizzas" exact>
          pizzas
        </Route>
        <Route path="/pastas" exact>
          pastas
        </Route>
        <Route path="/bebidas" exact>
          bebidas
        </Route>
        <Redirect to="/" exact />
      </Switch>
    </div>
  );
}

export default App;
