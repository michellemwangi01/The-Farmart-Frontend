import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";

const AboutUs = () => {
  const { testState, setTestState } = useContext(dataContext);
  return (
    <>
      <p style={{ color: "white" }}>{testState}</p>
      <button onClick={() => setTestState("damasia")}>Change name</button>
    </>
  );
};

export default AboutUs;
