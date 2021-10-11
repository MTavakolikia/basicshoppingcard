import React, { Component } from 'react';
class Counter extends Component {
    render() {
        const {value}=this.props.counter;
        let classes="badge m-2 bg-";
        classes += value === 0 ? "warning" : "primary";
        return (
            <div className="row">
                 <div className="col-1">
                <span className={classes}>{value === 0 ? "Zero" : value}</span>
                </div>
                <div className="col">
                <button className="btn btn-secondary btn-sm m-1" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button disabled={value === 0 ? 'disabled' : ''} className="btn btn-secondary btn-sm m-1" onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(this.props.counter.id)}>×</button>
                </div>
                </div>
        );
    }
}
 
export default Counter;
