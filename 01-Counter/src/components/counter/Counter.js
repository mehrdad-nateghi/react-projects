import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <span className="badge bg-primary">4</span>
          </div>
          <div className="col-md-10">
            <button className="btn btn-sm btn-primary mx-2">+</button>
            <button className="btn btn-sm btn-primary mx-2">-</button>
            <button className="btn btn-sm btn-primary mx-2">X</button>
          </div>
        </div>
      </div>
    );
  }
}
