import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/MainPage/Experience";
import Contact from "./Components/ContactCard";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/projects" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
