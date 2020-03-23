import React, { Component } from "react";

import Admin from "./Admin.js";

import Helmet from "react-helmet"; // for background

import Marketlist from "./Music.json";

import "./styles.css";

class changeprice extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pass: 0,
      c: 0,
      active1: false
    };
  }

  showproducts() {
    let store = [];
    store.push(
      <tr>
        <th>name</th>
        <th>price</th>
        <th>quantity</th>
        <th>specification</th>
        <th>description</th>
        <th>ratings</th>
        <th>new price</th>
      </tr>
    );
    Marketlist.map((product, index) => {
      store.push(
        <tr>
          <td>{product.name1}</td>
          <td>{product.price1}</td>
          <td>{product.count1}</td>
          <td>{product.specification1}</td>
          <td>{product.description1}</td>
          <td>{product.rating1}</td>

          <td>
            <input
              type="number"
              placeholder="price"
              onChange={event => this.changeprice(event, product.name1)}
            />
          </td>
        </tr>
      );
    });
    console.log(store);
    // what is exactly happpening at button on top..4?
    return store;
  }

  changeprice = (event, name) => {
    let val = event.target.value;
    console.log(name);
    Marketlist.map((product, index) => {
      if (name === product.name1) {
        product.price1 = parseInt(val); // why is price directly not changing in table?
      }
    });
  };

  logout = () => {
    alert("logging out");
    this.setState({ pass: 5 });
  };

  render() {
    if (this.state.pass == 5) {
      return <Admin />;
    }

    if (this.state.pass == 0) {
      return (
        <div>
          <Helmet
            bodyAttributes={{
              style: "background-color : gray;"
            }}
          />
          <p id="headings">Change Price Of Musical Instruments </p>

          <table id="contact">{this.showproducts()}</table>

          <br />
        </div>
      );
    }
  }
}

export default changeprice;
