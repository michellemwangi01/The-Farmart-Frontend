import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css'; 
import { FaCheckCircle, FaCreditCard, FaInfoCircle } from 'react-icons/fa';
import { useForm, Controller } from 'react-hook-form';

function Profile() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null); 
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
    } else {
      setImage(null);
    }
  };
  const handleDeleteImage = () => {
    // Handle image deletion here by clearing the 'image' state.
    setImage(null);
  };

  return (
    <div className="container">
      <div class="left">
        <h1>Profile</h1>
        <div class="dp">
          <div className="profile-image">
            {image ? (
              <img src={image} alt="Profile picture" className="profile-card__picture" />
            ) : (
              <label htmlFor="profile-upload" className="add-icon">
                <input type="file" id="profile-upload" accept="image/*" onChange={handleImageUpload} />
              </label>
            )}
          </div>
        </div>
        <div class="icons">
          <div className='one'>
            <div className='icon-section'>
              <FaCheckCircle className="icon" />
              <span>Verification</span>
            </div>
          </div>
          <div className='two'>
            <div className='icon-section'>
              <FaCreditCard className="icon" />
              <span>Membership</span>
            </div>
          </div>
          <div className='three'>
            <div className='icon-section'>
              <FaInfoCircle className="icon" />
              <span>Info</span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="right">
        <div className="nav">
          <i class="fa fa-bell" aria-hidden="true"></i>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <i class="fa fa-user" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <h2>Farmart</h2>
        </div>
        <div className="upload">
          <div className="upload-pic">
            <label htmlFor="profile-upload" className="upload-link">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <span>Upload profile picture</span>
            </label>
          </div>
          <div className="Update">
          <button onClick={handleDeleteImage}>Update</button>
          </div>
        </div>

        <div className="forms">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name*</label>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'First name is required' }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="First Name"
                    />
                  )}
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name*</label>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Last name is required' }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Last Name"
                    />
                  )}
                />
                {errors.lastName && <span>{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    placeholder="Email"
                  />
                )}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="City"
                    />
                  )}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="country">Country</label>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Country"
                    />
                  )}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="zipCode">Zip Code</label>
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Zip Code"
                    />
                  )}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="stateProvince">State/Province</label>
                <Controller
                  name="stateProvince"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="State/Province"
                    />
                  )}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address*</label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: 'Address is required' }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Address"
                  />
                )}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>
            <div className="botton-bn">
              <div className="centered-button">
                <button type="submit" className="btn btn-primary">
                  Update Information
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
