import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const First = function(props) {
  return <h1>hello world</h1>;
};

ReactDOM.render(<First />, document.getElementById("root"));

