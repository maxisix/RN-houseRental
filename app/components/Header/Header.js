import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components";

import { Pricetag } from "../Pricetag";

const HeaderContainer = styled.View`
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.16);
`;

const HeaderImage = styled.Image`
  width: 100%;
`;

const HeaderPricetag = styled.View`
  margin-right: 32px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderImage
          source={require("./images/breather187923Unsplash.jpg")}
          resizeMode="cover"
        />
        <HeaderPricetag>
          <Pricetag />
        </HeaderPricetag>
      </HeaderContainer>
    );
  }
}

export default Header;
