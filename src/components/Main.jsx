import React, { Component } from 'react';
import Nav from './Nav.jsx'

export default class Main extends Component {
    
    handleSearchChange = e => {
        console.log(e.target.value);
    }


    render() {
        return (
            <div>
                <Nav handleSearchChange={this.handleSearchChange}/>
            </div>
        );
    }
}
