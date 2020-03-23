import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Changecarprice from "./Changecarprice.js";
import Changegroceryprice from "./Changegroceryprice.js";
import Changemusicprice from "./Changemusicprice.js";
import Changeprice from "./Changeprice.js";

import "./styles.css";

import Helmet from "react-helmet"; // for background
import Adminwelcome from "./Adminwelcome.js";

class Routeaddproducts extends Component {
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
      return <Adminwelcome />;
    }

    if (this.state.pass == 0) {
      return (
        <div>
          <Helmet
            bodyAttributes={{
              style:
                'background-image : url("https://marketingland.com/wp-content/ml-loads/2016/12/NAB-Product-Portfolio-1920x1080.png");'
            }}
          />
          <BrowserRouter>
            <div>
              <Link class="button button1" to="/changecar">
                {" "}
                Edit Car DataBase
              </Link>
              <br />
              <Link class="button button1" to="/hangegrocery">
                Edit Grocery DataBase{" "}
              </Link>
              <br />
              <Link class="button button1" to="/changemusic">
                Edit Musical instruments DataBase{" "}
              </Link>
              <br />
              <Link class="button button1" to="/changemarket">
                Edit Electronic device DataBase
              </Link>
              <hr />

              <Switch>
                <Route path="/changecar">
                  <Changecarprice />
                </Route>
                <Route path="/hangegrocery">
                  <Changegroceryprice />
                </Route>
                <Route path="/changemusic">
                  <Changemusicprice />
                </Route>
                <Route path="/changemarket">
                  <Changeprice />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}
export default Routeaddproducts;
