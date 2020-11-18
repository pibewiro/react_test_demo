import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    return (
      <div>
        <div data-test="headline" className="headline">
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.headline}</h2>
          </div>
        </div>
      </div>
    );
  }
}

Headline.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      make: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.string,
      price: PropTypes.number,
      sold: PropTypes.bool,
    })
  ),
};

export default Headline;
