import React, { Component } from 'react';
import Counter from './counter';

class CounterSet extends Component {

    state = {
        counters: [
            {id:1, value:9},
            {id:2, value:2},
            {id:3, value:7},
            {id:4, value:5},
            {id:5, value:0}
        ]
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter
                    key={counter.id} 
                    value={counter.value} 
                    id={counter.id}
                />)}
            </div>
        )
    }
}

export default CounterSet
