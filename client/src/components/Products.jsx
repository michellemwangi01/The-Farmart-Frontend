import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";

const Products = () => {
  const { groupMembers, setGroupMembers } = useContext(dataContext);
  console.log(groupMembers);
  return (
    <div>
      <button onClick={() => setGroupMembers(["Donell", "Shadrack", "Enock"])}>
        Update
      </button>
      {groupMembers}
    </div>
  );
};

export default Products;
