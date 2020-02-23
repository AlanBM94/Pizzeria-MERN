import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../src/pages/Main";
import Auth from "./pages/Auth";
import Location from "./components/Location/Location";
// import Profile from "./pages/profile/Profile";
import MyReservations from "./pages/profile/MyReservations";
import MyComments from "./pages/profile/MyComments";
import FoodMenu from "./pages/FoodMenu";
import { AuthContext } from "../src/components/shared/context/authContext";
import { FormModeContext } from "../src/components/shared/context/formModeContext";
import "./App.css";

function App() {
  const [formMode, setFormMode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInFormHandler = () => {
    setFormMode("logIn");
  };

  const signUpFormHandler = () => {
    setFormMode("signUp");
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
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
            {/* <Route path="/miPerfil" exact>
              <Profile />
            </Route> */}
            <Route path="/misReservaciones" exact>
              <MyReservations />
            </Route>
            <Route path="/misComentarios" exact>
              <MyComments />
            </Route>

            <Redirect to="/" exact />
          </Switch>
        </FormModeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
