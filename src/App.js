import React, { Component } from 'react';
import styled from 'styled-components';

import Calculator from './containers/Calculator';
import GlobalStlye from './stylesheets/global-styles';

const Container = styled.div`
  margin: 1rem auto;
  width: 33rem;
  max-width: 90%;
`;

const Title = styled.h1`
  margin: 1.5rem 0 0.5rem;
  text-align: center;

  @media (min-width: ${props => props.theme.breakSmall}) {
    font-size: 2.441rem;
  }

  @media (min-width: ${props => props.theme.breakMedium}) {
    font-size: 3.052rem;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStlye />
        <Title>Overall Score Calculator</Title>
        <Calculator />
      </Container>
    );
  }
}

export default App;
