import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class DisplayEmployee3 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
        <h2>Employee Details...</h2>
        <p>
          <label>
            Name : <b>{this.props.Name}</b>
          </label>
        </p>
        <DisplayDept3 Name={this.props.deptName}></DisplayDept3>
      </div>
    );
  }
}

class DisplayDept3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Dept Details...</h2>
        <p>
          <label>
            Dept Name : <b>{this.props.Name}</b>
          </label>
        </p>
      </div>
    );
  }
}

const element2 = (
  <DisplayEmployee3
    Id="1"
    Name="Omar Faruk"
    Age="25"
    deptName="Java"
  ></DisplayEmployee3>
);

// element k call korbo
ReactDOM.render(element2, document.getElementById("root"));
