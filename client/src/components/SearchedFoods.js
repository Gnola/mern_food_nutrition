import React, { Component } from 'react';

class SearchedFoods extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:this.props.foods.name,
      protein:(this.props.foods.nutrients[1].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[1].value,
      fats:(this.props.foods.nutrients[2].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[2].value,
      carbs:(this.props.foods.nutrients[3].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[3].value,
      sugar:(this.props.foods.nutrients[4].value === "--" || 0.00) ? '0.00' : this.props.foods.nutrients[4].value
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>SearchedFoods</h1>
        <ul>
          <li>{this.state.name}</li>
          <ul>
            <li>Protein: {this.state.protein}gs</li>
            <li>Fats: {this.state.fats}gs</li>
            <li>Carbs: {this.state.carbs}gs</li>
            <li>Sugar: {this.state.sugar}gs</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SearchedFoods;
