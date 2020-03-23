import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Routeaddproducts from "./Routeaddproducts.js";
import Routechange from "./Routechange.js";

import "./styles.css";

import Helmet from "react-helmet"; // for background
import Admin from "./Admin.js";

class Adminwelcome extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pass: 0
    };
  }

  logout = () => {
    alert("logging out");
    this.setState({ pass: 5 });
  };

  render() {
    if (this.state.pass == 5) {
      return <Admin />;
    }
    return (
      <div>
        <Helmet
          bodyAttributes={{
            style:
              'background-image : url("https://marketingland.com/wp-content/ml-loads/2016/12/NAB-Product-Portfolio-1920x1080.png");'
          }}
        />
        <p id="headings">Welcome {this.props.value} </p>

        <BrowserRouter>
          <div>
            <Link class="button button1" to="/routeaddproducts">
              {" "}
              Add New Products
            </Link>
            <br />
            <Link class="button button1" to="/changeprice">
              Change Price Of Products{" "}
            </Link>
            <br />

            <hr />

            <Switch>
              <Route path="/routeaddproducts">
                <Routeaddproducts />
              </Route>
              <Route path="/changeprice">
                <Routechange />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>

        <br />
        <input
          class="button button1"
          type="button"
          value="logout"
          placeholder="Logout"
          onClick={this.logout}
        />
      </div>
    );
  }
}

export default Adminwelcome;
