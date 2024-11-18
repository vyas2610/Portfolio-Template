import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme); //Toggle between true and false
  }

  return (
    <ThemeContext.Provider value={darkTheme} className="pt-0">
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <div className={`mt-0   ${darkTheme ? "bg-slate-50" : "bg-slate-900"}`}>
          <div className="containers  md:px-4 sm:px-10">{children}</div>
        </div>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
