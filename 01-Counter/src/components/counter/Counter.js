import React, { Component } from "react";
import Like from "../common/like/Like";

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
            <Like onClick={() => this.props} />

            <button
              className="btn btn-sm btn-primary mx-1"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="bi bi-plus"></i>
            </button>

            <button
              className={this.formatDecrementBtn()}
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              <i className="bi bi-dash"></i>
            </button>

            <button
              className="btn btn-sm btn-danger mx-1"
              onClick={() => this.props.onDelete(this.props.counter)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatDecrementBtn() {
    const classStyle = "btn btn-sm btn-primary mx-2";
    return this.props.counter.value === 0
      ? `${classStyle} disabled`
      : `${classStyle}`;
  }
}
