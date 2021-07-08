import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Forum com as colunas preenchidas pelos usuários

class SkillsList extends Component {
  state = {
    allUsers: [],
    // username: "",
    // contribution: "",
    // skillstype: "",
    // source: ""
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://sao-ironrest.herokuapp.com/grupo7_irondummies"
      );
      console.log(response);
      this.setState({ allUsers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <div className="alert alert-secondary mt-5" role="alert">
          <strong>Help me!</strong>
          <br />
          <strong>Basics</strong> - Functions / Basic Algorithms / Data Types /
          OOP Basics / Functional Programming
          <br />
          <strong>WebDev Front</strong> - DOM / Event Handling / Component
          Development / State Management / Props / Frontend Routing / API
          integration / Lifting Stateup
          <br />
          <strong>WebDev Back</strong> - Database / Management / Plan and Model
          Database / Implement Restful API's / Security Basics / Persistent
          Login
          <br />
        </div>
        <div className="container container-md mt-5">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col col-md-2">Dummy</th>
                <th scope="col col-md-2">Contribution</th>
                <th scope="col col-md-2">Skill Type</th>
                <th scope="col col-md-2">Source</th>
                <th scope="col col-md-2"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.allUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.contribution}</td>
                    <td>{user.skilltype}</td>
                    <td>{user.source}</td>
                    <td>
                      <Link to={`/contributiondetails/${index}`}>
                        <i className="far fa-eye m-2"></i>
                      </Link>
                      <Link to={`/editcontribution/${index}/edit`}>
                        <i className="fas fa-edit m-2"></i>
                      </Link>
                      <Link to={`/deletecontribution/${index}/delete`}>
                        <i
                          style={{ color: "red" }}
                          className="fas fa-trash-alt m-2"
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SkillsList;