import React from "react";
import "./App.css";
import MainPage from "./assets/Components/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./assets/Components/AboutPage/AboutPage";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./assets/Components/Navbar/Navbar";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
