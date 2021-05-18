import React, { Component } from 'react';
import Counter from './counter';

class CounterSet extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        // value={counter.value} 
                        // id={counter.id}
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={() => { this.props.onIncrement(counter) }}
                        onDecrement={() => { this.props.onDecrement(counter) }}
                    />)}
            </div>
        )
    }
}

export default CounterSet
