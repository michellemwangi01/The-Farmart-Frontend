import React, { Component } from 'react';

class VendorPage extends Component {
  state = {
    fullName: '',
    businessName: '',
    mobileNumber: '',
    email: '',
    address: '',
    farmSize: '',
    errors: {},
    selectedProducts: {
      LiveAnimals: false,
      MeatAndPoultry: false,
      FreshProduce: false,
      Eggs: false,
      HoneyAndBeeProducts: false,
      GrainAndCereals: false,
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

  validateForm = () => {
    const {
      fullName,
      businessName,
      mobileNumber,
      email,
      address,
      farmSize,
    } = this.state;

    const errors = {};

    if (!fullName) {
      errors.fullName = 'Full Name is required';
    }

    if (!businessName) {
      errors.businessName = 'Business Name is required';
    }

    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Mobile Number must be 10 digits';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not valid';
    }

    if (!address) {
      errors.address = 'Address is required';
    }

    if (!farmSize) {
      errors.farmSize = 'Farm Size is required';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      alert('Vendor Registration Successful');
    }
  };

  render() {
    return (
      <div className="vendor-page">
        <div className="header flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl">FARM ART</h1>
          </div>
          <div className="navigation">
            <ul className="flex space-x-4">
              <li className="text-sm">ABOUT US</li>
              <li className="text-sm">PRODUCTS</li>
              <li className="text-sm bg-green-700 hover:bg-brown-600 text-black font-serif text large">
                LOGIN
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-4 bg-white-500 text-white shadow-md rounded-md my-4">
          <h2 className="text-center text-black">Vendors</h2>
          <div className="flex items-center mt-6">
            <div>
              <p className="text-xl text-black font-bold">
                <i className="fas fa-store text-green-500 mr-2"></i> Become a FarmArt Vendor
              </p>
              <p className="text-black">
                Register Today and put your goods directly in the hands of clients with Farmart.
              </p>
            </div>
            <img
              src="https://farmersfuturefoundation.org/wp-content/uploads/Farmers-Future-Foundation_team-of-Happy-African-Woman-in-Agriculture-1.png"
              alt="Vendor Image"
              className="w-2/5 h-72 ml-14"
            />
          </div>
          <button className="bg-green-600 hover:bg-pink-700 text-white font-serif py-2 px-4 rectangle">
            Register Today
          </button>
        </div>

        <div className="card p-5 bg-green-600 text-white shadow-md rounded-md my-4 text-center">
          <h2>Why Choose FarmArt?</h2>
          <div className="features flex p-6">
            <div className="feature bg-white text-black w-64 p-4">
              <p className="font-bold text-xl text-left ml-0 flex">
                Revolutionary Technology Platform{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="80"
                  version="1.1"
                  viewBox="0 0 48 48"
                  xmlSpace="preserve"
                  fill="#0b8609"
                  className=""
                >
                  <path
                    fillRule="evenodd"
                    d="M38 47H10a4 4 0 01-4-4V5a4 4 0 014-4h28a4 4 0 014 4v38a4 4 0 01-4 4zm2-42a2 2 0 00-2-2H10a2 2 0 00-2 2v38a2 2 0 002 2h28a2 2 0 002-2V5zM10 39V7h28v32H10zm2-2h24V9H12v28zm20-21h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zm-7 7h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zm0-7h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zm-7 7h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zm0-7h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zm5-12h2v2h-2V4zm1 36a2 2 0 11-.001 4.001A2 2 0 0124 40z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
              <p className="mt-4 text-left">
                Easily show your goods to thousands of vendors shopping each day
              </p>
            </div>
            <div className="feature flex p-6">
              <p>
                <i className=""></i> Last Mile Distribution to 
                Retailers - Easily show your goods to thousands of vendors shopping each day
              </p>
            </div>
            <div className="feature flex p-6">
              <p>
                <i className="fas fa-tools text-black-500 mr-6"></i> Tools to Grow Your Business -
                Easily show your goods to thousands of vendors shopping each day
              </p>
            </div>
          </div>
        </div>

        <div className="registration-form">
          <h2 className="text-center left">Vendor Registration Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
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
                {this.state.errors.fullName && (
                  <div className="text-red-500">{this.state.errors.fullName}</div>
                )}
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
                {this.state.errors.businessName && (
                  <div className="text-red-500">{this.state.errors.businessName}</div>
                )}
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
                {this.state.errors.mobileNumber && (
                  <div className="text-red-500">{this.state.errors.mobileNumber}</div>
                )}
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
                {this.state.errors.email && (
                  <div className="text-red-500">{this.state.errors.email}</div>
                )}
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
                {this.state.errors.address && (
                  <div className="text-red-500">{this.state.errors.address}</div>
                )}
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
                {this.state.errors.farmSize && (
                  <div className="text-red-500">{this.state.errors.farmSize}</div>
                )}
              </div>
            </div>

            <div>
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

            <button
              type="submit"
              className="bg-green-500 hover:bg-yellow-500 text-white font-serif py-2 px-8 rounded box"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default VendorPage;
