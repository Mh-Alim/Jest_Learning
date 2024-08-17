import React from "react";

const Role = () => {
  return (
    <div>
      <button>click1</button>
      <button>click2</button>

      <input type="text" id="textbox1" />
      <label htmlFor="textbox1">label1</label>

      <input type="text" id="textbox2" />
      <label htmlFor="textbox2">label2</label>

      <div role="div1">
        div1
        {/* <p>child p</p> */}
        <p>child p2</p>
      </div>
    </div>
  );
};

export default Role;
