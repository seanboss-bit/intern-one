import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  return (
    <div className="login">
      <div className="container classic">
        <div className="form-body">
          <div className="login-img">
            <img
              src="https://plateauhealth.online/assets/images/plaschema-logo.png"
              alt="LOGO"
            />
          </div>
          <h3>Log in</h3>
          <form
            className="form container"
            onSubmit={() => {
              alert(`Welcome User`);
              history.push("/dashboard");
            }}
          >
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
