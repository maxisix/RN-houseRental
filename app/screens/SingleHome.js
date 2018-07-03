import React, { Component } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

class SingleHome extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          translucent={false}
          barStyle="default"
          backgroundColor="transparent"
        />
        <Text>Hello SingleHome</Text>
      </SafeAreaView>
    );
  }
}

export default SingleHome;
