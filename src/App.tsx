import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/MainPage/AboutPage";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/ContactCard";
import Project from "./Components/MainPage/Projects";
import ScrollToTop from "./Components/ScrollToTop";
const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/about" element={<AboutPage show={true} />} />
          <Route path="/projects" element={<Project route={true} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
