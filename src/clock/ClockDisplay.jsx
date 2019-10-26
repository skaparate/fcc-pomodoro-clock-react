import React from 'react';

export class ClockDisplay extends React.Component {
  render() {
    return (
      <div className="clock-screen">
        <h2
          id="timer-label"
          className={`clock-label ${this.props.displayClasses}`}
        >
          {this.props.isSession ? 'Session' : 'Break'}
        </h2>
        <h3
          id="time-left"
          className={`clock-display ${this.props.displayClasses}`}
        >
          {this.props.display}
        </h3>
      </div>
    );
  }
}
