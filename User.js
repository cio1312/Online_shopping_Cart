import "./styles.css";
import React, { Component } from "react";
import Routemarket from "./Routemarket.js";
import Register from "./Register.js";
import Userdata from "./User.json";
import Helmet from "react-helmet"; // for background

class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: "",
      userpassword: "",
      pass: 0
    };
  }

  updateInput = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  validation = event => {
    let name = this.state.username;
    let password = this.state.userpassword;

    var a = Userdata.filter(function(item) {
      return item.username1 === name && item.userpassword1 === password;
    });

    if (a[0] != null) {
      if (a[0].username1 === name && a[0].userpassword1 === password) {
        alert("correct"); //........1?
        // from here send the user number so that we can use same user in next pages

        this.setState({ session: a[0].id1 });
        this.setState({ pass: 1 });
        // window.location.href = "https://l0dvm.csb.app/Market";
      }
    } else {
      alert("invalid credintials");
      this.setState({ pass: 0 });
    }
  };

  registering() {
    this.setState({ pass: 2 });
  }

  render() {
    console.log(this.state.pass);

    if (this.state.pass == 2) {
      return <Register />;
    }

    if (this.state.pass == 0) {
      //  https://st4.depositphotos.com/2209782/21998/i/1600/depositphotos_219985974-stock-photo-ben-thanh-market-saigon.jpg
      return (
        <div id="mainbackground">
          <Helmet
            bodyAttributes={{
              style:
                'background-image : url("https://clipartion.com/wp-content/uploads/2015/11/pictures-of-shopping-bags1.jpeg");'
            }}
          />

          <form id="username_password_form">
            <p id="headings">Enter User Credential </p>
            <input
              id="inputs"
              type="text"
              name="username"
              placeholder="username"
              onChange={event => this.updateInput(event)}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="text"
              name="userpassword"
              placeholder="userpassword"
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
            <br />
            <br />
            <input
              id="buttons"
              type="button"
              placeholder="new user"
              value="Register"
              onClick={event => this.registering(event)}
            />
          </form>
        </div> // how to put image for full page
      );
    } else {
      console.log(this.state.username);
      return <Routemarket name={this.state.username} />;
    }
  }
}

export default User;
