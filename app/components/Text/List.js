import React, { Component } from "react";
import styled from "styled-components";

const ListContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const ListTitle = styled.Text`
  font-size: 12px;
  color: #9da3b4;
  font-weight: bold;
`;

const ListItem = styled.Text`
  font-size: 12px;
  color: rgb(157, 163, 180);
`;

class List extends Component {
  render() {
    return (
      <ListContainer>
        <ListTitle>Features</ListTitle>
        <ListItem>Balcony</ListItem>
        <ListItem>Parking</ListItem>
        <ListItem>Dryer</ListItem>
        <ListItem>Dishwasher</ListItem>
      </ListContainer>
    );
  }
}

export default List;
