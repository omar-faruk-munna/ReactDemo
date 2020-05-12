import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// With JSX
// const header = <h2 className="h2Class">This is header</h2>;

// ReactDOM.render(header, document.getElementById("header"));

// const body = <h1 className="h2Class">This is body</h1>;

// ReactDOM.render(body, document.getElementById("body"));

// const footer = <h1 className="h2Class">This is footer</h1>;

// ReactDOM.render(footer, document.getElementById("footer"));

// const element = (
//   <div className="h2ClassNew">
//     <div className="h2Class">
//       <h2>This is header</h2>
//     </div>
//     <div className="h2Class">
//       <h2>This is header</h2>
//     </div>
//     <div className="h2Class">
//       <h2>This is header</h2>
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

// Without JSX

// const element = React.createElement("h1", null, "Hello World");
// const element = React.createElement(
//   "div",
//   { className: "h2ClassNew" },
//   React.createElement("h1", null, "Hello"),
//   React.createElement(
//     "div",
//     { className: "h2Class" },
//     React.createElement("h1", null, "World")
//   )
// );

//component

var DisplayEmployeeSame = (employee) => {
  return (
    <div>
      <p>
        <label>
          Employee ID: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Name: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Age: <b>{employee.Age}</b>
        </label>
      </p>
    </div>
  );
};
function DisplayEmployee(employee) {
  return (
    <div>
      <table className="tableStyle">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.Id}</td>
            <td>{employee.Name}</td>
            <td>{employee.Age}</td>
            <td>{employee.deptName}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <label>
          Employee ID: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Name: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Age: <b>{employee.Age}</b>
        </label>
      </p>
      <Department deptName={employee.deptName}></Department>
    </div>
  );
}

var Department = (deptInfo) => {
  return (
    <div>
      <p>
        <label>
          Department Name: <b>{deptInfo.deptName}</b>
        </label>
      </p>
    </div>
  );
};

const element = (
  <DisplayEmployee
    Id="001"
    Name="Omar Faruk"
    Age="12"
    deptName="Java"
  ></DisplayEmployee>
);

ReactDOM.render(element, document.getElementById("root"));
