import React, { Component } from "react";
import styled from "styled-components";

const SeparatorContainer = styled.View`
  height: 1px;

  background-color: #e1e3e8;
`;

class Separator extends Component {
  render() {
    return <SeparatorContainer />;
  }
}

export default Separator;
