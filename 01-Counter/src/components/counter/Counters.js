import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

export default class Counters extends Component {
  countersDefault = {};
  state = {
    counters: [
      { id: 1, value: 0, like: true },
      { id: 2, value: 0, like: true },
      { id: 3, value: 0, like: true },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id != counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [
      { id: 1, value: 0, like: true },
      { id: 2, value: 0, like: true },
      { id: 3, value: 0, like: true },
    ];
    this.setState({ counters });
  };

  render() {
    return (
      <div className="card shadow-lg w-25">
        <Header
          totalCounters={this.state.counters.length}
          onReset={this.handleReset}
        />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
        <Footer />
      </div>
    );
  }
}
