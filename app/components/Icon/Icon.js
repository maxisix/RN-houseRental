import React, { Component } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

const images = {
  arrowLeft: require("./images/arrowLeft.png"),
  menu: require("./images/menu.png"),
  search: require("./images/search.png")
};

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const icon = images[this.props.name];
    return <Image source={icon} />;
  }
}

export default Icon;
