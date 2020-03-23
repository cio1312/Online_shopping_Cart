import React, { Component } from "react";

import Admin from "./Admin.js";

import Changegroceryprice from "./Changegroceryprice.js";
import Marketlist from "./Grocery.json";

import "./styles.css";

import Helmet from "react-helmet"; // for background

class Addgrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      specification: "",
      url: "",
      description: "",
      rating: "",
      pass: 0
    };

    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  addValue = () => {
    let bucket = {
      name1: "",
      price1: "",
      count1: null,
      specification1: "",
      description1: "",
      rating1: "",
      image1: "",
      reviews1: [],
      revcnt1: 0,
      activate1: false
    };

    let a1 = this.state.name;
    let a2 = this.state.price;
    let a3 = this.state.quantity;
    let a4 = this.state.specification;
    let a5 = this.state.description;
    let a6 = this.state.rating;
    let a7 = this.state.url;

    bucket.name1 = a1;
    bucket.price1 = a2;
    bucket.count1 = a3;
    bucket.specification1 = a4;
    bucket.description1 = a5;
    bucket.rating1 = a6;
    bucket.image1 = a7;
    if (
      this.state.name === "" ||
      a1.trim().length == 0 ||
      a2.trim().length == 0 ||
      a3.trim().length == 0 ||
      a4.trim().length == 0 ||
      a5.trim().length == 0 ||
      a7.trim().length == 0
    ) {
      alert("please enter product details ");
    } else {
      Marketlist.push(bucket);
      console.log(this.state.name);
      alert("Product Added Successfully");
    }
  };

  logout = () => {
    alert("logging out");
    this.setState({ pass: 5 });
  };

  pricechange = () => {
    this.setState({ pass: 7 });
  };

  render() {
    if (this.state.pass == 5) {
      return <Admin />;
    }

    if (this.state.pass == 7) {
      return <Changegroceryprice />;
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

          <body id="username_password_form">
            <p id="headings">Enter New Product Details For Grocery </p>

            <input
              id="inputs"
              type="text"
              name="name"
              placeholder="name"
              onChange={this.updateInput}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="number"
              name="price"
              placeholder="price"
              onChange={this.updateInput}
            />

            <br />
            <br />
            <input
              id="inputs"
              type="number"
              name="quantity"
              placeholder="Quantity"
              onChange={this.updateInput}
            />

            <br />
            <br />
            <input
              id="inputs"
              type="text"
              name="specification"
              placeholder="specification"
              onChange={this.updateInput}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="text"
              name="description"
              placeholder="description"
              onChange={this.updateInput}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="url"
              name="url"
              placeholder="image url link"
              onChange={this.updateInput}
            />
            <br />
            <br />
            <input
              id="inputs"
              type="range"
              max="5"
              min="1"
              name="rating"
              placeholder="rating"
              onChange={this.updateInput}
            />
            <br />
            <br />

            <input
              id="buttons"
              type="button"
              value="read"
              placeholder="read"
              onClick={this.addValue}
            />

            <br />
            <br />
          </body>
        </div>
      );
    }
  }
}

export default Addgrocery;
