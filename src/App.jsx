import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ItemDetails from "../components/ItemDetails";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
