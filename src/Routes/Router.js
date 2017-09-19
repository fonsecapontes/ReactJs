import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../Containers/App';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={App} />
                </div>
            </BrowserRouter>
        );
    }
}
