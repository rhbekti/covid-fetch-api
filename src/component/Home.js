import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(false);
  const [users, setDatas] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setDatas(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="mb-4">Data Users</h4>
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((dt, index) => {
                    return (
                      <tr key={index}>
                        <td>{dt.id}</td>
                        <td>{dt.username}</td>
                        <td>{dt.name}</td>
                        <td>{dt.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
