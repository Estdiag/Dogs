import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home.jsx";
import LandingPage from "./Components/landingPage/LandingPage.jsx";
import CreateDog from "./Components/createDog/CreateDog.jsx";
import DogDetails from "./Components/dogDetails/DogDetails.jsx";
import ErrorPage from "./Components/error/ErrorPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create" element={<CreateDog />} />
          <Route exact path="/dogDetail/:Id" element={<DogDetails />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
<div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/' element={<Nav />} element={<Nav />}>
              <Route path='home' element={<Home />}/>
              <Route path='dog/:id' element={<DogDetail />}/> 
            </Route>
            <Route path='create' element={<CreateDog />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
      */
