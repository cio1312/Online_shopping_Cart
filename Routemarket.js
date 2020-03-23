import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";

import About from "./About.js";
import Contact from "./Contact.js";
import User from "./User.js";
import Market from "./Market.js";
import Music from "./Music.js";
import Cars from "./Cars.js";
import Grocery from "./Grocery.js";

import Helmet from "react-helmet"; // for background

import "./styles.css";

class Routemarket extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pass: 0,
      c: 0,
      active1: false,
      review: { say: "" },
      r: 1
    };
  }

  logout = () => {
    alert("logging out");
    this.setState({ pass: 5 });
  };

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
                'background-image : url("https://www.pluspackaging.com/wp-content/uploads/2018/07/Grocery-Store-Product-Packaging.jpg");'
            }}
          />

          <BrowserRouter>
            <div>
              <p id="userlogin">
                <Link class="button button2" to="/about">
                  {" "}
                  About the Website
                </Link>
              </p>
              <p id="userlogin">
                <Link class="button button2" to="/contact">
                  Contact Information{" "}
                </Link>
              </p>

              <Link class="button button1" to="/music">
                Musical Instruments{" "}
              </Link>
              <br />
              <Link class="button button1" to="/cars">
                Super Cars{" "}
              </Link>
              <br />
              <Link class="button button1" to="/grocery">
                Kitchen FOODZ{" "}
              </Link>
              <br />

              <Link class="button button1" to="/market">
                Electronic Devices{" "}
              </Link>

              <hr />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/music">
                  <Music name={this.props.name} />
                </Route>
                <Route path="/cars">
                  <Cars name={this.props.name} />
                </Route>
                <Route path="/grocery">
                  <Grocery name={this.props.name} />
                  {console.log(this.props.name)}
                </Route>

                <Route path="/market">
                  <Market name={this.props.name} />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default Routemarket;
