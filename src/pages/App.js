import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Login } from "./login";
import { Signup } from "./signup";
import { Home } from "./index";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}