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
    return <div className="display" />;
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <ButtonRow />
      </div>
    );
  }
}

class ButtonRow extends React.Component {
  render() {
    return (
      <div className="button-row">
        <Button symbol="1" />
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.symbol = props.symbol;
  }

  render() {
    return <button>{this.symbol}</button>;
  }
}

ReactDOM.render(<Box />, document.getElementById("root"));
