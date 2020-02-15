import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../src/pages/Main";
import Auth from "./pages/Auth";
import Location from "./components/Location/Location";
import FoodMenu from "./pages/FoodMenu";
import { FormModeContext } from "../src/components/shared/context/formModeContext";
import "./App.css";

function App() {
  const [formMode, setFormMode] = useState("");

  const logInFormHandler = () => {
    setFormMode("logIn");
  };

  const signUpFormHandler = () => {
    setFormMode("signUp");
  };

  return (
    <div className="App">
      <FormModeContext.Provider
        value={{
          formMode: formMode,
          logInFormHandler: logInFormHandler,
          signUpFormHandler: signUpFormHandler
        }}
      >
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/pizzas" exact>
            <FoodMenu type="pizzas" />
          </Route>
          <Route path="/pastas" exact>
            <FoodMenu type="pastas" />
          </Route>
          <Route path="/bebidas" exact>
            <FoodMenu type="bebidas" />
          </Route>
          <Route path="/ubicacion" exact>
            <Location />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Redirect to="/" exact />
        </Switch>
      </FormModeContext.Provider>
    </div>
  );
}

export default App;
