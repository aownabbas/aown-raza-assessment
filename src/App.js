import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardScreen from "./screens/card/Card";
import TableScreen from "./screens/table/Table"; // Import the Table component
import SearchBar from "./screens/searchbar/SearchBarScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardScreen />} />
        <Route path="/table" element={<TableScreen />} />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;
