import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = { 
        counters : [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     } 

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    
    handleReset = () => {
        const counter = this.state.counters.map(c =>{
            c.value = 0;
            return c
        });
        this.setState({ counter })
    }

    handleDelete = (id) => {
        this.setState({counters: this.state.counters.filter(c=>c.id !== id)})
    }
    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
                {this.state.counters.map(counter => (
                    <div>
                        <Counter 
                            key={counter.id} 
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete} 
                            counter={counter}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Counters;