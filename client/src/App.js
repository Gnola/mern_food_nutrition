import React, { Component } from 'react';
import Food from './components/Food.js';
// import SearchedFoods from './components/SearchedFoods.js';
import './App.css';

// let baseURL = 'http://localhost:5000'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: [],
      proteinSearch: 0.00,
      fatSearch: 0.00,
      carbSearch: 0.00,
      sugarSearch: 0.00,
      searched: [],
      searchedFoods: [],
    }
  }

  // ON LOAD
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
        // console.log(res[0].report.foods);
        console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  // SEARCH
  search = () => {
    this.setState({
      searched: [] // reset array
    })
    // console.log(this.state);
    for (var i = 0; i < this.state.foods.length; i++) {
      if (this.state.foods[i].nutrients[1].value >= this.state.proteinSearch && this.state.foods[i].nutrients[2].value >= this.state.fatSearch && this.state.foods[i].nutrients[3].value >= this.state.carbSearch && this.state.foods[i].nutrients[4].value >= this.state.sugarSearch) {
        this.state.searched.push(this.state.foods[i])
      }
    }
    this.setState({
      searchedFoods: this.state.searched
    })
    console.log(this.state);
  }


  render() {
    // console.log(this.state.searched);
    return (
      <div>
        Protein:<input id='proteinSearch' type='number' step='0.5' min='0.00' value={this.state.proteinSearch} onChange={this.handleChange} /> <br/>
      Fats:<input id='fatSearch' type='number' step='0.5' min='0.00' value={this.state.fatSearch} onChange={this.handleChange} /> <br/>
    Carbs:<input id='carbSearch' type='number' step='0.5' min='0.00' value={this.state.carbSearch} onChange={this.handleChange} /> <br/>
  Sugar:<input id='sugarSearch' type='number' step='0.5' min='0.00' value={this.state.sugarSearch} onChange={this.handleChange} /> <br/>
        <button onClick={() => {this.search()}}>click</button>

        {this.state.searchedFoods.map((food, id) => (
          <Food key={id} foods={food} id={id} />
        ))}


      </div>
    );
  }
}


export default App;
// {(this.state.searched) ?
// this.state.searchedFoods.map((food, id) => (
//   <SearchedFoods key={id} foods={food} />
// ))
// :
// this.state.foods.map((food, id) => (
//   <Food key={id} foods={food} />
// ))}


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
