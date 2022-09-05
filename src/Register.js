import React from "react";
import User from "./User.js";
import Userdata from "./User.json";
import "./styles.css";
import Helmet from "react-helmet"; // for background

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pass: 0,

      username: "",
      userpassword: "",
      id: null,

      cart: {
        name1: "",
        price1: "",
        specification1: "",
        description1: " ",
        rating1: "",
        count1: ""
      }
    };
  }

  updateInput(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  addtoUser = event => {
    let userlist = {
      id1: "",
      username1: "",
      userpassword1: "",
      cart: {}
    };
    let a1 = this.state.username; //............just setting previous values
    let a2 = this.state.userpassword;
    let id = parseInt(this.state.id);
    // how to add for care too....5?

    var flag = 0;
    for (var i = 0; i < Userdata.length; i++) {
      console.log(id);
      console.log(this.state.id);

      if (Userdata[i].id1 == id || this.state.id == null) {
        flag = 1;
        break;
      }
    }

    if (flag !== 1) {
      userlist.id1 = id;
      userlist.username1 = a1;
      userlist.userpassword1 = a2;
      userlist.cart = this.state.cart;

      Userdata.push(userlist);
      console.log(id);
      console.log(Userdata);

      alert("registered successfully");
    } else {
      alert("User already exist / no data inserted. Please change id");
    }
  };

  backtouser() {
    alert("login page");
    this.setState({ pass: 5 });
  }

  render() {
    if (this.state.pass == 5) {
      return <User />;
    }
    if (this.state.pass == 0) {
      return (
        <div>
          <Helmet
            bodyAttributes={{
              style:
                'background-image : url("https://media1.s-nbcnews.com/i/newscms/2017_12/1203382/10-germiest-things-grocery-store-today-170324-tease_37dd280c0a9486a136cbf7d587ad7dfc.jpg");'
            }}
          />

          <form id="username_password_form">
            <p id="headings">Enter New User Details </p>
            <input
              id="inputs"
              type="text"
              name="id"
              placeholder="id"
              onChange={event => this.updateInput(event)}
            />

            <br />
            <br />
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
              value="Register"
              onClick={event => this.addtoUser(event)}
            />

            <br />
            <br />
            <input
              id="buttons"
              type="button"
              placeholder="login"
              value="User login"
              onClick={event => this.backtouser(event)}
            />

            <br />
          </form>
        </div>
      );
    }
  }
}
export default Register;
