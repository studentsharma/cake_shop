import React, { createContext, useState, useEffect } from 'react';

export const CakeContext = createContext();

export const CakeProvider = ({ children }) => {
  const [selectedCakes, setSelectedCakes] = useState([]);

  const addCake = (cake) => {
    setSelectedCakes((prevCakes) => [...prevCakes, cake]);
    console.log(selectedCakes);
  };

  useEffect(() => {
    console.log("Updated selectedCakes state:", selectedCakes);
  }, [selectedCakes]);

  return (
    <CakeContext.Provider value={{ selectedCakes, addCake }}>
      {children}
    </CakeContext.Provider>
  );
};
