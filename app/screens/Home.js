import React, { Component } from "react";
import { TouchableHighlight, ScrollView, StatusBar } from "react-native";
import PropTypes from "prop-types";

import { Icon } from "../components/Icon";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

class Home extends Component {
  static navigationOptions = {
    headerLeft: (
      <TouchableHighlight onPress={() => null} underlayColor="rgba(0, 0, 0, 0)">
        <Icon />
      </TouchableHighlight>
    )
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  handleCardPress = () => {
    console.log("hello");
    this.props.navigation.navigate("SingleHome");
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Container style={{ flex: 1 }}>
          <Card onTouchStart={() => alert("Hello...")} />
          <Card onPress={this.handlePressQuoteCurrency} />
          <Card onClick={this.handleCardPress} />
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
