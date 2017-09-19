import React, { Component } from 'react';
import Select from './Select';

export default class ProductsForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInsertProducts = this.handleInsertProducts.bind(this);
    }

    handleInputChange(e) {
        this.props.onInput(e);
    }

    handleInsertProducts(e) {
        this.props.onInserProducts(e);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={this.props.products.name}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type=
                        "number"
                        name="price"
                        className="form-control"
                        value={this.props.products.price}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <Select 
                        categories={this.props.categories} 
                        name="category"
                        value={this.props.products.category}
                        onChange={this.handleInputChange}
                        onInput={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Stocked</label> 
                    <br />
                    <input 
                    type="checkbox"
                    name="stocked"
                    checked={this.props.products.stocked}
                    onChange={this.handleInputChange} />                  
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleInsertProducts}>Salvar</button>
            </form>);
    }
}