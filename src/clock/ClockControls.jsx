import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ClockControls extends React.Component {
  render() {
    return (
      <div className="clock-controls flex-centered">
        <button
          id="start_stop"
          className="clock-start clock-button"
          title="Start / Pause"
          onClick={this.props.onStart}
        >
          <FontAwesomeIcon icon="play"></FontAwesomeIcon>
          <FontAwesomeIcon icon="pause"></FontAwesomeIcon>
        </button>
        <button
          id="reset"
          className="clock-reset clock-button"
          title="Reset"
          onClick={this.props.onReset}
        >
          <FontAwesomeIcon icon="redo-alt"></FontAwesomeIcon>
        </button>
      </div>
    );
  }
}
