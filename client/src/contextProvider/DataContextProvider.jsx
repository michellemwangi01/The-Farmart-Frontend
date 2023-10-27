import React, { createContext, useState } from "react";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [groupMembers, setGroupMembers] = useState(["Donell"]);

  const data = {
    groupMembers,
    setGroupMembers,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
