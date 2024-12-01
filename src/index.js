import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import MataPelajaran from "./MataPelajaran.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mata-pelajaran" element={<MataPelajaran />} />
      </Routes>
    </Router>
  );
};

export default App;
