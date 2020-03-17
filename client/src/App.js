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
      proteinSearch: 0,
      fatSearch: 0,
      carbSearch: 0,
      sugarSearch: 0,
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
        for (var i = 0; i < this.state.foods.length; i++) {
          if (this.state.foods[i].nutrients[1].value === '--') {
            this.state.foods[i].nutrients[1].value = 0
          }
          if (this.state.foods[i].nutrients[2].value === '--') {
            this.state.foods[i].nutrients[2].value = 0
          }
          if (this.state.foods[i].nutrients[3].value === '--') {
            this.state.foods[i].nutrients[3].value = 0
          }
          if (this.state.foods[i].nutrients[4].value === '--') {
            this.state.foods[i].nutrients[4].value = 0
          }
        }
        console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : parseInt(event.target.value)
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

  reset = () => {
    fetch(`/foods`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        foods:res[0].report.foods,
        searchedFoods: [],
        proteinSearch: 0,
        fatSearch: 0,
        carbSearch: 0,
        sugarSearch: 0,
      }, () => {
        for (var i = 0; i < this.state.foods.length; i++) {
          if (this.state.foods[i].nutrients[1].value === '--') {
            this.state.foods[i].nutrients[1].value = 0
          }
          if (this.state.foods[i].nutrients[2].value === '--') {
            this.state.foods[i].nutrients[2].value = 0
          }
          if (this.state.foods[i].nutrients[3].value === '--') {
            this.state.foods[i].nutrients[3].value = 0
          }
          if (this.state.foods[i].nutrients[4].value === '--') {
            this.state.foods[i].nutrients[4].value = 0
          }
        }
        console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Protein:<input id='proteinSearch' type='number' step='0.5' min='0' value={this.state.proteinSearch} onChange={this.handleChange} /> <br/>
      Fats:<input id='fatSearch' type='number' step='0.5' min='0' value={this.state.fatSearch} onChange={this.handleChange} /> <br/>
    Carbs:<input id='carbSearch' type='number' step='0.5' min='0' value={this.state.carbSearch} onChange={this.handleChange} /> <br/>
  Sugar:<input id='sugarSearch' type='number' step='0.5' min='0' value={this.state.sugarSearch} onChange={this.handleChange} /> <br/>
      <button onClick={() => {this.search()}}>Search</button>
        <button onClick={() => {this.reset()}}>Reset</button>

        {this.state.searchedFoods.map((food, id) => (
          <Food key={id} foods={food} id={id} />
        ))}
      </div>
    );
  }
}


export default App;
