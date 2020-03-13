import React, { Component } from 'react';


class Food extends Component {
  render() {
    return (
      <div>
        {this.props.foods.map((food) => (
          <p>{food.name}</p>
        ))}
      </div>
    );
  }
}

export default Food;
