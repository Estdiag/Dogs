import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import CreateDog from "./Components/CreateDog.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/create" element={<CreateDog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
