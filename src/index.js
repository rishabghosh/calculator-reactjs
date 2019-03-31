import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const allStyles = {
  color: "red",
  background: "grey"
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 style={allStyles}>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
