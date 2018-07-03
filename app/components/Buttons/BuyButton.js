import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

class BuyButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          borderRadius: "100%",
          backgroundColor: "#14CBAC",
          paddingHorizontal: 16,
          paddingVertical: 4,
          position: "absolute",
          top: -17,
          right: 0
        }}
      >
        <Text style={{ fontSize: 18, color: "#FFF" }}>316 euro</Text>
      </TouchableOpacity>
    );
  }
}

export default BuyButton;
