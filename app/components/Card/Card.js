import React, { Component } from "react";
import { Image, View, Text } from "react-native";

import { BuyButton } from "../Buttons";

class Card extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 6,
          backgroundColor: "#ffffff",
          shadowColor: "rgba(0, 0, 0, 0.16)",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 10,
          shadowOpacity: 1
        }}
      >
        <Image
          source={require("./images/breather187923Unsplash.png")}
          resizeMode="cover"
          style={{ width: "100%" }}
        />
        <View
          style={{
            marginHorizontal: 16,
            paddingVertical: 16,
            position: "relative"
          }}
        >
          <BuyButton />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: 0,
              textAlign: "left",
              color: "#444444"
            }}
          >
            Puerta del Sol Luxurious 2 Bedroom Apartment
          </Text>
        </View>
      </View>
    );
  }
}

export default Card;
