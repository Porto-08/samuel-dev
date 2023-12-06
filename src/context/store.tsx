"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface DarkModeContextProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  dark: false,
  setDark: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [dark, setDark] = useState(false);

  function setDarkState() {
    setDark(!dark);
    window.localStorage.setItem("dark", JSON.stringify(!dark));
  }

  useEffect(() => {
    if (dark === true) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [dark]);

  useEffect(() => {
    const darkMode = window.localStorage.getItem("dark");
    if (darkMode) {
      const darkBoolean = JSON.parse(darkMode);
      setDark(darkBoolean);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
