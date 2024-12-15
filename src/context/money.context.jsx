import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [money, setMoney] = useState([]);
  return (
    <Context.Provider
      value={{
        money,
        setMoney,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useStateValue = () => useContext(Context);
