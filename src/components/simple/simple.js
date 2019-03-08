import React, { Component } from "react";
import math from "mathjs";
class Simple extends Component {
  state = {
    data: ""
  };
  handleChange = e => {
    let currentLength = this.state.data.toString().length;
    let current;
    let update;
    let input = e;
    if (currentLength === 0) {
      current = "";
      update = input;
    } else if (currentLength > 0 && currentLength < 20) {
      current = this.state.data.toString().slice(0);
      update = current.toString() + input.toString();
    } else if (currentLength === 20) {
      input = "";
      update = this.state.data.toString().slice(0);
    }

    this.setState({
      data: update
    });
  };

  result = e => {
    let expression = this.state.data.slice(0);

    this.setState({
      // eslint-disable-next-line
      data: math.eval(expression)
    });
  };

  clearInput = () => {
    this.setState({
      data: ""
    });
  };
  deleteInput = () => {
    let deletedValue = this.state.data.slice(
      0,
      this.state.data.toString().length - 1
    );

    this.setState({
      data: deletedValue
    });
  };
  render() {
    return (
      <div>
        <p className="title">Simple Calculator</p>
        <input className="input-field" type="text" value={this.state.data} />
        <div className="calContainer ">
          <div className="row">
            <button className="clearInput" onClick={() => this.clearInput()}>
              C
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("(")}
            >
              (
            </button>

            <button
              className="calcInput"
              onClick={() => this.handleChange(")")}
            >
              )
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("%")}
            >
              %
            </button>
          </div>
          <div className="row">
            <button
              className="calcInput"
              onClick={() => this.handleChange("7")}
            >
              7
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("8")}
            >
              8
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("9")}
            >
              9
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("/")}
            >
              /
            </button>
          </div>
          <div className="row">
            <button
              className="calcInput"
              onClick={() => this.handleChange("4")}
            >
              4
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("5")}
            >
              5
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("6")}
            >
              6
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("-")}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              className="calcInput"
              onClick={() => this.handleChange("1")}
            >
              1
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("2")}
            >
              2
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("3")}
            >
              3
            </button>
            <button
              className="calcInput"
              onClick={() => this.handleChange("+")}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              className="calcInput"
              onClick={() => this.handleChange("0")}
            >
              0
            </button>

            <button
              className="calcInput"
              onClick={() => this.handleChange("*")}
            >
              *
            </button>

            <button
              className="calcInput"
              onClick={() => this.handleChange(".")}
            >
              .
            </button>
            <button className="delInput" onClick={() => this.deleteInput()}>
              del
            </button>
          </div>

          <button className="answer" onClick={() => this.result()}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Simple;
 
