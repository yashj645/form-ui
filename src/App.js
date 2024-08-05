import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Table from "routes/Table";
import NotFound from "routes/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
