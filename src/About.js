import React, { Component } from "react";
import "./styles.css";
import Helmet from "react-helmet"; // for background

class About extends Component {
  render() {
    return (
      <div>
        <Helmet
          bodyAttributes={{
            style:
              'background-image : url("https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1574707271750-DHLN8FOHADSU61JBT876/ke17ZwdGBToddI8pDm48kF0OLVcBpfeLArU44aYlu9h7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0vIHRucUU7a1Vci15HXS8HJfNvaWVx1ITdXEZlVZUBwpPgzugLHXTeT7NtT_SILjGA/onward_back_2019.jpg?format=2500w");'
          }}
        />

        <p id="username_password_form">
          <p id="texts">
            welcome to valencio's online shopping mall. we are 24*7 at you
            service . please feel free to contact anytime
          </p>
        </p>
        <hr />
      </div>
    );
  }
}

export default About;
