import React, { Component } from 'react';
import Slider from '../components/Slider';

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

  calculateScore = ({ coffee, aesthetic, seating, price, food, wifi }) => {
    const score = 
      coffee * 6 +
      aesthetic * 4 +
      seating * 4 +
      price * 5 +
      (food ? 10 : 0) +
      (wifi ? 5 : 0);
    console.log(score);
    return score;
  }

  componentDidMount() {
    this.updateScore();
  }

  updateScore = () => {
    this.setState((state) => {
      return { score: this.calculateScore(state) };
    });
  }

  handleSliderChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: Number(value)
    }, () => this.updateScore());
  }

  render() {
    return (
      <div>
        <label>
          Coffee
          <Slider
            name="coffee"
            value={this.state.coffee}
            handleChange={this.handleSliderChange}
          />
          {this.state.coffee}
        </label>
        <br />
        <label>
          Aesthetic
          <Slider
            name="aesthetic"
            value={this.state.aesthetic}
            handleChange={this.handleSliderChange}
          />
          {this.state.aesthetic}
        </label>
        <br />
        <label>
          Seating
          <Slider
            name="seating"
            value={this.state.seating}
            handleChange={this.handleSliderChange}
          />
          {this.state.seating}
        </label>

        <h3>{this.state.score}</h3>
      </div>
    );
  }
}

export default Calculator;
