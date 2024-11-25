/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SiderBarContext = createContext();

export const SiderBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  return (
    <SiderBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        type,
        setType,
      }}
    >
      {children}
    </SiderBarContext.Provider>
  );
};
