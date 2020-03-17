import React, { Component } from 'react';


class Food extends Component {
  constructor(props){
    super(props)
    this.state ={
      id:this.props.id,
      name:this.props.foods.name,
      protein:this.props.foods.nutrients[1].value,
      fats:this.props.foods.nutrients[2].value,
      carbs:this.props.foods.nutrients[3].value,
      sugar:this.props.foods.nutrients[4].value
      // protein:(this.props.foods.nutrients[1].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[1].value,
      // fats:(this.props.foods.nutrients[2].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[2].value,
      // carbs:(this.props.foods.nutrients[3].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[3].value,
      // sugar:(this.props.foods.nutrients[4].value === "--" || 0.00) ? '0.00' : this.props.foods.nutrients[4].value
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.name}</li>
          <ul>
            <li>Id: {this.state.id}</li>
            {(this.props.proteinSearch > 0) ? <li><strong>Protein: {this.state.protein}gs</strong></li> : <li>Protein: {this.state.protein}gs</li>}
            {(this.props.fatSearch > 0) ? <li><strong>Fats: {this.state.fats}gs</strong></li> : <li>Fats: {this.state.fats}gs</li>}
            {(this.props.carbSearch > 0) ? <li><strong>Carbs: {this.state.carbs}gs</strong></li> : <li>Carbs: {this.state.carbs}gs</li>}
            {(this.props.sugarSearch > 0) ? <li><strong>Sugar: {this.state.sugar}gs</strong></li> : <li>Sugar: {this.state.sugar}gs</li>}
          </ul>
        </ul>
      </div>
    );
  }
}

export default Food;
