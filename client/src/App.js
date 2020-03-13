import React, { Component } from 'react';
import Food from './components/Food.js';
import './App.css';

// let baseURL = 'http://localhost:5000'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: []
    }
  }

  componentDidMount(){
    // console.log(this.state);
    fetch(`/foods`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        foods:res[0].report.foods
      }, () => {
        console.log('state', this.state.foods);
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Food foods={this.state.foods}/>
      </div>
    );
  }
}


export default App;
