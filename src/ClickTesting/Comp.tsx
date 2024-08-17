import React, { useState } from "react";


const Comp = () => {
  const [data, setData] = useState("initial");
  const handleClick = () => {
    setData("final");
  };
  const handleClose = () => {
    setData("initial")
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <h1>{data}</h1>
      <button onClick={handleClose}>clickagain</button>
    </div>
  );
};

export default Comp;
