import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnGroup extends Component {
  renderButtons() {
    const { name, buttons, selected, handleChange } = this.props;

    return buttons.map((button, i) => {
      const buttonClass = button.value === selected ? 'button--selected' : 'button';

      return (
        <input
          className={buttonClass}
          key={i}
          type="button"
          value={button.label}
          onClick={() => handleChange(name, button.value)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3 style={{textTransform: "capitalize"}}>{this.props.name}</h3>
        {this.renderButtons()}
      </div>
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