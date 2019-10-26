import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class BreakControls extends React.Component {
  render() {
    const classes = `break ${this.props.className}`;
    return (
      <div className={classes}>
        <h4 id="break-label" className="label">
          Break Length
        </h4>
        <div className="flex-centered">
          <button
            id="break-decrement"
            className="break-decrement decrement"
            onClick={this.props.onBreakDecrease}
          >
            <FontAwesomeIcon icon="minus"></FontAwesomeIcon>
          </button>
          <div id="break-length" className="break-label label-number">
            {this.props.breakLength}
          </div>
          <button
            id="break-increment"
            className="break-increment increment"
            onClick={this.props.onBreakIncrease}
          >
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
          </button>
        </div>
      </div>
    );
  }
}
