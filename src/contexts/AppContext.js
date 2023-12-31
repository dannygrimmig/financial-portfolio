import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { emptyLineChartData } from "../data/net";
import { defaultPieData } from "../data/expenses";

export const myContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [netData, setNetData] = useLocalStorage("netData", emptyLineChartData);
  const [pieData, setPieData] = useLocalStorage("pieData", defaultPieData);
  const [barData, setBarData] = useLocalStorage("barData", []);

  return (
    <myContext.Provider
      value={{
        darkMode,
        setDarkMode,
        netData,
        setNetData,
        pieData,
        setPieData,
        barData,
        setBarData,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
