import React, { useContext, useState } from "react";
import "../styles/Profile.css";
import "../App.css";
import axios from "axios";
import { FaCheckCircle, FaCreditCard, FaInfoCircle } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { dataContext } from "../contextProvider/DataContextProvider";

function Profile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [showVerification, setShowVerification] = useState(false);
  const [showMembership, setShowMembership] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const { api, localRoutePrefix, hostedRoutePrefix } = useContext(dataContext);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      const response = await api.post(
        "https://the-farmart-api-flask.onrender.com/uploadimage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
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
    setImage(null);
  };

  const handleVerificationClick = () => {
    setShowVerification(!showVerification);
  };

  const handleMembershipClick = () => {
    setShowMembership(!showMembership);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="container">
      <div class="left">
        <h1>Profile</h1>
        <div class="dp">
          <div className="profile-image">
            {image ? (
              <img
                src={image}
                alt="Profile picture"
                className="profile-card__picture"
              />
            ) : (
              <label htmlFor="profile-upload" className="add-icon">
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>
        <div class="icons">
          <div className="one">
            <div className="icon-section" onClick={handleVerificationClick}>
              <FaCheckCircle className="icon" />
              <span>Verification</span>
            </div>
            {showVerification && (
              <div className="verification-section">
                {/* Add an input for uploading identification cards */}
                <input type="file" accept="image/*" capture="camera" />
              </div>
            )}
          </div>
          <div className="two">
            <div className="icon-section" onClick={handleMembershipClick}>
              <FaCreditCard className="icon" />
              <span>Membership</span>
            </div>
            {showMembership && (
              <div className="membership-section">
                {/* Display membership cards: weekly, monthly, yearly */}
                <div>Weekly Card</div>
                <div>Monthly Card</div>
                <div>Yearly Card</div>
              </div>
            )}
          </div>
          <div className="three">
            <div className="icon-section" onClick={handleInfoClick}>
              <FaInfoCircle className="icon" />
              <span>Info</span>
            </div>
            {showInfo && (
              <div className="info-section">
                {/* Display user information */}
                {/* You can use form fields to display/edit user info here */}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="right">
        <div className="nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <h2>Farmart</h2>
        </div>
        <div className="upload">
          <div className="upload-pic">
            <label htmlFor="profile-upload" className="upload-link">
              <div className="upload-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
                <span>Upload profile picture</span>
              </div>
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
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <input type="text" {...field} placeholder="First Name" />
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
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <input type="text" {...field} placeholder="Last Name" />
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
                  <input type="email" {...field} placeholder="Email" />
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
                    <input type="text" {...field} placeholder="City" />
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
                    <input type="text" {...field} placeholder="Country" />
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
                    <input type="text" {...field} placeholder="Zip Code" />
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
                rules={{ required: "Address is required" }}
                render={({ field }) => (
                  <textarea {...field} placeholder="Address" />
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
