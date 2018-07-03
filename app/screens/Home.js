import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  StatusBar
} from "react-native";

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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Container style={{ flex: 1 }}>
          <Text style={{ marginTop: 50 }} />
          <Card />
          <Card />
          <Card />
        </Container>
      </View>
    );
  }
}

export default Home;
