import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags: []
    }; 

    // 1. we bind the 'this' using contructor.
    // constructor(){
    //     super(); // super is called before 
    //     this.handleIncrement = this.handleIncrement.bind(this); // it has the method bind in it.
    // }

    handleIncrement = (e) => { // 2. get the this using arrow function.
        console.log("clicked", e)
        this.setState({count:this.state.count + 1}) // setState to make aware react that the state 
                                                    // has changed and it will update the real dom with 
                                                    // virtual dom.
        // obj.method(); -> return reference
        // method() -> returns the reference of window object, but if the strict mode is enabled
                        // retuns undefined
    }

    render() { 
        return (
            <> 
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.handleIncrement({ id: Math.round(Math.random(100)*100)})} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </>
        );

    }
    getBadgeClass() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

