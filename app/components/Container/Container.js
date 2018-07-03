import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: white;
`;

const BackgroundImage = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 326px;
`;

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledContainer>
        <BackgroundImage
          source={require("./images/header.png")}
          resizeMode="stretch"
        />
        <SafeAreaView style={{ flex: 1 }}>{this.props.children}</SafeAreaView>
      </StyledContainer>
    );
  }
}

export default Container;
