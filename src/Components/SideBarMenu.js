import React, { Component } from 'react';
import './SideBarMenu.css';

export default class SideBarMenu extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="\Products">Products</a>
                <a href="\Category">Categories</a>
            </div>
        );
    }
}