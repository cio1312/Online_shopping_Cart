import React, { Component } from "react";

import Marketlist from "./Grocery.json";
import Userdata from "./User.json";

import Helmet from "react-helmet"; // for background

import "./styles.css";

class Grocery extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pass: 0,
      c: 0,
      active1: false,
      review: null,
      r: 0
    };
  }

  showproducts() {
    let store = [];
    Marketlist.map((product, index) => {
      let name = product.name1;
      let price = product.price1;
      let quantity = product.count1;
      let specification = product.specification1;
      let description = product.description1;
      let rating = product.rating1;
      let image = product.image1;
      let rev = product.reviews1;

      store.push(
        <div id="maindiv">
          <div id="namediv">{name}</div>

          <div id="imageAlign">
            <img id="block1" src={image} alt="Smiley face" />
          </div>

          <div id="addtocartdiv">
            <button
              disabled={product.active1}
              onClick={event => this.addtocart(name)}
            >
              Add to cart
            </button>
          </div>

          <div id="pricediv1">Price</div>
          <div id="pricediv2">Rs {price}/Kg</div>

          <div id="ratediv1">Ratings</div>
          <div id="ratediv2">{rating}</div>

          <div id="qtydiv1">Quantity</div>
          <div id="qtydiv2">{quantity} Remaining</div>

          <table id="customers">
            <tr>
              <td>Description</td>

              <td>Specification</td>

              <td>Reviews</td>

              <td>New Review</td>
            </tr>

            <tr>
              <td>
                <p>{description}</p>
              </td>
              <td>
                <p>{specification}</p>
              </td>

              <td>{rev}</td>
              <td>
                <input
                  id="buttons_add_review"
                  type="text"
                  placeholder="write reviews"
                  onChange={event => this.setreview(event)}
                />
                <button
                  class="button button1"
                  onClick={event => this.addreviews(event, name)}
                >
                  Add Reviews
                </button>
              </td>
            </tr>
          </table>
        </div>
      );
    });

    // what is exactly happpening at button on top..4?
    return store;
  }

  setreview = event => {
    this.setState({ review: event.target.value });
  };

  addreviews = (event, name) => {
    // how to put a new line

    Marketlist.map((product, index) => {
      if (name === product.name1) {
        let review1 = "  " + product.revcnt1 + ") " + this.state.review + "\n";

        // why is price directly not changing in table?
        if (this.state.review.trim().length == 0) {
          alert("Review Field Cannot Be Empty");
        } else {
          product.reviews1[product.revcnt1] = review1;
          product.revcnt1 = product.revcnt1 + 1;
          alert("thank you for contribution");
          console.log(Marketlist);
        }
      }
    });
  };

  addtocart = name => {
    console.log(name);
    Marketlist.map((product, index) => {
      let a1 = product.name1;
      let a2 = product.count1;
      // ist check if product exist
      if (a1 === name) {
        if (a2 !== 0) {
          console.log(product);

          Userdata.map((item, index) => {
            const a1 = item.username1;
            if (a1 === this.props.name) {
              product.count1 = product.count1 - 1;

              alert(product.name1 + " Added to you cart");
              item.cart[this.state.c] = product; // doubtful
            }
            this.setState({ c: this.state.c + 1 });
          });
          console.log(Userdata);
          console.log(Marketlist);
        } else {
          product.active1 = true;
          alert("product does not exist in stock");
          console.log(product.active1);
        }
      }
    });
  };

  render() {
    if (this.state.pass == 0) {
      return (
        <div>
          <Helmet
            bodyAttributes={{
              style: "background-color: rgb(167, 241, 157);"
            }}
          />
          <p id="headings">Eat Drink Enjoy </p>

          <div>{this.showproducts()}</div>

          <br />
        </div>
      );
    }
  }
}

export default Grocery;
