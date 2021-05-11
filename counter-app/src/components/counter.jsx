import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count: 0
    }

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }

    render() {
        return (
            <React.Fragment>
                <span style={{fontSize: 12, fontWeight:'bold'}} className="badge badge-primary m-2">{this.formatCount()}</span><br/>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}

export default Counter
