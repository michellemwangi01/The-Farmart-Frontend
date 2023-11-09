import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../components/AxiosAddJWT";
import { useSpring, animated } from "react-spring";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  // -------------------- CREATE STATE VARIABLES
  const localRoutePrefix = "http://127.0.0.1:5555";
  const hostedRoutePrefix = "https://the-farmart-api-flask.onrender.com";
  const [categories, setCategories] = useState([]);
  const [isVendor, setIsVendor] = useState(false);
  const [products, setProducts] = useState([]);
  const [jwToken, setJWToken] = useState("");
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [payments, setPayments] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserCartItems, setCurrentUserCartItems] = useState([]);
  const [currentUserOrderHistory, setCurrentUserOrderHistory] = useState([]);
  const [vendorOrders, setVendorOrders] = useState([]);
  const [unfilteredVendorOrders, setUnfilteredVendorOrders] = useState([]);
  const [originalProductList, setOriginalProductList] = useState([]);
  const [orderTotalAmount, setOrderTotalAmount] = useState(0);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [cartItemQuantities, setCartItemQuantities] = useState({});
  const [isCartVisible, setCartVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isNewOrder, setIsNewOrder] = useState(false);
  const [currentVendorProducts, setCurrentVendorProducts] = useState([]);

  const [iscancellationApproved, setIsCancellationApproved] = useState("");
  const [
    unfilteredCurrentUserOrderHistory,
    setUnfilteredCurrentUserOrderHistory,
  ] = useState([]);
  const [productsTitleDisplay, setProductsTitleDisplay] =
    useState("All Products");

  const Kenya_counties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita/Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka-Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang'a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans Nzoia",
    "Uasin Gishu",
    "Elgeyo/Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi City",
  ];
  function capitalizeFirstLetter(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  // ----------------------- REFRESH TOKEN -----------------------------------------

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post("/refresh", {
        refresh_token: refreshToken,
      });
      const newAccessToken = response.data.access_token;
      localStorage.setItem("access_token", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("Token refresh failed", error);
      return null;
    }
  };

  // -------------------------------------------- SET HEADERS ----------------------------------------

  const headers = {
    Authorization: `Bearer ${jwToken}`,
  };

  // ---------------- CHECK IF USER IS VENDOR

  useEffect(() => {
    console.log(currentUser.vendor_id);
    if (currentUser.vendor_id === null) {
      setIsVendor(false);
    } else {
      setIsVendor(true);
    }
  }, [currentUser]);

  // ---------------- FETCHING ALL CATEGORIES

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/categories/categories`)
      .then((res) => {
        console.log("CATEGORIES", res.data);
        setCategories(res.data);
        setLoadingCategories(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });
  }, []);

  // ---------------- FETCHING ALL PRODUCTS

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/products/products`)
      .then((res) => {
        setProducts(res.data);
        setOriginalProductList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const updateProduct = (product) => {
    const update = [...products, product];
    setProducts(update);
  };

  // ---------------- FETCHING PAYMENTS
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/payments/get_payment_confirmation_details`)
      .then((res) => {
        setPayments(res.data);
        console.log("PAYMENTS:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // ---------------- FETCHING USER ORDER HISTORY

  useEffect(() => {
    if (currentUser.user_id !== 0) {
      axios
        .get(`${localRoutePrefix}/orders/user_orders`, { headers })
        .then((res) => {
          setCurrentUserOrderHistory(res.data);
          setUnfilteredCurrentUserOrderHistory(res.data);
          console.log("ORDER HISTORY", res.data);
        })
        .catch((error) => {
          console.error("Error fetching order history:", error);
        });
    }
  }, [currentUser, iscancellationApproved, isNewOrder]);

  // ---------------- FETCHING  VENDOR PRODUCT

  useEffect(() => {
    if (currentUser.user_id !== 0) {
      axios
        .get(`${localRoutePrefix}/products/vendor_products`, {
          headers: {
            Authorization: `Bearer ${jwToken}`,
          },
        })
        .then((res) => {
          setCurrentVendorProducts(res.data);
          console.log("VENDOR PRODUCTS", res.data);
        })
        .catch((error) => {
          console.error("Error fetching vendor products:", error);
        });
    }
  }, [currentUser]);

  // ------------------- HANDLE REMOVE FROM ORDER TEMPLATE

  const deleteFromOrder = (id) => {
    const updatedCartItems = currentUserCartItems.filter(
      (cartItem) => cartItem.id !== id
    );
    setCurrentUserCartItems(updatedCartItems);
    axios
      .delete(`${localRoutePrefix}/cartitems/cart_items/${id}`)
      .then((response) => {
        console.log(response.data);
        toastSuccessfulRemoveFromOrder(
          "Item successfully removed from cart/order!",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error removing item from order", error);
      });
  };

  // -------------------TOAST NOIFICATIONS

  const toastSuccessfulRemoveFromOrder = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  // -------------------------------------------- CALCULATE CART/ORDER TOTAL AMOUNT ----------------------------------------

  useEffect(() => {
    const totalAmount = currentUserCartItems.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    );
    setOrderTotalAmount(totalAmount);
    console.log(orderTotalAmount);
  }, [currentUserCartItems, cartItemQuantities]);

  // ---------------------------- COUNTER ANIMATION COMPONENT --------------------
  function Number({ n }) {
    const step = 10000;
    const { number } = useSpring({
      from: { number: n - 500 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div>
        {number.to((n) => `${Math.round(n).toLocaleString()}+`)}
      </animated.div>
    );
  }

  // ---------------- POPULATE THE DATA CONTEXT

  const data = {
    deleteFromOrder,
    categories,
    setCategories,
    hostedRoutePrefix,
    localRoutePrefix,
    products,
    originalProductList,
    setProducts,
    productsTitleDisplay,
    setProductsTitleDisplay,
    Kenya_counties,
    currentUserCartItems,
    setCurrentUserCartItems,
    currentUser,
    headers,
    setCurrentUser,
    jwToken,
    setJWToken,
    capitalizeFirstLetter,
    orderTotalAmount,
    setOrderTotalAmount,
    isAddedToCart,
    setIsAddedToCart,
    cartItemQuantities,
    setCartItemQuantities,
    currentUserOrderHistory,
    iscancellationApproved,
    setIsCancellationApproved,
    setCurrentUserOrderHistory,
    unfilteredCurrentUserOrderHistory,
    vendorOrders,
    setVendorOrders,
    isVendor,
    setIsVendor,
    Number,
    updateProduct,
    refreshAccessToken,
    isCartVisible,
    setCartVisible,
    isPopupVisible,
    setIsPopupVisible,
    isNewOrder,
    setIsNewOrder,
    currentVendorProducts,
    capitalizeFirstLetter,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
