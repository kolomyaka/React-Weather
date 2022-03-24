import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./pages/shared/header/Header";
import Popup from "./pages/shared/Popup/Popup";

function App() {
  return (
    <>
      <Popup />
      <div className="global__container">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/month-statistics" element={<MonthStatistics />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
