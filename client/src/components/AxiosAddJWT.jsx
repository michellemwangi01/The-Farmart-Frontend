import axios from "axios";

// const api = axios.create();
// // ----------------------- REFRESH TOKEN -----------------------------------------
// // Create the refresh token handler
// const refreshAccessTokenHandler = async () => {
//   const refreshToken = localStorage.getItem("refresh_token");

//   if (!refreshToken) {
//     // No refresh token available, user needs to log in again
//     return;
//   }

//   try {
//     const response = await axios.post("/refresh_token", {
//       refresh_token: refreshToken,
//     });

//     const { access_token, refresh_token, current_user } = response.data;
//     console.log(current_user);

//     // Update access token and refresh token in local storage
//     localStorage.setItem("access_token", access_token);
//     localStorage.setItem("refresh_token", refresh_token);

//     // setJWToken(access_token);
//     console.log(access_token);
//     return access_token;
//   } catch (error) {
//     console.error("Token refresh failed", error);
//     return null;
//   }
// };

// // Add a request interceptor
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(
//       "access_token"
//     )}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 500) {
//       // Access token is invalid, refresh it
//       refreshAccessTokenHandler();

//       // Retry the request with the updated access token
//       return axios(error.config);
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

// -----------------------------------------------------------------------------

// Create the refresh token handler
// const refreshAccessTokenHandler = async () => {
//   const refreshToken = localStorage.getItem("refresh_token");

//   if (!refreshToken) {
//     // No refresh token available, user needs to log in again
//     return;
//   }

//   try {
//     const response = await api.post(
//       "/refresh_token",
//       {
//         refresh_token: refreshToken,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const { access_token, refresh_token, current_user } = response.data;
//     console.log(current_user);

//     // Update access token and refresh token in local storage
//     localStorage.setItem("access_token", access_token);
//     localStorage.setItem("refresh_token", refresh_token);

//     setJWToken(access_token);
//     setCurrentUser(current_user);
//     setIsLoggedIn(true);
//     console.log(access_token);
//     console.log(currentUser);
//     return access_token;
//   } catch (error) {
//     console.error("Token refresh failed", error);
//     return null;
//   }
// };

// Add a request interceptor
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(
//       "access_token"
//     )}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 500) {
//       // Access token is invalid, refresh it
//       // refreshAccessTokenHandler();

//       // Retry the request with the updated access token
//       return axios(error.config);
//     }

//     return Promise.reject(error);
//   }
// );
