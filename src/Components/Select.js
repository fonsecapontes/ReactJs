import React, { Component } from 'react';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onInput(e);
    }

    render() {
        var options = [];
        this.props.categories.forEach((categories) => {
            options.push(<option value={categories.name} key={categories.name}>{categories.name}</option>);
        });

        return (
            <select
                className="form-control"
                name={this.props.name}
                value={this.props.category}
                onChange={this.handleInputChange}>
                {options}
            </select>
        )
    }
}