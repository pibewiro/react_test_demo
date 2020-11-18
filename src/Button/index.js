import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    return (
      <div data-test="button-component">
        <button onClick={() => this.submitEvent()}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
