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
        {KEY_ROWS.map(row => ( <ButtonRow symbols={row} /> ))}
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

const displaySymbol = function(symbol) {
  expression += symbol;
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
