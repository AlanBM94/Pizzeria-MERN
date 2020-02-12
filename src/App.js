import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../src/pages/Main";
import Navigation from "../src/components/shared/Navigation/Navigation";
import Footer from "../src/components/Footer/Footer";
import Auth from "../src/components/Auth/Auth";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Main />
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
        <Route path="/ubicacion" exact>
          ubicacion
        </Route>
        <Route path="/iniciarSesion" exact>
          <Auth />
        </Route>
        <Route path="/registrarse" exact>
          <Auth />
        </Route>
        <Redirect to="/" exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
