import React from "react";

import "./char.css";

const char = props => {
  return (
    <div className="charbox" onClick={props.onClick}>
      {props.char}
    </div>
  );
};

export default char;
