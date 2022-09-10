import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  render() {
    return (
      <div className="card shadow-lg w-50">
        <Header totalCounters={this.state.counters.length} />
        <Counter />
        <Footer />
      </div>
    );
  }
}
