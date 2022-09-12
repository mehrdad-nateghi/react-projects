import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="card-header">
        <h3 className="d-inline">Counters</h3>

        <span className="d-inline">
          <span className="badge rounded-pill bg-danger mx-1">
            {this.props.totalCounters}
          </span>
        </span>

        <h3 className="d-inline">
          <button
            className="btn btn-outline-primary float-end"
            onClick={this.props.onReset}
          >
            <i className="bi bi-arrow-clockwise"></i>
            Reset
          </button>
        </h3>
      </div>
    );
  }
}
