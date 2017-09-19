import React, { Component } from 'react';
import ProductsForm from '../Components/ProductsForm';
import FilterableProductTable from './FilterableProductTable'

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            category: CATEGORIES == null ? '' : CATEGORIES[0].name,
            stocked: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInsertProducts = this.handleInsertProducts.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleInsertProducts(e){
        PRODUCTS.push(this.state);
        this.setState({PRODUCTS: PRODUCTS})
    }

    render() {
        return (
            <div id="contentProduct">
                <h1>Products</h1>
                <hr />
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-10">
                        <ProductsForm 
                        products={this.state}
                        categories={CATEGORIES}
                        onInserProducts={this.handleInsertProducts}
                        onInput={this.handleInputChange} />
                    </div>
                </div>
                <hr />
                <h3>List of Products</h3>
                <br />
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-10">
                        <FilterableProductTable products={PRODUCTS} />
                    </div>
                </div>
            </div>
        );
    }
}

var PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

var CATEGORIES = [
    { name: 'Sporting' },
    { name: 'Electronics' },
    { name: 'Recreation' }
];