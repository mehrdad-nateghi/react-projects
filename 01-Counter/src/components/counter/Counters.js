import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

export default class Counters extends Component {
  render() {
    return (
      <div className="card shadow-lg w-50">
        <Header />
        <Counter />
        <Footer />
      </div>
    );
  }
}
