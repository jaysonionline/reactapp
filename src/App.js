
import { useState } from 'react';
import React from 'react';

import './App.css';

import Header from "./Header"


class MyCar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "Nikhil",
      age: 37
    }

  }

  changeAge = () =>{
    this.setState({age: 40})
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h2>Child Component</h2>
        <div>
          car color is : {this.props.cars.color}
        </div>
        <div>My name is {this.state.firstName} and age {this.state.age}</div>
        <button onClick={this.changeAge}>Change age</button>

      </div>
    )
  }

}




function App() {

  // let count = 0;

  // const car = {color:"red", company:"ford"};

  const [car, setCar] = useState({ color: "red", company: "ford" })

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    // count = count + 1;

    setCount((count) => count + 1)

  }

  const changeColor = () => {

    setCar({ color: "blue", company: "ford" })

  }

  return (
    <div>

      <h1> Update Counter </h1>

      <h2> Counter: {count}</h2>

      <button onClick={incrementCounter}>Increment</button>
      <button onClick={changeColor}>Change Color</button>

      <MyCar cars={car}></MyCar>

    </div>
  );
}

export default App;
