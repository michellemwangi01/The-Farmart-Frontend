import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const Navbar = () => {
  const { currentUser, isLoggedIn } = useContext(dataContext);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log(`--------> isLoggedIn: ${isLoggedIn}`);
    console.log(`--------> currentUser: ${currentUser}`);
    console.log(`--------> token: ${token}`);

    //   if (token) {
    //     setIsLoggedIn(true);
    //   } else {
    //     setIsLoggedIn(false);
    //   }
  }, [currentUser]); // Include currentUser as a dependency to trigger the effect when it changes

  return <div>{isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}</div>;
};

export default Navbar;
