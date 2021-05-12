import React, { Component } from 'react';
import Counter from './counter';

class CounterSet extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        )
    }
}

export default CounterSet
