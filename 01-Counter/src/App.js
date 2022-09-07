import React, { Component } from "react";
import Card from "./components/Card";

export default class App extends Component {
  render() {
    return (
      <div className="min-vh-100 p-3 bg-primary">
        <div className="d-flex align-items-center justify-content-center min-vh-100">
          <Card />
        </div>
      </div>
    );
  }
}
