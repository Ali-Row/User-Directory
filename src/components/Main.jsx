import React, { Component } from "react";
import Nav from "./Nav/Nav.jsx";
import Table from "./Table/Table.jsx";
import API from "../utils/API.js";

export default class Main extends Component {
  state = {
    users: [{}],
    sortedUsers: [{}],
    order: "descending",
  };

  tableHeadings = [
    { headingName: "Image", width: "10%" },
    { headingName: "Name", width: "10%" },
    { headingName: "Phone", width: "15%" },
    { headingName: "Email", width: "20%" },
    { headingName: "DOB", width: "10%" }
  ];

  handleSort = (heading) => {
    if (this.state.order === "descending") {
      this.setState({
        order: "ascending",
      });
    } else {
      this.setState({
        order: "descending",
      });
    }

    const compare = (a, b) => {
      if (this.state.order === "ascending") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.sortedUsers.sort(compare);
    this.setState({ sortedUsers: sortedUsers });
  };

  handleSearchChange = (e) => {
    const filterLetter = e.target.value;
    const sortedList = this.state.users.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filterLetter.toLowerCase()) !== -1;
    });
    this.setState({ sortedUsers: sortedList });
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      this.setState({
        users: res.data.results,
        sortedUsers: res.data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearchChange={this.handleSearchChange} />
        <Table headings={this.tableHeadings} users={this.state.sortedUsers} handleSort={this.handleSort} />
      </div>
    );
  }
}
