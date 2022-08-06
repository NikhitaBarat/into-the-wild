import React from "react";
import "./App.css";
import { Dashboard, Home, PlantDash, PlantProfile, Tribeprofile } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="discover" element={<Dashboard />} />
        <Route path="plant">
          <Route index element={<PlantDash />} />
          <Route path=":plantId" element={<PlantProfile />} />
        </Route>
        <Route path="tribeprofile" element={<Tribeprofile />} />
      </Routes>
    </div>
  );
}

export default App;
