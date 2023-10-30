import React, { Component } from 'react';

class VendorPage extends Component {
  state = {
    fullName: '',
    businessName: '',
    mobileNumber: '',
    email: '',
    address: '',
    farmSize: '',
    location: '',
    selectedProducts: {
      liveAnimals: false,
      meatAndPoultry: false,
      freshProduce: false,
      eggs: false,
      honeyAndBeeProducts: false,
      grainAndCereals: false,
    },
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleProductSelection = (product) => {
    this.setState((prevState) => ({
      selectedProducts: {
        ...prevState.selectedProducts,
        [product]: !prevState.selectedProducts[product],
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
  };

  render() {
    return (
      <div className="vendor-page">
        <div className="header flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl">FARM ART</h1>
          </div>
          <div className="navigation">
            <ul className="flex space-x-3">
              <li className="text-sm">ABOUT US</li>
              <li className="text-sm">PRODUCTS</li>
              <li className="text-sm">LOGIN</li>
            </ul>
          </div>
        </div>
        <div className="title">
          <h2>Vendors</h2>
          <p>Become a FarmArt Vendor
            register Today and put your goods directly in the hands of clients with Farmart.
          </p>
          <button className="bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Register Today
          </button>
        </div>
        <div className="why-choose-farmart">
          <p>Why Choose FarmArt?</p>
          <div className="features">
            <div className="feature">
              <p>Revolutionary Technology Platform</p>
            </div>
            <div className="feature">
              <p>Last Mile Distribution to Retailers</p>
            </div>
            <div className="feature">
              <p>Tools to Grow Your Business</p>
            </div>
          </div>
        </div>
        <div className="registration-form">
          <h2>Vendor Registration Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName">Full Legal Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={this.state.businessName}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={this.state.mobileNumber}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="address">Physical Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="farmSize">Size of the Farm</label>
                <input
                  type="text"
                  id="farmSize"
                  name="farmSize"
                  value={this.state.farmSize}
                  onChange={this.handleInputChange}
                  className="border rounded-md p-2"
                />
              </div>
            </div>
            <div className="map">
              {/* Add Google Maps integration here */}
            </div>
            <div className="product-selection">
              <p>Select the Farm's Products:</p>
              {Object.keys(this.state.selectedProducts).map((product) => (
                <label key={product} className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={product}
                    checked={this.state.selectedProducts[product]}
                    onChange={() => this.handleProductSelection(product)}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  {product}
                </label>
              ))}
            </div>
            <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default VendorPage;

