import React, { Component } from "react";

import "./styles.css";
import Adminwelcome from "./Adminwelcome.js";
import Admindata from "./Admin.json";

import Helmet from "react-helmet";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminname: "",
      adminpassword: "",
      pass: 0
    };
  }

  updateInput = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  validation = event => {
    let name = this.state.adminname;
    let password = this.state.adminpassword;

    var a = Admindata.filter(function(item) {
      return item.adminname1 === name && item.adminpassword1 === password;
    });

    if (a[0] != null) {
      if (a[0].adminname1 === name && a[0].adminpassword1 === password) {
        alert("correct");
        this.setState({ pass: 1 });
      }
    } else {
      alert("invalid credintials");
      this.setState({ pass: 0 });
    }
  };

  render() {
    if (this.state.pass == 0) {
      return (
        <div>
          <Helmet
            bodyAttributes={{
              style:
                'background-image : url("https://media.conbeo.com/assets/20190625154211/benthan2.jpg");'
            }}
          />

          <form id="username_password_form">
            <p id="headings">Enter Admin Credential </p>
            <input
              id="inputs"
              type="text"
              name="adminname"
              placeholder="admin name"
              onChange={event => this.updateInput(event)}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="text"
              name="adminpassword"
              placeholder="admin password"
              onChange={event => this.updateInput(event)}
            />
            <br />
            <br />
            <input
              id="buttons"
              type="button"
              placeholder="login"
              value="login"
              onClick={event => this.validation(event)}
            />
          </form>
        </div>
      );
    } else {
      return <Adminwelcome value={this.state.adminname} />;
    }
  }
}

export default Admin;
