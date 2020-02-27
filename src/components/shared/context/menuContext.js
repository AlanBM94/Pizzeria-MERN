import { createContext } from "react";

export const MenuContext = createContext({
  category: "",
  selectPizzas: () => {},
  selectPastas: () => {},
  selectDrinks: () => {}
});
