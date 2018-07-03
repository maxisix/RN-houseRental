import React, { Component } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

class AvailableHome extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          translucent={false}
          barStyle="default"
          backgroundColor="transparent"
        />
        <Text>Hello AvailableHome</Text>
      </SafeAreaView>
    );
  }
}

export default AvailableHome;
