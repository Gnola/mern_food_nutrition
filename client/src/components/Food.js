import React, { Component } from 'react';

class Food extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:this.props.foods.name,
      measurement:this.props.foods.measure,
      protein:this.props.foods.nutrients[1].value, // (this.props.foods.nutrients[1].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[1].value,
      fats:this.props.foods.nutrients[2].value, // (this.props.foods.nutrients[2].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[2].value,
      carbs:this.props.foods.nutrients[3].value, // (this.props.foods.nutrients[3].value === "--" || 0.00) ? 0 : this.props.foods.nutrients[3].value,
      sugar:this.props.foods.nutrients[4].value // (this.props.foods.nutrients[4].value === "--" || 0.00) ? '0.00' : this.props.foods.nutrients[4].value
    }
  }

  render() {
    return (
      <div className='food' id={this.props.id}>
          <li className='name'>{this.state.name} - {this.state.measurement}</li>
          <div className='nutrients'>
            <li className={(this.props.proteinSearch > 0) ? 'selected' :'protein'}>Protein: {this.state.protein}gs</li>
            <li className={(this.props.fatSearch > 0) ? 'selected' :'fats'}>Fats: {this.state.fats}gs</li>
            <li className={(this.props.carbSearch > 0) ? 'selected' :'carbs'}>Carbs: {this.state.carbs}gs</li>
            <li className={(this.props.sugarSearch > 0) ? 'selected' :'sugar'}>Sugar: {this.state.sugar}gs</li>
          </div>
      </div>
    );
  }
}

export default Food;
