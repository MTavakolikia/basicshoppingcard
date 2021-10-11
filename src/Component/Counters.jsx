import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    render() { 
        return (
            <React.Fragment>
                <button className="btn btn-primary m-2 btn-sm" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map( counter => (
                <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete}
                counter={counter}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                />
            ))}
            </React.Fragment>
        )
    }
}
 
export default Counters;