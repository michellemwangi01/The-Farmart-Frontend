import React, { useState } from "react";
import '../styles/Cart1.css'
import dairy from "../images/dairy.jpg";
import fish from "../images/fish.jpg";
import rabbits from "../images/rabbits.jpg";
import poultry from "../images/poultry.jpg";
import vegetables from "../images/vegetables.jpg";
import eggs from "../images/eggs.jpg";
import cereals from "../images/cereals.jpg";


function Cart1() {
  const [itemCounts, setItemCounts] = useState({
    dairy: 0,
    fish: 0,
    rabbits: 0,
    poultry: 0,
    vegetables: 0,
    eggs: 0,
    cereals: 0,
  });

  const handleIncrement = (item) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1,
    }));
  };

  const handleDecrement = (item) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] - 1 >= 0 ? prevCounts[item] - 1 : 0,
    }));
  };

  return (
    <div className="container">
      <center>
        <h1 className="mb-3">CART</h1>
      </center>
      <div className="row mb-3">
        <div className="col-md-4">
          <h3>LIVE ANIMALS</h3>
        </div>
        <div className="col-md-4">
          <h3>NAME</h3>
        </div>
        <div className="col-md-4">
          <h3>PRICE</h3>
        </div>
      </div>
      {/* Dairy Cows */}
      <div className="row">
        <div className="col-md-4">
          <img src={dairy} alt="cow" />
        </div>
        <div className="col-md-4">
          <p>DAIRY COWS</p>
          <p>********</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("dairy")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.dairy}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("dairy")}
          >
            <b>+</b>
          </button>
        </div>
        <div className="col-md-4">
          <p>$450</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      {/* Fanny Bay Petite Fish */}
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={fish} alt="fish" />
        </div>
        <div className="col-md-4">
          <p>FANNY BAY PETITE FISH</p>
          <p>**********</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("fish")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.fish}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("fish")}
          >
            <b>+</b>
          </button>
        </div>
        <div className="col-md-4">
          <p>$25</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      {/* Modern Rabbits */}
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={rabbits} alt="rabbits" />
        </div>
        <div className="col-md-4">
          <p>MODERN RABBITS</p>
          <p>**********</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("rabbits")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.rabbits}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("rabbits")}
          >
            <b>+</b>
          </button>
        </div>
        <div className="col-md-4">
          <p>$75</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      {/* Poultry */}
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={poultry} alt="poultry" />
        </div>
        <div className="col-md-4">
          <p>POULTRY</p>
          <p>**********</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("poultry")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.poultry}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("poultry")}
          >
            <b>+</b>
          </button>
        </div>
        <div className="col-md-4">
          <p>$30</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      {/* Farm Products */}
      <div className="row mt-3 mb-3">
        <div className="col-md-4">
          <h3>FARM PRODUCTS</h3>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
      {/* Fresh Vegetables */}
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={vegetables} alt="vegetables" id="imgfarmproducts" />
        </div>
        <div className="col-md-3">
          <p>FRESH VEGETABLES</p>
          <p>Quality Farm vegetables</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("vegetables")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.vegetables}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("vegetables")}
          >
            <b>+</b>
          </button>
          <br />
          <br />
          <p>
            Enjoy the fresh edible vegetables from the garden. It is of good
            quality with fair pricing
          </p>
          <h5>Recommendations</h5>
          <p>Store in a regular freezer for up to 7 days.</p>
        </div>
        <div className="col-md-3">
          <p>$5</p>
          <button className="btn btn-success btn-block mt-3">Add to cart</button>
        </div>
      </div>
      {/* Layer Eggs */}
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={eggs} alt="eggs" id="imgfarmproducts"/>
        </div>
        <div className="col-md-3">
          <p>Layer Eggs</p>
          <p>Fresh Eggs</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("eggs")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.eggs}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("eggs")}
          >
            <b>+</b>
          </button>
          <br />
          <br />
          <p>
            Nature's perfect food, are a remarkable agricultural product
            cherished for their versatility, nutritional value, and culinary
            importance
          </p>
          <h5>Recommendations</h5>
          <p>Store in a cool dry place.</p>
        </div>
        <div className="col-md-3">
          <p>$13 /-</p>
          <p className="mb-2">vege </p>
          <button className="btn btn-success btn-block mt-3">Add to cart</button>
        </div>
      </div>
      {/* Cereals */}
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={cereals} alt="Cereals" id="imgfarmproducts"/>
        </div>
        <div className="col-md-3">
          <p>Cereals</p>
          <p>Maize</p>
          <button
            className="decrement btn btn-success"
            onClick={() => handleDecrement("cereals")}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            value={itemCounts.cereals}
            readOnly
          />
          <button
            className="increment btn btn-success"
            onClick={() => handleIncrement("cereals")}
          >
            <b>+</b>
          </button>
          <br />
          <br />
          <p>
            Rich in carbohydrates, they provide the energy essential for the
            body's functions, fueling our daily activities and endeavors.
          </p>
          <h5>Recommendations</h5>
          <p>Store in a dry place.</p>
        </div>
        <div className="col-md-3">
          <p>$89 per bag</p>
          <p className="mb-2">vege </p>
          <button className="btn btn-success btn-block mt-3">Add to cart</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button className="btn btn-success mt-3 btn-block">
            Proceed to Checkout
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Cart1;
