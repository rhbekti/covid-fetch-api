import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
