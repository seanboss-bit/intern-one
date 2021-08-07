import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      toast.error("Please Enter Email or Password", {
        className: "error-toast",
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    } else if (form.password === "12345" && form.email === "admin@gmail.com") {
      toast.success("Welcome Admin", {
        className: "error-toast",
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      setTimeout(() => {
        history.push("/dashboard");
      }, 3500);
    } else {
      toast.error("Wrong Credentials", {
        className: "error-toast",
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  };
  const history = useHistory();
  return (
    <div className="login">
      <ToastContainer autoClose={3000} />
      <div className="container classic">
        <div className="form-body">
          <div className="login-img">
            <img
              src="https://plateauhealth.online/assets/images/plaschema-logo.png"
              alt="LOGO"
            />
          </div>
          <h3>Log in</h3>
          <form className="form container" onSubmit={submitForm}>
            <div className="form-inputs">
              <label>Email</label>
              <input
                onChange={onChange}
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
              />
            </div>
            <div className="form-inputs">
              <label>Password</label>
              <input
                onChange={onChange}
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
              />
            </div>
            <p>
              Forgot Password?
              <Link to="/" className="link">
                Click Here
              </Link>
            </p>
            <p>
              New Here?
              <Link to="/" className="link">
                Register Now
              </Link>
            </p>
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
