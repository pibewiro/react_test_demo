import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListItem extends Component {
  render() {
    return (
      <div data-test="listItem-comp">
        <h2 data-test="title-comp">{this.props.title}</h2>
        <p data-test="desc-comp">{this.props.desc}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
