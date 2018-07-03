import React, { Component } from "react";
import styled from "styled-components";
import { LinearGradient } from "expo";

const StyledContainer = styled.View`
  position: absolute;
  top: -17px;
  right: 0;
`;

const Price = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: "montserrat-regular";
`;

class Pricetag extends Component {
  render() {
    return (
      <StyledContainer>
        <LinearGradient
          colors={["#0ac4ba", "#2bda8e"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderRadius: 100
          }}
        >
          <Price>316 euro</Price>
        </LinearGradient>
      </StyledContainer>
    );
  }
}

export default Pricetag;
