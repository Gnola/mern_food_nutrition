import React, { Component } from 'react';
import Food from './components/Food.js';
import './App.css';

// let baseURL = 'http://localhost:5000'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: [],
      test: .5,
      test2: .5,
      test3: .5,
      test4: .5,
      // name:'',
      // protein:'',
      // carbs:'',
      // fats:'',
      // sugar:''
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
        let count = 0
        for (var i = 0; i < this.state.foods.length; i++) {
          if (this.state.foods[i].nutrients[1].value >= this.state.test && this.state.foods[i].nutrients[2].value >= this.state.test2 && this.state.foods[i].nutrients[3].value >= this.state.test3 && this.state.foods[i].nutrients[4].value >= this.state.test4) {
            console.log(this.state.foods[i]);
            count++
          }
        }
        console.log(count);
        // console.log(this.state.find(food => food.name == 'Alcohol'));
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
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
