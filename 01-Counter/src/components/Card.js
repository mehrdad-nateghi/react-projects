import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card shadow-lg w-50">
        <div className="card-header">
          <h3 className="d-inline">Counters</h3>

          <span className="d-inline">
            <span className="badge rounded-pill bg-danger mx-1">5</span>
          </span>

          <h3 className="d-inline">
            <button type="button" className="btn btn-outline-primary float-end">
              Reset
            </button>
          </h3>
        </div>
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
        <div className="card-footer text-muted">
          Created with <i className="bi bi-balloon-heart-fill"></i> by Mehrdad
          Nateghi
        </div>
      </div>
    );
  }
}
