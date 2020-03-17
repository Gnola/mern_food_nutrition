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
    // console.log(this.state);
    return (
      <div>
        <ul>
          <li>{this.state.name}</li>
          <ul>
            <li>Id: {this.state.id}</li>
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

export default Food;
// <ul>
//   {this.props.foods.map((food, id) => (
//     <li key={id}>{food.name}: {food.nutrients.map((nutrients) => (
//         <ul><li>{nutrients.nutrient}: {nutrients.value}{nutrients.unit}</li></ul>))}
//     </li>
//   ))}
// </ul>
