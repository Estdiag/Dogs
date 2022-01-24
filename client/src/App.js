import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import CreateDog from "./Components/CreateDog.jsx";
import DogDetails from "./Components/DogDetails.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/create" element={<CreateDog />}></Route>
        <Route exact path="/dogDetail/:Id" element={<DogDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
