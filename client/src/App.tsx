import React from "react";
import "./App.css";
import { Dashboard, Home, PlantProfile, Tribeprofile } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="plantprofile" element={<PlantProfile />} />
        <Route path="tribeprofile" element={<Tribeprofile />} />
      </Routes>
    </div>
  );
}

export default App;
