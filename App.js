import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import User from "./User.js";
import Admin from "./Admin.js";
import "./styles.css";
import Helmet from "react-helmet"; // for background

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pass: 0
    };
  }

  render() {
    if (this.state.pass == 0) {
      return (
        <div>
          <div id="norepeat">
            <Helmet
              bodyAttributes={{
                style:
                  'background-image : url("https://i.pinimg.com/originals/2f/ec/27/2fec279acb9652ae7e4d7f3302fd73cc.png");'
              }}
            />
          </div>
          <BrowserRouter>
            <div id="upperbar">
              <p id="headings">ZOOM-SHOP</p>
              <p id="userlogin">
                <Link to="/">User login / register</Link>
              </p>

              <p id="userlogin">
                <Link to="/admin">Admin</Link>
              </p>
              <hr />
            </div>

            <Switch>
              <Route exact path="/">
                <User />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}
export default App;
