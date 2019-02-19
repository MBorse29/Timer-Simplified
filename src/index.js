import React, { Component } from "react";

class Timer extends Component {
  state = { value: 0 };

  startTimer = () => {
    let { value } = this.state;
    let self = this;
    this.timer = setInterval(() => {
      self.setState({ value: ++value });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ value: 0 });
  };

  render() {
    const { value } = this.state;
    return this.props.children({
      value,
      stopTimer: this.stopTimer,
      startTimer: this.startTimer,
      resetTimer: this.resetTimer
    });
  }
}

export default Timer;
