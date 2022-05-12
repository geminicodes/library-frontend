import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  
};

export default App;
