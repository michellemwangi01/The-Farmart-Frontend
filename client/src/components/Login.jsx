import React,{useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setLoginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  return <div className="flex m-24 justify-center">
    <div className="w-1/3">
      <h1>From farm to market we got you covered</h1>
      <p>Thank you for choosing Farm-Mart</p>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
    <div>
      <h1>LOGIN TO TRADE</h1>
      <form action="">
        <label htmlFor="email">Email Address</label>
        <input type="text" value={loginForm.email} onChange={handleChange} placeholder ='Enter email address'name="email" id="email" /><br/>
        <label htmlFor="email">Password</label>
        <input type="password" value={loginForm.password} onChange={handleChange} placeholder='Enter Password'name="password" id="password" /><br/>
      </form>
    </div>
  </div>;
};

export default Login;
