import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        value: this.props.counter.value,
        tags: []
    }

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }

    render() {
        return (
            <React.Fragment>
                <h6>Counter #{this.props.counter.id}</h6>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span><br/>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-danger btn-sm m-2">Delete</button>
                <br/>
            </React.Fragment>
        );
    }

    handleDecrement = (product) => {
        console.log(product);

        this.setState({value: this.state.value - 1});
    }

    handleIncrement = (product) => {
        console.log(product);

        this.setState({value: this.state.value + 1});
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p className="m-2">There is no tag to display.</p>;

        return (
            <ul className="m-2">
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero': value;
    }
}

export default Counter
