import React, { Component } from 'react';

import Slider from '../components/Slider';
import BtnGroup from '../components/BtnGroup';
import Review from '../components/Review';

import { PRICE_BUTTONS, BOOL_BUTTONS } from '../constants/buttons';
import { calculateScore } from '../scripts/calculate-score';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: 5,
      aesthetic: 5,
      seating: 5,
      price: 3,
      food: true,
      wifi: true,
      score: 0
    }
  }

  componentDidMount() {
    this.updateScore();
  }

  updateScore = () => {
    this.setState((state) => {
      return { score: calculateScore(state) };
    });
  }

  handleSliderChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: Number(value)
    }, () => this.updateScore());
  }

  handleBtnGroupChange = (name, newValue) => {
    this.setState({
      [name]: newValue
    }, () => this.updateScore());
  }

  render() {
    const { coffee, aesthetic, seating, price, food, wifi } = this.state;

    return (
      <div>
        <Slider
          name="coffee"
          value={coffee}
          handleChange={this.handleSliderChange}
        />
        {coffee}

        <Slider
          name="aesthetic"
          value={aesthetic}
          handleChange={this.handleSliderChange}
        />
        {aesthetic}

        <Slider
          name="seating"
          value={seating}
          handleChange={this.handleSliderChange}
        />
        {seating}

        <BtnGroup
          name="price"
          buttons={PRICE_BUTTONS}
          selected={price}
          handleChange={this.handleBtnGroupChange}
        />

        <BtnGroup
          name="food"
          buttons={BOOL_BUTTONS}
          selected={food}
          handleChange={this.handleBtnGroupChange}
        />

        <BtnGroup
          name="wifi"
          buttons={BOOL_BUTTONS}
          selected={wifi}
          handleChange={this.handleBtnGroupChange}
        />

        <Review factors={this.state} />
      </div>
    );
  }
}

export default Calculator;
