import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/page";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile"; // Zaimportuj swoją stronę profilu
import StatisticsPage from "./pages/statistics"; // Zaimportuj swoją stronę statystyk

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
