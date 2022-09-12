import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            {}
            <span
              className={
                this.props.counter.value === 0
                  ? "badge bg-warning"
                  : "badge bg-primary"
              }
            >
              {this.props.counter.value === 0
                ? "Zero"
                : this.props.counter.value}
            </span>
          </div>
          <div className="col-md-10">
            <button
              className="btn btn-sm btn-primary mx-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button className="btn btn-sm btn-primary mx-2">-</button>
            <button className="btn btn-sm btn-primary mx-2">X</button>
          </div>
        </div>
      </div>
    );
  }
}
