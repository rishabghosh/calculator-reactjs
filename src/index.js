import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Box extends React.Component {
  render() {
    return (
      <main>
        <div className="box">
          <Display />
          <Buttons />
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

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <ButtonRow symbols={symbols.row1} />
        <ButtonRow symbols={symbols.row2} />
        <ButtonRow symbols={symbols.row3} />
        <ButtonRow symbols={symbols.row4} />
      </div>
    );
  }
}

const symbols = {
  row1: ["1", "2", "3", "+"],
  row2: ["4", "5", "6", "-"],
  row3: ["7", "8", "9", "*"],
  row4: ["0", ".", "=", "/"]
};

let expression = "";

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
    return <button onClick={()=> displaySymbol(this.symbol)}>{this.symbol}</button>;
  }
}

ReactDOM.render(<Box />, document.getElementById("root"));
