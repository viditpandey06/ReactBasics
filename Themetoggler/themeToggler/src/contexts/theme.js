import { createContext, useContext } from "react";
export const ThemeContetxt = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContetxt.Provider
export default function useTheme(){
    return useContext(ThemeContetxt)
}
