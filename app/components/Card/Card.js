import React, { Component } from "react";
import styled from "styled-components";

import { Pricetag } from "../Pricetag";
import { Filter } from "../Filter";

const StyledContainer = styled.TouchableOpacity`
  margin: 0 16px 16px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
`;

const Thumbail = styled.Image`
  width: 100%;
`;

const Content = styled.View`
  position: relative;

  margin: 0 16px;
  padding: 16px 0;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #444444;
`;

const Filters = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

class Card extends Component {
  render() {
    return (
      <StyledContainer>
        <Thumbail
          source={require("./images/breather187923Unsplash.png")}
          resizeMode="cover"
        />
        <Content>
          <Pricetag />
          <Title>Puerta del Sol Luxurious 2 Bedroom Apartment</Title>
          <Filters>
            <Filter />
            <Filter />
            <Filter />
          </Filters>
        </Content>
      </StyledContainer>
    );
  }
}

export default Card;
