import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const localData = window.localStorage.getItem("theme")
  const [theme, setTheme] = useState(localData || 'light');

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme]);

  const data = {
    theme,
    setTheme,
  }
  return <ThemeContext.Provider value={data}>
    {children}
  </ThemeContext.Provider>
}

export {ThemeContext, ThemeProvider}