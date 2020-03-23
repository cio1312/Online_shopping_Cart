import React, { Component } from "react";
import "./styles.css";
import Helmet from "react-helmet"; // for background

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet
          bodyAttributes={{
            style:
              'background-image : url("http://goboom.in/wp-content/uploads/2019/12/6B1A6697.jpg");'
          }}
        />

        <div id="username_password_form">
          <h5 id="texts">contact number::</h5>
          <h4 id="texts">7744022653</h4>
          <h5 id="texts">email id::</h5>
          <h4 id="texts">valenciofernandesryan@gmail.com</h4>
        </div>
        <hr />
      </div>
    );
  }
}

export default Contact;
