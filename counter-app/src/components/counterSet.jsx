import React, { Component } from 'react';
import Counter from './counter';

class CounterSet extends Component {

    render() {
        const { onReset, onDelete, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={() => { onIncrement(counter) }}
                        onDecrement={() => { onDecrement(counter) }}
                    />)}
            </div>
        )
    }
}

export default CounterSet
