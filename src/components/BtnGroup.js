import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BtnGroupDiv = styled.div`
  margin: 1.5rem 0;

  h3 {
    margin: 0 0 0.5rem;
    text-transform: capitalize;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 2%;
`;

const Button = styled.input`
  border: 1px solid ${props => props.theme.gold};
  border-radius: 5px;
  background: ${props => props.active ? props.theme.gold : props.theme.goldLight};
  color: ${props => props.active ? props.theme.goldLight : props.theme.gold};
  font-size: 0.8rem;
  padding: 0.5rem 1rem;

  :hover {
    background: ${props => props.theme.gold};
    color: ${props => props.theme.goldLight};
  }
`;

class BtnGroup extends Component {
  renderButtons() {
    const { name, buttons, selected, handleChange } = this.props;

    return buttons.map((button, i) => (
      <Button
        active={button.value === selected}
        key={i}
        type="button"
        value={button.label}
        onClick={() => handleChange(name, button.value)}
      />
    ));
  }

  render() {
    return (
      <BtnGroupDiv>
        <h3>{this.props.name}</h3>
        <Buttons>
          {this.renderButtons()}
        </Buttons>
      </BtnGroupDiv>
    );
  }
}

BtnGroup.propTypes = {
  name: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default BtnGroup;