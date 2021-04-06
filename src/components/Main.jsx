import React, { Component } from 'react';
import Nav from './Nav.jsx'
import Table from './Table.jsx'
import API from '../utils/API.js';

export default class Main extends Component {

    tableHeadings = ['Image', 'Name', 'Phone', 'Email', 'DOB'];
    
    componentDidMount() {
        API.getUsers()
        .then(res => {
            console.log(res.data.results);
        })
    } 

    handleSearchChange = e => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <Nav handleSearchChange={this.handleSearchChange}/>
                <Table />
            </div>
        );
    }
}
