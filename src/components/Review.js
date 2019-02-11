import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const lightTextOnDark = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ReviewDiv = styled.div`
  display: grid;
  grid-template:
    "overall breakdown"
    / auto 1fr;
  margin: 1.5rem 0;
  border-radius: 5px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.goldLight};
  ${lightTextOnDark}

  @media(max-width: ${props => props.theme.breakMedium}) {
    grid-template:
      "overall"
      "breakdown";
    max-width: 20rem;
    margin: 1.5rem auto;
  }

  @media(max-width: ${props => props.theme.breakSmall}) {
    max-width: 14rem;
  }
`;

const Overall = styled.div`
  grid-area: overall;
  margin: 1rem 2rem;
  text-align: center;

  h3 {
    margin: 0;
  }

  h1 {
    margin: 0;
    color: ${props => props.theme.gold};
    font-size: 3.815rem;
  }
`;

const Breakdown = styled.div`
  grid-area: breakdown;
  margin: 1rem 0;
  padding: 0 2rem;
  border-left: 2px solid ${props => props.theme.grey};

  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2rem;
  grid-template-column: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;

  @media(max-width: ${props => props.theme.breakMedium}) {
    margin: 0 2rem;
    padding: 1rem 0;
    border-top: 2px solid ${props => props.theme.grey};
    border-left: 0;
  }

  @media(max-width: ${props => props.theme.breakSmall}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

const Category = styled.div`
  position: relative;
  line-height: 1.7;
`;

const CategoryScore = styled.span`
  position: absolute;
  right: 0;
  color: ${props => props.theme.gold}
`;

class Review extends Component {
  renderPrice() {
    let dollars = '';

    Array.apply(null, Array(4 - this.props.factors.price)).forEach(() => {
      dollars += '$';
    });

    return dollars;
  }

  render() {
    const { coffee, aesthetic, seating, food, wifi, score } = this.props.factors;
    return (
      <ReviewDiv>
        <Overall>
          <h3>Overall Score</h3>
          <h1>{score}</h1>
        </Overall>
        
        <Breakdown>
          <Category>
            <span>Coffee</span>
            <CategoryScore>{coffee}/5</CategoryScore>
          </Category>
          <Category>
            <span>Aesthetic</span>
            <CategoryScore>{aesthetic}/5</CategoryScore>
          </Category>
          <Category>
            <span>Seating</span>
            <CategoryScore>{seating}/5</CategoryScore>
          </Category>
          <Category>
            <span>Price</span>
            <CategoryScore>{this.renderPrice()}</CategoryScore>
          </Category>
          <Category>
            <span>Food</span>
            <CategoryScore>{food ? 'Yes' : 'No'}</CategoryScore>
          </Category>
          <Category>
            <span>Wi-fi</span>
            <CategoryScore>{wifi ? 'Yes' : 'No'}</CategoryScore>
          </Category>
        </Breakdown>
      </ReviewDiv>
    );
  }
}

Review.propTypes = {
  factors: PropTypes.object.isRequired
}

export default Review;