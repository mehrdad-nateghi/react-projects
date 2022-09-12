import React, { Component } from "react";

export default class Like extends Component {
  render() {
    const heart = <i className="bi bi-heart"></i>;
    const heartFill = <i className="bi bi-heart-fill"></i>;

    if (this.props) {
      return heartFill;
    } else {
      return heart;
    }
  }
}
