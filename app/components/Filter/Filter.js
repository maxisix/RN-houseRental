import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.View`
  margin-left: 16px;
  border-width: 1.5px;
  border-color: rgba(157, 163, 180, 0.3);
  border-radius: 50px;
  padding: 5px 10px;
`;

const FilterText = styled.Text`
  font-size: 12px;
  color: #9da3b4;
  font-weight: bold;
`;

class Filters extends Component {
  render() {
    return (
      <StyledContainer>
        <FilterText>2 bedrooms</FilterText>
      </StyledContainer>
    );
  }
}

export default Filters;
