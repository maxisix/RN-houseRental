import React, { Component } from "react";
import { SafeAreaView, ImageBackground, View } from "react-native";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "white"
        }}
      >
        <ImageBackground
          source={require("./images/header.png")}
          resizeMode="stretch"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 326,
            position: "absolute"
          }}
        />
        <SafeAreaView style={{ flex: 1 }}>{this.props.children}</SafeAreaView>
      </View>
    );
  }
}

export default Container;
