import React from "react";
import db from "../data/db";

export class Table extends React.Component {
  state = {
    data: db,
    backupData: db,
  };

  handleFilter = (text) => {
    const filterd = this.state.data.filter(
      (item) =>
        item.first_name.includes(text) ||
        item.last_name.includes(text) ||
        item.phone.includes(text)
    );

    this.setState({
      backupData: filterd,
    });
  };

  render() {
    return (
      <div>
        <Search filter={this.handleFilter} />
        <table className="container">
          <tbody>
            <td>Name:</td>
            <td>Surname:</td>
            <td>Phone number:</td>
            <td>Profile pic:</td>
            {this.state.backupData.map((person, index) => (
              <Row
                key={index}
                firstName={person.first_name}
                lastName={person.last_name}
                phone={person.phone}
                image={person.image}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export class Row extends React.Component {
  render() {
    return (
      <tr className="row">
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.phone}</td>
        <td>
          <img src={this.props.image} alt="profile-pic" />
        </td>
      </tr>
    );
  }
}

export class Search extends React.Component {
  state = {
    value: "",
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      value: value,
    });
    this.props.filter(value)
  };

  render() {
    
    return (
      <div>
      <input className="input" name="search" value={this.state.value} onChange={this.onChange} placeholder="search  " />
      <h2 className="title">List of people:   </h2>
      </div>
    );
  }
}
