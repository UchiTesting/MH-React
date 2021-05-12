import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count: 0,
        // tags: ['tag1','tag2','tag3']
        tags: []
    }

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "This displays only if the tags array is empty."}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span><br/>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    handleDecrement(){
        alert("Decrement click.");
    }

    handleIncrement(){
        alert("Increment click.");
        console.log(this.state.count);
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
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}

export default Counter
