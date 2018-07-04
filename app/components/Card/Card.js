import React, { Component } from "react";
import styled from "styled-components";

import { Pricetag } from "../Pricetag";
import { Filter } from "../Filter";

const CardContainer = styled.View`
  margin: 0 16px 16px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
`;

const CardThumbail = styled.Image`
  width: 100%;
`;

const CardContent = styled.View`
  position: relative;

  margin: 0 16px;
  padding: 16px 0;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #444444;
`;

const CardFilters = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

class Card extends Component {
  render() {
    return (
      <CardContainer>
        <CardThumbail
          source={require("./images/breather187923Unsplash.png")}
          resizeMode="cover"
        />
        <CardContent>
          <Pricetag />
          <CardTitle>Puerta del Sol Luxurious 2 Bedroom Apartment</CardTitle>
          <CardFilters>
            <Filter />
            <Filter />
            <Filter />
          </CardFilters>
        </CardContent>
      </CardContainer>
    );
  }
}

export default Card;
