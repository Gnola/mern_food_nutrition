import React, { Component } from 'react';


class Food extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:this.props.foods.name,
      protein:this.props.foods.nutrients[1].value,
      fats:this.props.foods.nutrients[2].value,
      carbs:this.props.foods.nutrients[3].value,
      sugar:(this.props.foods.nutrients[4].value === "--") ? 0 : this.props.foods.nutrients[4].value
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.name}</li>
          <ul>
            <li>Protein: <strong>{this.state.protein}</strong>gs</li>
            <li>Fats: <strong>{this.state.fats}</strong>gs</li>
            <li>Carbs: <strong>{this.state.carbs}</strong>gs</li>
            <li>Sugar: <strong>{this.state.sugar}</strong>gs</li>
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
