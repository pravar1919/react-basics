import React, { Component } from 'react';
import Movies from './components/movies';
import Counters from './components/counters';
import NavBar from './components/navbar';

import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor (props) {
    super(props);
    console.log("App - constructor", this.props)
  }
  componentDidMount(){
    console.log('App - Mounted')
  }
  handleCount =() => {
    let sum = this.state.counters.map(c =>{
        return c.value
    }).reduce((a, b) => a + b, 0)
    return sum
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = (id) => {
    this.setState({ counters: this.state.counters.filter((c) => c.id !== id) });
  };
  
  render() { 
    console.log('app - rendered')
    return (
      <>
        <NavBar count={this.handleCount} />
      
        <main className="container mt-3">
          <Counters counters={this.state.counters} 
                    onReset= {this.handleReset} 
                    onDelete={this.handleDelete} 
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    />
        </main>
      </>
    );
  }
}
 
export default App;