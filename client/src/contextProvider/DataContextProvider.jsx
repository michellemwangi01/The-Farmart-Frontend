import React, { createContext, useState } from "react";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [testState, setTestState] = useState("mamamia");
  const data = {
    testState,
    setTestState,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
