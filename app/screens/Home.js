import React, { Component } from "react";
import {
  TouchableHighlight,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";

import { Icon } from "../components/Icon";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

class Home extends Component {
  static navigationOptions = {
    headerLeft: (
      <TouchableHighlight onPress={() => null} underlayColor="rgba(0, 0, 0, 0)">
        <Icon name="menu" />
      </TouchableHighlight>
    )
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  handleCardPress = () => {
    this.props.navigation.navigate("SingleHome");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Container>
          <View style={{ marginTop: 64 }}>
            <TouchableOpacity onPress={this.handleCardPress}>
              <Card />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleCardPress}>
              <Card />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleCardPress}>
              <Card />
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
