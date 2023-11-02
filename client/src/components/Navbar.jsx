import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const Navbar = () => {
  const { jwToken } = useContext(dataContext);
  return <div>{jwToken ? <LoggedInNav /> : <LoggedOutNav />}</div>;
};

export default Navbar;
