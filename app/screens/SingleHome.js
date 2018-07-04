import React, { Component } from "react";
import { ScrollView, StatusBar, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import { Details } from "../components/Details";

class SingleHome extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableHighlight
        onPress={() => navigation.goBack(null)}
        underlayColor="rgba(0, 0, 0, 0)"
      >
        <Icon name="arrowLeft" />
      </TouchableHighlight>
    ),
    headerRight: (
      <TouchableHighlight onPress={() => null} underlayColor="rgba(0, 0, 0, 0)">
        <Icon name="search" />
      </TouchableHighlight>
    )
  });

  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <Header />
        <Details />
      </ScrollView>
    );
  }
}

export default SingleHome;
