import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";

const PageRoute = () => {
  return (
    <>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default PageRoute;
