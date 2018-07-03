import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Font } from "expo";

import Navigator from "./config/routes";

// COLOR
const colors = {
  primary: {
    light: "#93EBCA",
    base: "#14CBAC",
    dark: "#0BC5B9"
  },
  secondary: {
    light: "#FFF",
    base: "#9DA3B4",
    dark: "#444444"
  }
};

class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <Navigator />
    ) : (
      <ActivityIndicator
        size="large"
        color={colors.primary.base}
        style={{ flex: 1 }}
      />
    );
  }
}

export default App;

//export default () => <Navigator />;
