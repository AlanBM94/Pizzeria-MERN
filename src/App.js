import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Location from "./components/Location/Location";
// import Profile from "./pages/profile/Profile";
import MyReservations from "./pages/profile/MyReservations";
import MyComments from "./pages/profile/MyComments";
import FoodMenu from "./pages/FoodMenu";
import { useAuth } from "./components/shared/hooks/useAuth";
import { AuthContext } from "./components/shared/context/authContext";
import { FormModeContext } from "./components/shared/context/formModeContext";
import { MenuContext } from "./components/shared/context/menuContext";
import "./App.css";

function App() {
  const [formMode, setFormMode] = useState("");
  const [menuCategory, setMenuCategory] = useState("");
  const { token, userId, login, logout } = useAuth();

  const logInFormHandler = () => {
    setFormMode("logIn");
  };

  const signUpFormHandler = () => {
    setFormMode("signUp");
  };

  const selectPizzas = () => {
    setMenuCategory("Pizza");
  };

  const selectPastas = () => {
    setMenuCategory("Pasta");
  };

  const selectDrinks = () => {
    setMenuCategory("Bebida");
  };

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/pizzas" exact>
          <FoodMenu type="Pizzas" />
        </Route>
        <Route path="/pastas" exact>
          <FoodMenu type="Pastas" />
        </Route>
        <Route path="/bebidas" exact>
          <FoodMenu type="Bebidas" />
        </Route>
        <Route path="/ubicacion" exact>
          <Location />
        </Route>
        <Route path="/misReservaciones" exact>
          <MyReservations />
        </Route>
        <Route path="/misComentarios" exact>
          <MyComments />
        </Route>
        <Redirect to="/" exact />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/pizzas" exact>
          <FoodMenu type="Pizzas" />
        </Route>
        <Route path="/pastas" exact>
          <FoodMenu type="Pastas" />
        </Route>
        <Route path="/bebidas" exact>
          <FoodMenu type="Bebidas" />
        </Route>
        <Route path="/ubicacion" exact>
          <Location />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/" exact />
      </>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ login, logout, token, userId }}>
        <FormModeContext.Provider
          value={{
            formMode: formMode,
            logInFormHandler: logInFormHandler,
            signUpFormHandler: signUpFormHandler
          }}
        >
          <MenuContext.Provider
            value={{
              category: menuCategory,
              selectPizzas,
              selectPastas,
              selectDrinks
            }}
          >
            <Switch>{routes}</Switch>
          </MenuContext.Provider>
        </FormModeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
