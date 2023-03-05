import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/vaccinations",
        {
          nama,
          username,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Register Page</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="nama" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      className="form-control"
                      value={nama}
                      onChange={(e) => {
                        setNama(e.target.value);
                      }}
                    />
                  </div>
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
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
