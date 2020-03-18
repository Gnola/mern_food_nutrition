import React, { Component } from 'react';
import Food from './components/Food.js';
import './App.css';

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
      checked: false
    }
  }

  // ON LOAD //
  componentDidMount(){
    fetch(`/foods`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        foods:res[0].report.foods,
      },
      () => {
        for (var i = 0; i < this.state.foods.length; i++) {
          if (this.state.foods[i].nutrients[1].value === '--' || 0.00) {
            this.state.foods[i].nutrients[1].value = '0.00'
          }
          if (this.state.foods[i].nutrients[2].value === '--' || 0.00) {
            this.state.foods[i].nutrients[2].value = '0.00'
          }
          if (this.state.foods[i].nutrients[3].value === '--' || 0.00) {
            this.state.foods[i].nutrients[3].value = '0.00'
          }
          if (this.state.foods[i].nutrients[4].value === '--' || 0.00) {
            this.state.foods[i].nutrients[4].value = '0.00'
          }
        }
        console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }

  // ON CHANGE //
  handleChange = (event) => {
    this.setState({
      [event.target.id] : parseInt(event.target.value) || 0
    })
  }

  // ON SUBMIT //
  handleSubmit = (event) => {
    event.preventDefault()
    this.search()
  }

  // SEARCH //
  search = () => {
    // clear search arrays
    this.setState({
      searched: [],
      searchedFoods: []
    })
    // loop through foods and find matches depending on checkbox
    if (!this.state.checked) {
      for (var i = 0; i < this.state.foods.length; i++) {
        if (this.state.foods[i].nutrients[1].value >= this.state.proteinSearch && this.state.foods[i].nutrients[2].value >= this.state.fatSearch && this.state.foods[i].nutrients[3].value >= this.state.carbSearch && this.state.foods[i].nutrients[4].value >= this.state.sugarSearch) {
          this.state.searched.push(this.state.foods[i])
        }
      }
    } else {
      for (var i = 0; i < this.state.foods.length; i++) {
        if (this.state.foods[i].nutrients[1].value <= this.state.proteinSearch && this.state.foods[i].nutrients[2].value <= this.state.fatSearch && this.state.foods[i].nutrients[3].value <= this.state.carbSearch && this.state.foods[i].nutrients[4].value <= this.state.sugarSearch) {
          this.state.searched.push(this.state.foods[i])
        }
      }
    }
    // alert if no results are found
    if (this.state.searched.length === 0) {
      alert('Sorry no results matched your search. Please try again')
      this.setState({
        proteinSearch: 0,
        fatSearch: 0,
        carbSearch: 0,
        sugarSearch: 0,
      })
    }
    // set state of searchedFoods to what was found in for loop
    this.setState({
      searchedFoods: this.state.searched
    })
    console.log(this.state);
  }

  // RESET //
  reset = () => {
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

  check = () => {
    this.setState({
      checked:!this.state.checked
    })
  }


  render() {
    return (
      <div>
        <div id='header'>
          <h1>thryve</h1>
        </div>
        <div id='search-form'>
          <h1>Search</h1>
          <p >Search for foods with a combination of the following nutrients by amounts (in grams).</p>
          <p id='search-text'>Check the box below to find foods with LESS THAN the amounts searched for.</p>
          <form onSubmit={this.handleSubmit}>
            <div id='inputs'>
              <span className='label'>Protein: <input id='proteinSearch' value={this.state.proteinSearch} onChange={this.handleChange} /></span>
              <span className='label'>Fats: <input id='fatSearch' value={this.state.fatSearch} onChange={this.handleChange} /></span>
              <span className='label'>Carbs: <input id='carbSearch' value={this.state.carbSearch} onChange={this.handleChange} /></span>
              <span className='label'>Sugar: <input id='sugarSearch' value={this.state.sugarSearch} onChange={this.handleChange} /></span>
              <input id='check-box' type='checkbox' value={this.state.checked} onChange={this.check}/>
            </div>

          <div className='btns'>
            <button id='search' value='submit'>Search</button>
            <a href='#' id='reset' onClick={() => {this.reset()}}>Reset</a>
          </div>
          </form>
        </div>
        <div id='all-food'>
          <h2 style={(this.state.searchedFoods.length === 0) ? {display:'none'} : {display: 'block'}}>Found Results: {this.state.searchedFoods.length}</h2>
          {this.state.searchedFoods.map((food, id) => (
            <Food key={id} foods={food} id={id}
              proteinSearch={this.state.proteinSearch}
              fatSearch={this.state.fatSearch}
              carbSearch={this.state.carbSearch}
              sugarSearch={this.state.sugarSearch}
            />
          ))}
        </div>
        <footer>
          Designed by Gianni Nola
        </footer>
      </div>
    );
  }
}

export default App;

// OG Search loop
// for (var i = 0; i < this.state.foods.length; i++) {
//   if (this.state.foods[i].nutrients[1].value >= this.state.proteinSearch && this.state.foods[i].nutrients[2].value >= this.state.fatSearch && this.state.foods[i].nutrients[3].value >= this.state.carbSearch && this.state.foods[i].nutrients[4].value >= this.state.sugarSearch) {
//     this.state.searched.push(this.state.foods[i])
//   }
// }

// OG Reset function
// reset = () => {
//   fetch(`/foods`)
//   .then(res => res.json())
//   .then((res) => {
//     this.setState({ // reset state completely
//       foods:res[0].report.foods,
//       searchedFoods: [],
//       proteinSearch: 0,
//       fatSearch: 0,
//       carbSearch: 0,
//       sugarSearch: 0,
//     }, () => {
//       for (var i = 0; i < this.state.foods.length; i++) {
//         if (this.state.foods[i].nutrients[1].value === '--') {
//           this.state.foods[i].nutrients[1].value = 0
//         }
//         if (this.state.foods[i].nutrients[2].value === '--') {
//           this.state.foods[i].nutrients[2].value = 0
//         }
//         if (this.state.foods[i].nutrients[3].value === '--') {
//           this.state.foods[i].nutrients[3].value = 0
//         }
//         if (this.state.foods[i].nutrients[4].value === '--') {
//           this.state.foods[i].nutrients[4].value = 0
//         }
//       }
//     })
//   })
//   .catch(err => console.log(err))
//   this.setState({
//     searched: [],
//     searchedFoods: [],
//     proteinSearch: 0,
//     fatSearch: 0,
//     carbSearch: 0,
//     sugarSearch: 0,
//   })
//   console.log(this.state);
// }
