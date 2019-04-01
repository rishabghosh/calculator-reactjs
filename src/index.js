import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const KEY_ROWS = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["0", ".", "=", "/"]
];

let expression = "";

const add = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const multiply = (a, b) => +a * +b;
const divide = (a, b) => +a / +b;

const OPERATORS = ["+", "-", "*", "/"];
const OP = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide
};

class Box extends React.Component {
  render() {
    return (
      <main>
        <div className="box">
          <Display />
          <KeyPad />
        </div>
      </main>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div className="display">{expression}</div>;
  }
}

class KeyPad extends React.Component {
  render() {
    return (
      <div className="buttons">
        {KEY_ROWS.map(row => (
          <ButtonRow symbols={row} />
        ))}
      </div>
    );
  }
}

class ButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.symbols = props.symbols;
  }

  render() {
    return (
      <div className="button-row">
        {this.symbols.map(symbol => (
          <Button symbol={symbol} />
        ))}
      </div>
    );
  }
}

const calculate = function() {
  let newExperssion = expression;
  OPERATORS.forEach(op => {
    newExperssion = newExperssion.split(op).join(" " + op + " ");
  });

  const classifiedExpression = newExperssion.split(" ");
  let result;

  classifiedExpression.forEach((val, index) => {
    if (OPERATORS.includes(val)) {
      let leftSide;

      if (result !== undefined) {
        leftSide = result;
      } else {
        leftSide = classifiedExpression[index - 1];
      }
      const rightSide = classifiedExpression[index + 1];
      const executer = OP[val];
      result = executer(leftSide, rightSide);
    }
  });
  console.log(result);
  return result;
};

const displaySymbol = function(symbol) {
  console.log(symbol);
  if (symbol === "=") {
    expression = calculate();
  } else {
    expression += symbol;
  }
  ReactDOM.render(<Box />, document.getElementById("root"));
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.symbol = props.symbol;
  }
  render() {
    return (
      <button onClick={() => displaySymbol(this.symbol)}>{this.symbol}</button>
    );
  }
}

ReactDOM.render(<Box />, document.getElementById("root"));
