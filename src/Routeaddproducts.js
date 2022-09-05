import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Addcars from "./Addcars.js";
import Addgrocery from "./Addgrocery.js";
import Addmusic from "./Addmusic.js";
import Addproducts from "./Addproducts.js";

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
              <Link class="button button1" to="/addcars">
                {" "}
                Add cars
              </Link>
              <br />
              <Link class="button button1" to="/addgrocery">
                Grocery{" "}
              </Link>
              <br />
              <Link class="button button1" to="/addmusic">
                Add Music Inst{" "}
              </Link>
              <br />
              <Link class="button button1" to="/market">
                Add Electronic Devices{" "}
              </Link>
              <hr />

              <Switch>
                <Route path="/addcars">
                  <Addcars />
                </Route>
                <Route path="/addgrocery">
                  <Addgrocery />
                </Route>
                <Route path="/addmusic">
                  <Addmusic />
                </Route>
                <Route path="/market">
                  <Addproducts />
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
