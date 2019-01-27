import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
  render() {
    const { min, max, name, value, handleChange } = this.props;
    return (
      <label>
        <h3 style={{textTransform: "capitalize"}}>{name}</h3>
        <input
          type="range"
          list="tickmarks"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <datalist id="tickmarks">
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
        </datalist>
      </label>
    );
  }
}

Slider.defaultProps = {
  min: 1,
  max: 5
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Slider;