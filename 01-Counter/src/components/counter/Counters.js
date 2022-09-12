import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
    ],
  };

  hadleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  hadleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="card shadow-lg w-50">
        <Header totalCounters={this.state.counters.length} />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.hadleIncrement}
            onDecrement={this.hadleDecrement}
            //onDelete={this.hadleIncrement()}
          />
        ))}
        <Footer />
      </div>
    );
  }
}
