import React, { Component } from 'react';
import Food from './components/Food.js';
import './App.css';

// let baseURL = 'http://localhost:5000'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: [],
      proteinSearch: 0,
      fatSearch: 0,
      carbSearch: 0,
      sugarSearch: 0,
      searchedFoods: []
    }
  }


  componentDidMount(){
    // console.log(this.state);
    fetch(`/foods`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        foods:res[0].report.foods,
        // name:res[0].report.foods.map((foods) => (foods.name)),
        // protein:res[0].report.foods.map((foods) => (foods.nutrients[1].value)),
        // fats:res[0].report.foods.map((foods) => (foods.nutrients[2].value)),
        // carbs:res[0].report.foods.map((foods) => (foods.nutrients[3].value)),
        // sugar:res[0].report.foods.map((foods) => (foods.nutrients[4].value)),
      }, () => {
        // console.log(this.state.foods);
      })
    })
    .catch(err => console.log(err))
  }

  search = () => {
    for (var i = 0; i < this.state.foods.length; i++) {
      if (this.state.foods[i].nutrients[1].value >= this.state.proteinSearch && this.state.foods[i].nutrients[2].value >= this.state.fatSearch && this.state.foods[i].nutrients[3].value >= this.state.carbSearch && this.state.foods[i].nutrients[4].value >= this.state.sugarSearch) {
        // console.log(this.state.foods[i]);
        this.state.searchedFoods.push(this.state.foods[i])
      }
    }
    console.log(this.state.searchedFoods);
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.search()}}>click</button>
        {this.state.foods.map((food, id) => (
          <Food key={id} foods={food} />
        ))}
      </div>
    );
  }
}


export default App;

// this.state.foods.map((food) => {
//   // console.log(food);
//   food.nutrients.map((nutrient) => {
//     if (nutrient.nutrient_id === "221") {
//       return null
//     }
//     console.log(nutrient);
//   })
// })
// this.state.nutrients.map((food) => {
//   console.log(food);
// })
// this.state.nutrients.forEach((food) => {
//   food.map((nutrient) => {
//     console.log(nutrient.nutrient+':', + nutrient.value + nutrient.unit);
//   });
// })
