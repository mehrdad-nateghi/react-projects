import React, { Component } from "react";
import Counters from "./components/counter/Counters";

export default class App extends Component {
  render() {
    return (
      <div className="min-vh-100 p-3 bg-primary">
        <div className="d-flex align-items-center justify-content-center min-vh-100">
          <Counters />
        </div>
      </div>
    );
  }
}
