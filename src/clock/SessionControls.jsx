import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SessionControls extends React.Component {
  render() {
    const classes = `session ${this.props.className}`;
    return (
      <div className={classes}>
        <h4 id="session-label" className="session-label label">
          Session Length
        </h4>
        <div className="flex-centered">
          <button
            id="session-decrement"
            className="session-decrement decrement"
            onClick={this.props.onSessionDecrease}
          >
            <FontAwesomeIcon icon="minus"></FontAwesomeIcon>
          </button>
          <div
            id="session-length"
            className="session-length-label label-number"
          >
            {this.props.sessionLength}
          </div>
          <button
            id="session-increment"
            className="session-increment increment"
            onClick={this.props.onSessionIncrease}
          >
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
          </button>
        </div>
      </div>
    );
  }
}
