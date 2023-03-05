import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row justify-content-center align-item-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Login Page</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-4">
                  Belum punya akun?
                  <Link to="/register">
                    <span className="text-center ms-2">Daftar</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
