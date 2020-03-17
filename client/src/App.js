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
    fetch(`/foods`)
    .then(res => res.json()) // format response to json
    .then((res) => {
      this.setState({
        foods:res[0].report.foods, // set state
      },
      () => { // change all --s to 0s
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
      [event.target.id] : parseInt(event.target.value) || 0
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.search()
  }

  // SEARCH
  search = () => {
    this.setState({
      searched: [], // clear search array
      searchedFoods: []
    }) // loop through foods and find matches
    for (var i = 0; i < this.state.foods.length; i++) {
      if (this.state.foods[i].nutrients[1].value >= this.state.proteinSearch && this.state.foods[i].nutrients[2].value >= this.state.fatSearch && this.state.foods[i].nutrients[3].value >= this.state.carbSearch && this.state.foods[i].nutrients[4].value >= this.state.sugarSearch) {
        this.state.searched.push(this.state.foods[i])
      }
    }
    if (this.state.searched.length === 0) {
      alert('Sorry no results matched your search. Please try again')
      this.setState({
        proteinSearch: 0,
        fatSearch: 0,
        carbSearch: 0,
        sugarSearch: 0,
      })
    }
    this.setState({
      searchedFoods: this.state.searched // set state of searchedFoods to what was found in for loop
    })
    console.log(this.state);
  }

  // RESET - recall API to clear search results?
  reset = () => {
    // fetch(`/foods`)
    // .then(res => res.json())
    // .then((res) => {
    //   this.setState({ // reset state completely
    //     foods:res[0].report.foods,
    //     searchedFoods: [],
    //     proteinSearch: 0,
    //     fatSearch: 0,
    //     carbSearch: 0,
    //     sugarSearch: 0,
    //   }, () => {
    //     for (var i = 0; i < this.state.foods.length; i++) {
    //       if (this.state.foods[i].nutrients[1].value === '--') {
    //         this.state.foods[i].nutrients[1].value = 0
    //       }
    //       if (this.state.foods[i].nutrients[2].value === '--') {
    //         this.state.foods[i].nutrients[2].value = 0
    //       }
    //       if (this.state.foods[i].nutrients[3].value === '--') {
    //         this.state.foods[i].nutrients[3].value = 0
    //       }
    //       if (this.state.foods[i].nutrients[4].value === '--') {
    //         this.state.foods[i].nutrients[4].value = 0
    //       }
    //     }
    //   })
    // })
    // .catch(err => console.log(err))
    this.setState({
      searched: [],
      searchedFoods: [],
      proteinSearch: 0,
      fatSearch: 0,
      carbSearch: 0,
      sugarSearch: 0,
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className='search-form'>
          <form onSubmit={this.handleSubmit}>
            Protein:<input id='proteinSearch' value={this.state.proteinSearch} onChange={this.handleChange} /> <br/>
            Fats:<input id='fatSearch' value={this.state.fatSearch} onChange={this.handleChange} /> <br/>
            Carbs:<input id='carbSearch' value={this.state.carbSearch} onChange={this.handleChange} /> <br/>
            Sugar:<input id='sugarSearch' value={this.state.sugarSearch} onChange={this.handleChange} /> <br/>
            <button value='submit'>Search</button>
          </form>
          <button onClick={() => {this.reset()}}>Reset</button>
        </div>


        {this.state.searchedFoods.map((food, id) => (
          <Food
            key={id}
            foods={food}
            id={id}
            proteinSearch={this.state.proteinSearch}
            fatSearch={this.state.fatSearch}
            carbSearch={this.state.carbSearch}
            sugarSearch={this.state.sugarSearch} />
        ))}
      </div>
    );
  }
}


export default App;
