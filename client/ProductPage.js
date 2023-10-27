import React, { Component } from 'react';

class Productpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Product 1',
          category: 'All Products',
          // Add other product details
        },
        // Add more product objects here
      ],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="product-page">
        <header className="header">
          <div className="logo">
            <h1>FARM ART</h1>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart <i className="fas fa-shopping-cart"></i></a></li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <div className="sidebar">
            <h2>Categories</h2>
            <ul>
              <li><a href="/products">All Products</a></li>
              <li><a href="/products/live-animals">Live Animals</a></li>
              <li><a href="/products/dairy">Dairy</a></li>
              <li><a href="/products/meat">Meat</a></li>
              <li><a href="/products/cereals-and-grains">Cereals and Grains</a></li>
              <li><a href="/products/honeybee-products">Honeybee Products</a></li>
              <li><a href="/products/fresh-produce">Fresh Produce</a></li>
            </ul>
          </div>
          <div className="product-listings">
            <h1>Products</h1>
            <input type="text" placeholder="Search products" />

            {products.map((product) => (
              <div key={product.id} className="product">
                <h2>{product.name}</h2>
                <p>Category: {product.category}</p>
                {/* Add more product details here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
