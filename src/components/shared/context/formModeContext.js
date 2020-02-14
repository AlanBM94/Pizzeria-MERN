import { createContext } from "react";

export const FormModeContext = createContext({
  formMode: "",
  logInFormHandler: () => {},
  signUpFormHandler: () => {}
});
