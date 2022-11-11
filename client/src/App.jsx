import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { SimpleSlider } from "./components/SimpleSlider/index.jsx";

import "./App.css";
import Header from "./components/header/Header";
//import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./components/contacts/Contacts.jsx";
import Planet from "./components/planetDetail/Planet.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SimpleSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/planet/:name" element={<Planet />} />
      </Routes>
      {/* <img src="./assets/Images/picture_one.jpg" alt="planet" /> */}
    </div>
  );
}

export default App;
