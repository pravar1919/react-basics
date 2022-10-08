import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props
    return (
      <>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {counters.map((counter) => (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDelete={onDelete}
              onDecrement = {onDecrement}
              counter={counter}
            />
        ))}
      </>
    );
  }
}

export default Counters;
