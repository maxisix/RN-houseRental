import React, { Component } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

import { Filter } from "../Filter";
import { Separator } from "../Separator";
import { List } from "../Text";

const DetailsContainer = styled.View`
  margin-top: 32px;
  padding: 0 32px;
`;

const DetailsTitle = styled.Text`
  font-size: 20px;
  color: #444;
`;

const DetailsFilters = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const DetailsText = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  color: rgb(157, 163, 180);
`;

class Details extends Component {
  render() {
    return (
      <DetailsContainer>
        <DetailsTitle>
          Puerta del Sol Luxurious 2 Bedroom Apartment
        </DetailsTitle>
        <DetailsFilters>
          <Filter />
          <Filter />
          <Filter />
        </DetailsFilters>
        <DetailsText>
          Amazing designer luxury apartment 5 mins walking distance from the
          main attractions of Madrid (Mercado de S. Miguel, Plaza Mayor, Puerta
          del Sol, Thyssen Museum, Caixa Forum, Reina Sofia, Prado Museum and
          Retiro Park). {"\n"}
          {"\n"} 5*GL King bed + 2 King single beds and bedsheets + towels.
        </DetailsText>
        <Separator />
        <View>
          <List />
        </View>
        <Separator />
      </DetailsContainer>
    );
  }
}

export default Details;
